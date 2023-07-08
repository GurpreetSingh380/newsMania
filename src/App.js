import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  const [category, setCategory] = useState("home");
  return (
    <div className="App">
      <Navbar title="NewsMania" setCategory={setCategory}/>
      <News title="NewsMania" category={category} setCategory={setCategory}/>
      <Footer/>
    </div>
  );
}

export default App;
