import Sidebar from './Components/Sidebar';
import Inicio from './Pages/Inicio/Inicio';
import SobreMim from './Pages/SobreMim/SobreMim';
import OQueFaco from './Pages/OQueFaco/OQueFaco';
import Portifolio from './Pages/Portifolio/Portifolio';
import Contato from './Pages/Contato/Contato';
import Footer from './Pages/Footer/Footer';
import style from './App.module.css';

function App() {
  return (
    <div className={style.appContainer}>
      <Sidebar className={style.sidebar} />
      <div className={style.content}>
        <section id="inicio">
          <Inicio />
        </section>
        <section id="sobre-mim">
          <SobreMim />
        </section>
        <section id="o-que-faco">
          <OQueFaco />
        </section>
        <section id="portifolio">
          <Portifolio />
        </section>
        <section id="contato">
          <Contato />
        </section>
        <Footer className={style.footer} />
      </div>
    </div>
  );
}

export default App;

