export default function ImageMap() {
  return (
    <>
      <h2>Mapa de Zonas (Image Map)</h2>
      <p>
        Haz clic en los diferentes botones del mando para navegar a géneros
        (Izquierda = Acción, Derecha = RPG, Centro = Deportes, D-pad = Aventura):
      </p>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNES_Controller.svg/400px-SNES_Controller.svg.png"
        useMap="#mapa-generos"
        alt="Mapa interactivo de géneros de videojuegos"
        width={400}
        height={200}
      />

      <map name="mapa-generos">
        {/* rect: botones izquierdos → Acción */}
        <area
          shape="rect"
          coords="40,90,110,160"
          href="#accion"
          alt="Sección de Acción"
          title="Ir a: Acción"
        />
        {/* circle: botones derechos → RPG */}
        <area
          shape="circle"
          coords="310,130,40"
          href="#rpg"
          alt="Sección de RPG"
          title="Ir a: RPG"
        />
        {/* rect: botón central → Deportes */}
        <area
          shape="rect"
          coords="150,110,220,150"
          href="#deportes"
          alt="Sección de Deportes"
          title="Ir a: Deportes"
        />
        {/* poly: D-pad → Aventura */}
        <area
          shape="poly"
          coords="65,95,85,75,105,95,85,115"
          href="#aventura"
          alt="Sección de Aventura"
          title="Ir a: Aventura"
        />
      </map>

      {/* Secciones destino */}
      <div id="accion"   style={{ marginTop: '20px', padding: '10px', background: '#1a1a2e', borderRadius: '6px' }}><h3>🎮 Acción</h3><p>Juegos de acción y combate.</p></div>
      <div id="rpg"      style={{ marginTop: '10px', padding: '10px', background: '#1a1a2e', borderRadius: '6px' }}><h3>⚔️ RPG</h3><p>Rol, historia y personajes profundos.</p></div>
      <div id="deportes" style={{ marginTop: '10px', padding: '10px', background: '#1a1a2e', borderRadius: '6px' }}><h3>⚽ Deportes</h3><p>Fútbol, baloncesto y más.</p></div>
      <div id="aventura" style={{ marginTop: '10px', padding: '10px', background: '#1a1a2e', borderRadius: '6px' }}><h3>🗺️ Aventura</h3><p>Exploración y puzzles.</p></div>
    </>
  );
}
