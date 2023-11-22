
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './COMMON/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route exact path='/' element={< Login />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
