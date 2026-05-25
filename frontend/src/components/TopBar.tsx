export default function TopBar() {
  return (
    <div
      id="topbar"
      style={{
        width: '100%',
        background: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '6px 0',
        borderBottom: '1px solid #1a1a1a',
      }}
    >
      <img
        src="/game-store-topbar.gif"
        alt="GameVault Store"
        style={{ height: '70px', display: 'block' }}
      />
    </div>
  );
}
