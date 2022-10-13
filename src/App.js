import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// pages
import Dashboard from '../src/pages/dashboard';
import Alerts from '../src/pages/alerts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
