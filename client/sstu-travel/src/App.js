import './styles/reset.css';
import './styles/App.css';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import NavBlock from './components/UI/Nav/NavBlock';

function App() {
  return (
    <div className="reset App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
