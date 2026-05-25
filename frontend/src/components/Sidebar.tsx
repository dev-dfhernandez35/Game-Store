export default function Sidebar() {
  return (
    <div id="sidebar">
      <h3>Top 10 Más Vendidos</h3>
      <ol>
        <li>Elden Ring</li>
        <li>Hogwarts Legacy</li>
        <li>The Legend of Zelda: Tears of the Kingdom</li>
        <li>Baldur's Gate 3</li>
        <li>Call of Duty: MW III</li>
        <li>Cyberpunk 2077: Phantom Liberty</li>
        <li>Super Mario Bros. Wonder</li>
        <li>Resident Evil 4 Remake</li>
        <li>EA Sports FC 24</li>
        <li>Starfield</li>
      </ol>

      <h3 id="novedades" style={{ marginTop: '30px' }}>Novedades Recientes</h3>
      <ul>
        <li>
          Tekken 8
          <ul>
            <li>PS5</li>
            <li>Xbox Series X/S</li>
            <li>PC</li>
          </ul>
        </li>
        <li>
          Final Fantasy VII Rebirth
          <ul>
            <li>PS5 (Exclusivo temporal)</li>
          </ul>
        </li>
        <li>
          Dragon's Dogma 2
          <ul>
            <li>PS5</li>
            <li>Xbox</li>
            <li>PC</li>
          </ul>
        </li>
      </ul>

      <h3 style={{ marginTop: '30px' }}>Glosario Gamer</h3>
      <dl>
        <dt><strong>DLC</strong></dt>
        <dd>Contenido Descargable. Expansiones o añadidos para un juego base.</dd>
        <dt><strong>Early Access</strong></dt>
        <dd>Acceso anticipado. Permite jugar un título mientras aún está en desarrollo.</dd>
        <dt><strong>Cross-play</strong></dt>
        <dd>Juego cruzado. Permite a jugadores de diferentes consolas jugar juntos online.</dd>
        <dt><strong>FPS</strong></dt>
        <dd>First Person Shooter (juego de disparos) o Frames Per Second (rendimiento gráfico).</dd>
        <dt><strong>NPC</strong></dt>
        <dd>Non-Playable Character. Personaje controlado por la inteligencia artificial del juego.</dd>
        <dt><strong>Loot Box</strong></dt>
        <dd>Cajas de botín que otorgan objetos aleatorios virtuales dentro de un juego.</dd>
      </dl>
    </div>
  );
}
