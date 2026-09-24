import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar';
import Header from './components/Header/Header';
import Metas from "./pages/Metas.jsx";
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <Metas/>
      <BottomNavigationBar />
    </div>
  );
}

export default App;