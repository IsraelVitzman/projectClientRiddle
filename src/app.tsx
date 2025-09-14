
import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Play from './payge/play'
import Login from './payge/login';
import NewUser from './payge/addNewUser';
import ResultAllGame from './payge/resultAllGame';
import UpdateRiddle from './payge/updateRiddle';
import DeleteRiddle from './payge/deleteRiddle';
import CreateRiddle from './payge/createRiddle';
import ResultGameByUser from './payge/resultGameByUser';
import Layout from './layout/layout';
import LoginPage from './payge/home/home';
export function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<Layout />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<NewUser />} />
          <Route path="/play" element={<Play />} />
          <Route path="/resultGameByUser" element={<ResultGameByUser />} />
          <Route path="/resultAllGame" element={<ResultAllGame />} />
          <Route path="/updateRiddle" element={<UpdateRiddle />} />
          <Route path="/deleteRiddle" element={<DeleteRiddle />} />
          <Route path="/createRiddle" element={<CreateRiddle />} />
        </Route>
      </Routes>
    </Router>
  );

}
