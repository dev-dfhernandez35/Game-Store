export default function Nav() {
  return (
    <div id="nav">
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li>
            <a href="#catalogo">Catálogo</a>
            <ul>
              <li><a href="#accion">Acción</a></li>
              <li><a href="#rpg">RPG</a></li>
              <li><a href="#deportes">Deportes</a></li>
              <li><a href="#estrategia">Estrategia</a></li>
            </ul>
          </li>
          <li><a href="#novedades">Novedades</a></li>
          <li><a href="#ofertas">Ofertas</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}
