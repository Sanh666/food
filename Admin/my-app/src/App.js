import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Sidebar from './Component/sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
      </div>

    </div>
  );
}

export default App;
