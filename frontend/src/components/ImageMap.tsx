export default function ImageMap() {
  return (
    <>
      <h2>Mapa de Zonas (Image Map)</h2>
      <p>
        Haz clic en los diferentes botones del mando para navegar a géneros
        (Izquierda = Acción, Derecha = RPG, Centro = Deportes):
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNES_Controller.svg/400px-SNES_Controller.svg.png"
        useMap="#mapa-generos"
        alt="Mapa interactivo de géneros de videojuegos"
      />
      <map name="mapa-generos">
        <area shape="rect" coords="40,90,110,160" href="#accion" alt="Sección de Acción" />
        <area shape="circle" coords="310,130,40" href="#rpg" alt="Sección de RPG" />
        <area shape="rect" coords="150,110,220,150" href="#deportes" alt="Sección de Deportes" />
      </map>
    </>
  );
}
