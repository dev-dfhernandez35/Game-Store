const GAMEPAD_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Gamepad.svg/120px-Gamepad.svg.png';

const LOREM = `Los videojuegos han evolucionado desde simples píxeles hasta mundos 
completamente inmersivos con gráficos fotorrealistas, narrativas complejas y 
experiencias multijugador globales. Cada género ofrece una forma única de 
interacción y entretenimiento para millones de jugadores alrededor del mundo.`;

export default function AlignDemo() {
  return (
    <>
      <h2>Demostración de Atributos ALIGN en Imágenes</h2>
      <div style={{ background: '#222', padding: '15px', borderRadius: '8px' }}>

        {/* top */}
        <p>
          <img src={GAMEPAD_URL} style={{ verticalAlign: 'top' }} alt="Icono de mando top" />
          {' '}
          <strong>align="top"</strong>: el texto se alinea con el borde superior de la imagen.
          {' '}{LOREM}
        </p>

        {/* middle */}
        <p>
          <img src={GAMEPAD_URL} style={{ verticalAlign: 'middle' }} alt="Icono de mando middle" />
          {' '}
          <strong>align="middle"</strong>: la línea base del texto se alinea con el centro vertical.
          {' '}{LOREM}
        </p>

        {/* bottom */}
        <p>
          <img src={GAMEPAD_URL} style={{ verticalAlign: 'bottom' }} alt="Icono de mando bottom" />
          {' '}
          <strong>align="bottom"</strong>: el texto se alinea con el borde inferior de la imagen.
          {' '}{LOREM}
        </p>

        {/* float left */}
        <div style={{ minHeight: '140px', marginTop: '10px' }}>
          <img
            src={GAMEPAD_URL}
            style={{ float: 'left', marginRight: '15px', marginBottom: '8px' }}
            alt="Icono de mando left"
          />
          <strong>align="left"</strong>: la imagen flota a la izquierda y el texto fluye alrededor
          por la derecha. {LOREM} {LOREM}
          <div style={{ clear: 'both' }} />
        </div>

        {/* float right */}
        <div style={{ minHeight: '140px', marginTop: '10px' }}>
          <img
            src={GAMEPAD_URL}
            style={{ float: 'right', marginLeft: '15px', marginBottom: '8px' }}
            alt="Icono de mando right"
          />
          <strong>align="right"</strong>: la imagen se posiciona en el margen derecho y el texto
          fluye por la izquierda. {LOREM} {LOREM}
          <div style={{ clear: 'both' }} />
        </div>

      </div>
    </>
  );
}
