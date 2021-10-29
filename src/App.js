import { BrowserRouter as Router, Route} from 'react-router-dom'
import NavbarNav from './componentes/NavbarNav'
import Sidebar from './componentes/Sidebar'
import Charts from './componentes/Charts';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="flex">
        <NavbarNav />
        <div className="content w-100">
        </div>
      </div>
        <Sidebar />
    </Router>
  );
}

export default App;
