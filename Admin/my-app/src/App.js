import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Sidebar from './Component/sidebar/Sidebar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Order from './pages/remove/Order';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url = `http://localhost:4000`;


  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/list' element={<List url={url} />} />
          <Route path='/orders' element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
