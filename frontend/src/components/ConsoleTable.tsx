export default function ConsoleTable() {
  return (
    <>
      <h2>Comparativa de Consolas de Nueva Generación</h2>
      <table>
        <tbody>
          <tr>
            <th colSpan={5} style={{ textAlign: 'center', backgroundColor: '#4db8ff', color: '#000' }}>
              Tabla Comparativa Oficial
            </th>
          </tr>
          <tr>
            <th>Fabricante / Consola</th>
            <th>Precio de Lanzamiento</th>
            <th colSpan={3}>Características Técnicas y Servicios</th>
          </tr>
          <tr>
            <th style={{ backgroundColor: '#222' }}>Marca</th>
            <th>Precio</th>
            <th>Almacenamiento</th>
            <th>Servicio Online</th>
            <th>Exclusivos Destacados</th>
          </tr>
          <tr>
            <td rowSpan={2} style={{ fontWeight: 'bold', backgroundColor: '#113355', textAlign: 'center' }}>
              Sony<br />PlayStation
            </td>
            <td>$499 (PS5)</td>
            <td>825 GB SSD</td>
            <td>PS Plus</td>
            <td>God of War, Spider-Man</td>
          </tr>
          <tr>
            <td>$399 (PS5 Digital)</td>
            <td>825 GB SSD</td>
            <td>PS Plus</td>
            <td>Horizon Forbidden West</td>
          </tr>
          <tr>
            <td rowSpan={2} style={{ fontWeight: 'bold', backgroundColor: '#115511', textAlign: 'center' }}>
              Microsoft<br />Xbox
            </td>
            <td>$499 (Series X)</td>
            <td>1 TB SSD</td>
            <td>Xbox Game Pass</td>
            <td>Halo Infinite, Forza Horizon</td>
          </tr>
          <tr>
            <td>$299 (Series S)</td>
            <td>512 GB SSD</td>
            <td>Xbox Game Pass</td>
            <td>Starfield, Fable</td>
          </tr>
        </tbody>
      </table>

      <h3>Inventario de Hardware (Tabla Anidada)</h3>
      <table>
        <tbody>
          <tr>
            <th>Región</th>
            <th>Estado del Inventario</th>
          </tr>
          <tr>
            <td>Norteamérica</td>
            <td>
              <table style={{ margin: 0, backgroundColor: '#1e1e1e' }}>
                <tbody>
                  <tr>
                    <th>Modelo</th>
                    <th>Unidades</th>
                  </tr>
                  <tr>
                    <td>PS5 Estándar</td>
                    <td>1,200</td>
                  </tr>
                  <tr>
                    <td>Xbox Series X</td>
                    <td>850</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
