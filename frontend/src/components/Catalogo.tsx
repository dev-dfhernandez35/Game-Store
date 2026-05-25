import { useState, useEffect } from 'react';

interface Juego {
  id: number;
  nombre: string;
  precio: number;
  genero: string;
  imagen: string;
}

export default function Catalogo() {
  const [juegos, setJuegos] = useState<Juego[]>([]);
  const [error, setError] = useState('');
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [genero, setGenero] = useState('');
  const [imagen, setImagen] = useState('');

  const cargarJuegos = () => {
    fetch('http://localhost:3000/juegos')
      .then(res => res.json())
      .then((data: Juego[]) => setJuegos(data))
      .catch(() => setError('No se pudo conectar con el servidor. Asegúrate de que el backend esté corriendo.'));
  };

  useEffect(() => {
    cargarJuegos();
  }, []);

  const agregarJuego = () => {
    if (!nombre || !precio) return;
    fetch('http://localhost:3000/juegos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, precio: parseFloat(precio), genero, imagen }),
    })
      .then(res => res.json())
      .then(() => {
        cargarJuegos();
        setNombre('');
        setPrecio('');
        setGenero('');
        setImagen('');
      });
  };

  return (
    <>
      <h2 id="inicio">Catálogo Destacado (datos desde SQLite)</h2>

      {error && <p style={{ color: '#ff6b6b', background: '#2a1a1a', padding: '10px', borderRadius: '4px' }}>{error}</p>}

      {/* Actividad 1: mostrar nombre Y precio */}
      <div id="catalogo">
        {juegos.map(juego => (
          <div key={juego.id} className="product-card">
            {juego.imagen && (
              <img src={juego.imagen} alt={`Portada de ${juego.nombre}`} width="120" className="zoom-img" />
            )}
            <h3>{juego.nombre}</h3>
            <p>${juego.precio.toFixed(2)}</p>
            <p style={{ fontSize: '0.85em', color: '#aaa', margin: '4px 0' }}>{juego.genero}</p>
            <button>Comprar</button>
          </div>
        ))}
      </div>

      {/* Actividad 3: agregar nuevo juego desde el frontend */}
      <div style={{ background: '#222', padding: '20px', borderRadius: '8px', marginTop: '30px' }}>
        <h3 style={{ marginTop: 0 }}>Agregar Nuevo Juego</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-end' }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            Nombre
            <input
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              placeholder="Nombre del juego"
              style={{ padding: '8px', background: '#333', color: '#e0e0e0', border: '1px solid #555', borderRadius: '4px' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            Precio
            <input
              type="number"
              value={precio}
              onChange={e => setPrecio(e.target.value)}
              placeholder="Precio"
              style={{ padding: '8px', background: '#333', color: '#e0e0e0', border: '1px solid #555', borderRadius: '4px', width: '100px' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            Género
            <input
              value={genero}
              onChange={e => setGenero(e.target.value)}
              placeholder="Género"
              style={{ padding: '8px', background: '#333', color: '#e0e0e0', border: '1px solid #555', borderRadius: '4px' }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            URL Imagen (opcional)
            <input
              value={imagen}
              onChange={e => setImagen(e.target.value)}
              placeholder="https://..."
              style={{ padding: '8px', background: '#333', color: '#e0e0e0', border: '1px solid #555', borderRadius: '4px', width: '200px' }}
            />
          </label>
          <button
            onClick={agregarJuego}
            style={{ background: '#4db8ff', color: '#000', border: 'none', padding: '10px 18px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}
          >
            Agregar Juego
          </button>
        </div>
      </div>
    </>
  );
}
