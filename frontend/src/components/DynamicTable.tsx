import { useState } from 'react';

interface TableConfig {
  rows: number;
  cols: number;
}

export default function DynamicTable() {
  const [filas, setFilas] = useState(3);
  const [columnas, setColumnas] = useState(4);
  const [tabla, setTabla] = useState<TableConfig | null>(null);

  const generarTablaDinamica = () => {
    if (filas <= 0 || columnas <= 0) return;
    setTabla({ rows: filas, cols: columnas });
  };

  const inputStyle = {
    padding: '5px',
    marginRight: '15px',
    background: '#333',
    color: '#e0e0e0',
    border: '1px solid #555',
    borderRadius: '4px',
    width: '60px',
  };

  return (
    <>
      <h2>Generador Dinámico de Catálogo (JavaScript)</h2>
      <div style={{ background: '#222', padding: '20px', borderRadius: '8px' }}>
        <label htmlFor="filas">Filas (Juegos): </label>
        <input
          id="filas"
          type="number"
          value={filas}
          min={1}
          max={10}
          onChange={e => setFilas(parseInt(e.target.value) || 1)}
          style={inputStyle}
        />
        <label htmlFor="columnas">Columnas (Datos): </label>
        <input
          id="columnas"
          type="number"
          value={columnas}
          min={1}
          max={6}
          onChange={e => setColumnas(parseInt(e.target.value) || 1)}
          style={inputStyle}
        />
        <button
          onClick={generarTablaDinamica}
          style={{ background: '#4db8ff', border: 'none', padding: '8px 15px', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}
        >
          Generar tabla
        </button>

        {tabla && (
          <div style={{ marginTop: '20px' }}>
            <table>
              <tbody>
                <tr>
                  {Array.from({ length: tabla.cols }, (_, c) => (
                    <th key={c} contentEditable suppressContentEditableWarning>
                      Columna {c + 1}
                    </th>
                  ))}
                </tr>
                {Array.from({ length: tabla.rows }, (_, r) => (
                  <tr key={r}>
                    {Array.from({ length: tabla.cols }, (_, c) => (
                      <td key={c} contentEditable suppressContentEditableWarning>
                        Dato {r + 1}-{c + 1}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p><em>Nota: Puedes hacer clic en las celdas para editar su contenido.</em></p>
          </div>
        )}
      </div>
    </>
  );
}
