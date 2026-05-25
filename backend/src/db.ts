import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();

const DB_PATH = process.env.DB_PATH ?? './juegos.db';

export const db = new sqlite.Database(DB_PATH, (error) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log('Conectado a SQLite');
});

db.run(`
  CREATE TABLE IF NOT EXISTS juegos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    precio REAL,
    genero TEXT,
    imagen TEXT
  )
`, () => {
  db.get<{ count: number }>('SELECT COUNT(*) as count FROM juegos', [], (_err, row) => {
    if (row && row.count === 0) {
      db.run(`
        INSERT INTO juegos(nombre, precio, genero, imagen) VALUES
          ('God of War', 59.99, 'Acción', 'https://juegosdigitalescolombia.com/files/images/productos/1764614630-god-of-war-ragnarok-deluxe-edition-ps5-0.webp'),
          ('Elden Ring', 49.99, 'RPG', 'https://juegosdigitalescolombia.com/files/images/productos/1632344629-elden-ring-ps4-pre-orden.jpg'),
          ('Cyberpunk 2077', 29.99, 'Acción', 'https://juegosdigitalescolombia.com/files/images/productos/1730415577-cyberpunk-2077-ps5-0.webp'),
          ('Halo Infinite', 39.99, 'Acción', 'https://www.gamereactor.es/media/85/stunningboxarthalo_2868563.png'),
          ('Minecraft', 19.99, 'Sandbox', 'https://juegosdigitalescolombia.com/files/images/productos/1721848651-minecraft-xbox-series-xs-0.webp'),
          ('Zelda BOTW', 59.99, 'Aventura', 'https://uvejuegos.com/img/caratulas/56704/tloz-breath-of-the-wild-eur.jpg')
      `, (err) => {
        if (err) console.log('Error insertando datos iniciales:', err.message);
        else console.log('Datos iniciales insertados');
      });
    }
  });
});
