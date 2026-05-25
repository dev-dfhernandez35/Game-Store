import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { db } from './db';

const app = express();

app.use(cors());
app.use(express.json());

// Actividad 2: cambiar 'SELECT * FROM juegos' por 'SELECT nombre FROM juegos' para ver qué cambia
app.get('/juegos', (_req, res) => {
  db.all('SELECT * FROM juegos', [], (error, rows) => {
    if (error) {
      res.status(500).send(error.message);
      return;
    }
    res.json(rows);
  });
});

// Actividad 3: insertar un nuevo juego desde el frontend
app.post('/juegos', (req, res) => {
  const { nombre, precio, genero, imagen } = req.body as {
    nombre: string;
    precio: number;
    genero: string;
    imagen: string;
  };

  if (!nombre || precio === undefined) {
    res.status(400).json({ error: 'nombre y precio son requeridos' });
    return;
  }

  db.run(
    'INSERT INTO juegos(nombre, precio, genero, imagen) VALUES (?, ?, ?, ?)',
    [nombre, precio, genero || '', imagen || ''],
    function (this: sqlite3.RunResult, error: Error | null) {
      if (error) {
        res.status(500).send(error.message);
        return;
      }
      res.json({ id: this.lastID, nombre, precio, genero, imagen });
    }
  );
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
