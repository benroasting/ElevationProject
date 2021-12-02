import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Choice from './Views/Choice';
import Campus from './Views/Campus';
import Groups from './Views/Groups';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Choice/>} />
          <Route path="/campus" element={<Campus/>} />
          <Route path="/groups" element={<Groups/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
