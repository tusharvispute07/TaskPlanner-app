import './App.css';
import Layout from './components/Layout';
import Todo from './components/Todo';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import { useState} from 'react';
import isAuthenticated from './components/auth';

function App() {

  const [userAuthenticated, setUserAuthenticated] = useState(isAuthenticated())

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout userAuthenticated={userAuthenticated} setUserAuthenticated={setUserAuthenticated}/>}>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<AuthenticatedRoute>{<Todo />}</AuthenticatedRoute>} />
        <Route path='/login' element={<LoginPage userAuthenticated={userAuthenticated} setUserAuthenticated={setUserAuthenticated}/>} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
