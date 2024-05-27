import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import LoginPage from "./Components/Authentication/LoginPage/LoginPage";
import RegisterPage from "./Components/Authentication/RegisterPage/RegisterPage";
import HomePageAdmin from "./Components/HomePageAdmin/HomePageAdmin";
import UserList from "./Components/UserList/UserList";
import Protected from "./Components/Authentication/ProtectedRoutes/Protected";
import FormComponent from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div className="app-dash-main-div">
            <div className="dashboard-divv">
              <Dashboard />
            </div>
            <div className="view-divv">
              <Routes>
                <Route element={<Protected />}>
                  <Route path="/homepageadmin" Component={HomePageAdmin} />
                  <Route path="/userlist" Component={UserList} />
                  <Route path="/form" Component={FormComponent} />
                </Route>
                <Route path="/" Component={LoginPage} />
                <Route path="/register" Component={RegisterPage} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
