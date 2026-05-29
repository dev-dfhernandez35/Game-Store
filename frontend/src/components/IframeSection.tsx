export default function IframeSection() {
  const iframes = [
    { src: 'https://es.wikipedia.org/wiki/PlayStation_5',              title: 'Info PlayStation', name: 'frame-ps5'   },
    { src: 'https://es.wikipedia.org/wiki/Xbox_Series_X_y_Series_S',  title: 'Info Xbox',        name: 'frame-xbox'  },
    { src: 'https://es.wikipedia.org/wiki/Nintendo_Switch',            title: 'Info Nintendo',    name: 'frame-switch'},
  ];

  return (
    <>
      <h2>Ecosistema Gamer (3 Paneles - iframes)</h2>
      <div className="iframe-container">
        {iframes.map((f) => (
          <iframe
            key={f.name}
            src={f.src}
            title={f.title}
            name={f.name}
            className="iframe-panel"
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin"
            scrolling="yes"
            allowFullScreen
          >
            <p>Tu navegador no admite iframes. Visita <a href={f.src}>{f.title}</a>.</p>
          </iframe>
        ))}
      </div>
    </>
  );
}
