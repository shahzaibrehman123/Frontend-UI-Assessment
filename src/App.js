import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import './App.css';

function App() {
  return (
    <div style={{backgroundColor:'wheat'}} className="App">
      <Sidebar />
      <Navbar/>
    </div>
  );
}

export default App;
