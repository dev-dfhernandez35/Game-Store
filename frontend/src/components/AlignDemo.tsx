const GAMEPAD_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Gamepad.svg/50px-Gamepad.svg.png';

export default function AlignDemo() {
  return (
    <>
      <h2>Demostración de Atributos ALIGN en Imágenes</h2>
      <div style={{ background: '#222', padding: '15px', borderRadius: '8px' }}>
        <p>
          <img src={GAMEPAD_URL} style={{ verticalAlign: 'top' }} alt="Icono de mando top" />
          {' '}Este texto está alineado usando <strong>align="top"</strong> con respecto a la imagen del mando.
          El texto se posiciona en la parte superior del gráfico.
        </p>
        <p>
          <img src={GAMEPAD_URL} style={{ verticalAlign: 'middle' }} alt="Icono de mando middle" />
          {' '}Este texto está alineado usando <strong>align="middle"</strong>. La línea base del texto se
          alinea con el centro vertical de la imagen.
        </p>
        <div style={{ minHeight: '80px' }}>
          <img src={GAMEPAD_URL} style={{ float: 'left', marginRight: '15px' }} alt="Icono de mando left" />
          Este bloque utiliza <strong>align="left"</strong>. La imagen flota a la izquierda y el texto
          descriptivo fluye suavemente alrededor de ella por la derecha, optimizando el espacio visual
          en párrafos largos.
          <div style={{ clear: 'both' }}></div>
        </div>
        <div style={{ minHeight: '80px', marginTop: '10px' }}>
          <img src={GAMEPAD_URL} style={{ float: 'right', marginLeft: '15px' }} alt="Icono de mando right" />
          Este bloque utiliza <strong>align="right"</strong>. La imagen se posiciona en el margen derecho
          y el texto envuelve la imagen por la parte izquierda. Ideal para alternar el ritmo visual de lectura.
          <div style={{ clear: 'both' }}></div>
        </div>
      </div>
    </>
  );
}
