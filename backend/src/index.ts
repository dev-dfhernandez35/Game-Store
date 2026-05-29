import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { db } from './db';

const app = express();
app.use(cors());
app.use(express.json());

// Interfaz TypeScript para el objeto Juego
interface Juego {
  id: number;
  nombre: string;
  precio: number;
  genero: string;
  imagen: string;
}

// GET todos los juegos
app.get('/juegos', (_req, res) => {
  db.all<Juego>('SELECT * FROM juegos', [], (error, rows: Juego[]) => {
    if (error) { res.status(500).send(error.message); return; }
    res.json(rows);
  });
});

// GET un juego por ID
app.get('/juegos/:id', (req, res) => {
  const { id } = req.params;
  db.get<Juego>('SELECT * FROM juegos WHERE id = ?', [id], (error, row: Juego) => {
    if (error) { res.status(500).send(error.message); return; }
    if (!row) { res.status(404).json({ error: 'Juego no encontrado' }); return; }
    res.json(row);
  });
});

// POST insertar un nuevo juego
app.post('/juegos', (req, res) => {
  const { nombre, precio, genero, imagen } = req.body as Omit<Juego, 'id'>;
  if (!nombre || precio === undefined) {
    res.status(400).json({ error: 'nombre y precio son requeridos' });
    return;
  }
  db.run(
    'INSERT INTO juegos(nombre, precio, genero, imagen) VALUES (?, ?, ?, ?)',
    [nombre, precio, genero || '', imagen || ''],
    function (this: sqlite3.RunResult, error: Error | null) {
      if (error) { res.status(500).send(error.message); return; }
      res.json({ id: this.lastID, nombre, precio, genero, imagen });
    }
  );
});

// PUT actualizar un juego existente
app.put('/juegos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, precio, genero, imagen } = req.body as Omit<Juego, 'id'>;
  if (!nombre || precio === undefined) {
    res.status(400).json({ error: 'nombre y precio son requeridos' });
    return;
  }
  db.run(
    'UPDATE juegos SET nombre = ?, precio = ?, genero = ?, imagen = ? WHERE id = ?',
    [nombre, precio, genero || '', imagen || '', id],
    function (this: sqlite3.RunResult, error: Error | null) {
      if (error) { res.status(500).send(error.message); return; }
      if (this.changes === 0) { res.status(404).json({ error: 'Juego no encontrado' }); return; }
      res.json({ id: Number(id), nombre, precio, genero, imagen });
    }
  );
});

// DELETE eliminar un juego
app.delete('/juegos/:id', (req, res) => {
  const { id } = req.params;
  db.run(
    'DELETE FROM juegos WHERE id = ?',
    [id],
    function (this: sqlite3.RunResult, error: Error | null) {
      if (error) { res.status(500).send(error.message); return; }
      if (this.changes === 0) { res.status(404).json({ error: 'Juego no encontrado' }); return; }
      res.json({ mensaje: `Juego ${id} eliminado correctamente` });
    }
  );
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
