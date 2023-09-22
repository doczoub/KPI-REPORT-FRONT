import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import NavBar from "./components/NavBar";
import EmployeeList from "./components/EmployeeList";
import UpdateEmployee from "./components/UpdateEmployee";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import DashInnovation from "./components/DTD/DashInnovation";
import CalculForm from "./components/CalculForm";
import CalculInnovation from "./components/CalculInnovation";
import UpdateCalcul from "./components/UpdateCalcul";
import { AuthProvider } from "./components/Auth";
import RequireAuth from "./components/RequireAuth";
import ResumeIndicateurs from "./components/ResumeIndicateurs";
import SuiviCalcul from "./components/SuiviCalcul";
import AllStats from "./components/admin/AllStats";
import Acceuil from "./components/Acceuil";
import DashboardAcceuil from "./components/DashboardAcceuil";
import Layout from "./view/Layout";
import RecapIndicateur from "./components/RecapIndicateur";
import FormCalcul from "./components/FormCalcul";
import CreationIndicateur from "./components/CreationIndicateur";
import CreationUser from "./components/CreationUser";
import Accuei from "./components/Accuei";
import Accueil from "./components/Accuei";




function App() {
  return (
   
      <BrowserRouter>
    <Routes>
      {/* <Route index element = {<Dashboard />} /> */}

      <Route index element = {<Acceuil/>} />
      <Route path="/" element ={<Layout />}> 
      <Route path="/calculInnovation" element ={<CalculInnovation />} ></Route>
      <Route path="/recapindicateur" element ={<RecapIndicateur />} ></Route>
      <Route path="/calculForm/:id" element ={<CalculForm />} ></Route>
      <Route path="/formCalcul" element ={<FormCalcul />} ></Route>
      <Route path="/creerIndicateurs" element ={<CreationIndicateur />} ></Route>
      <Route path="/creerUser" element ={<CreationUser />} ></Route>
      <Route path="/dashInnovation/:id/updateCalcul/:id" element ={<UpdateCalcul />} ></Route>
      <Route path="dashInnovation/:id/:id" element ={<SuiviCalcul />} ></Route>
      </Route>
      <Route path="/employeeList" element ={<EmployeeList />} ></Route>
      <Route path="/addEmployee" element ={<AddEmployee />} ></Route>
      <Route path="/updateEmployee/:id" element ={<UpdateEmployee />} ></Route>
      <Route path="/dashboard" element ={<Dashboard />} ></Route>
      <Route path="/dashboardAdmin" element ={<AdminDashboard />} ></Route>
      <Route path="/dashboardAcceuil" element ={<DashboardAcceuil />} ></Route>
      <Route path="/login" element ={<Login />} ></Route>
      <Route path="/register" element ={<Register />} ></Route>
      <Route path="/dashInnovation" element ={ <DashInnovation />}></Route>
      <Route path="/dashInnovation/:id" element ={ <DashInnovation />}></Route>
      <Route path="/resumeIndicateurs" element ={<ResumeIndicateurs />} ></Route>
      <Route path="/allStats" element ={<AllStats />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
