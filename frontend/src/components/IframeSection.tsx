export default function IframeSection() {
  return (
    <>
      <h2>Ecosistema Gamer (3 Paneles - iframes)</h2>
      <div className="iframe-container">
        <iframe
          src="https://es.wikipedia.org/wiki/PlayStation_5"
          className="iframe-panel"
          title="Info PlayStation"
        />
        <iframe
          src="https://es.wikipedia.org/wiki/Xbox_Series_X_y_Series_S"
          className="iframe-panel"
          title="Info Xbox"
        />
        <iframe
          src="https://es.wikipedia.org/wiki/Nintendo_Switch"
          className="iframe-panel"
          title="Info Nintendo"
        />
      </div>
    </>
  );
}
