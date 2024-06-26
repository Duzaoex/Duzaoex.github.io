import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DarkModeProvider, useDarkMode } from './Componentes/DarkModeContext/DarkModeContext';
import HomePage from './Pages/HomePage/HomePage';
import Projetos from './Pages/Projetos/Projetos';
import SobreMim from './Pages/SobreMim/SobreMim';
import style from './App.module.css';

function App() {
  const { theme, setTheme } = useDarkMode();

  const toggleDarkMode = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <body className={`${style.App} ${style[theme]}`}>
      <button className={style.button} onClick={toggleDarkMode}>
        {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
      </button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/SobreMim" element={<SobreMim />} />
      </Routes>
    </body>
  );
}

function AppWithDarkMode() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}

export default AppWithDarkMode;
