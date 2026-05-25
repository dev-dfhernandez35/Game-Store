import TopBar from './components/TopBar';
import Header from './components/Header';
import Nav from './components/Nav';
import Catalogo from './components/Catalogo';
import AlignDemo from './components/AlignDemo';
import ImageMap from './components/ImageMap';
import ConsoleTable from './components/ConsoleTable';
import DynamicTable from './components/DynamicTable';
import IframeSection from './components/IframeSection';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <TopBar />
      <Nav />
      <Header />
      <div className="layout">
        <div id="main-content">
          <Catalogo />
          <hr />
          <AlignDemo />
          <hr />
          <ImageMap />
          <hr />
          <ConsoleTable />
          <hr />
          <DynamicTable />
          <hr />
          <IframeSection />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}
