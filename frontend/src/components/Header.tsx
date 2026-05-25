export default function Header() {
  return (
    <div
      id="hero"
      style={{
        width: '100%',
        minHeight: '480px',
        backgroundImage: 'url(/game-store-bg.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.1) 100%)',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'left',
          padding: '0 60px',
          maxWidth: '600px',
        }}
      >
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: '10px',
            textTransform: 'uppercase',
            margin: '0 0 6px 0',
            textShadow: 'none',
            lineHeight: 1,
          }}
        >
          Bienvenidos
        </h1>
        <div
          style={{
            width: '70px',
            height: '3px',
            background: 'linear-gradient(to right, #4db8ff, transparent)',
            margin: '14px 0 22px 0',
            borderRadius: '2px',
          }}
        />
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: 'clamp(0.88rem, 1.8vw, 1.05rem)',
            fontWeight: 300,
            color: '#c8dcf5',
            lineHeight: 2,
            letterSpacing: '0.4px',
            textShadow: '0 1px 8px rgba(0,0,0,1)',
            margin: 0,
          }}
        >
          Tu destino definitivo para encontrar los mejores videojuegos.
          <br />
          Disfruta de un catálogo inmenso, ofertas inigualables y la comunidad
          gamer más grande. Explora nuestras novedades y adéntrate en el mundo
          del entretenimiento interactivo.
        </p>
      </div>
    </div>
  );
}
