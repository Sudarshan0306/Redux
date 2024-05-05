import './App.css';
// import { useEffect, useState } from 'react';
import SampleDept from './Components/SampleDept';
import SecondDept from './Components/SecondDept';
import MeatDept from './Components/MeatDept';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Main from './Main';

function App() {

  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //   },[]);
  //   return (
  //     <>
  //       <h1>I have rendered {count} times!</h1>
  //   </>


  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path='/' Component={Main} />
            <Route path='/sample-dept' Component={SampleDept} />
            <Route path='/second-dept' Component={SecondDept} />
            <Route path='/meat-dept' Component={MeatDept} />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
