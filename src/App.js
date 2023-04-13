
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurant from './components/Restaurant'
import Restview from './components/Restview';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>

        <Routes>
         <Route path='/' element={<Restaurant></Restaurant>}/>
         <Route path='view-restuarant/:id' element={<Restview></Restview>}></Route>
        </Routes>
  
    <Footer></Footer>
    </div>
  );
}

export default App;
