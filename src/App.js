import "./Styles/App.scss";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./Components/Common/AuthContext";
import LoginController from "./Components/UserManagement/Login/controller/LoginController";
import RegisterController from "./Components/UserManagement/Register/controller/RegisterController";
import ActivateAccountController from "./Components/UserManagement/ActivateAccount/controller/ActivateAccountController";
import ForgotPasswordController from "./Components/UserManagement/ForgotPassword/controller/ForgotPasswordController";
import Sidebar from "./Components/Common/Sidebar";
import Header from "./Components/Common/Header";
import UsersController from "./Components/Admin/UsersDashboard/controller/UsersController";
import CompaniesController from "./Components/Admin/CompaniesDashboard/controller/CompaniesController";
import OJTRecordsController from "./Components/Admin/OJTRecordsDashboard/controller/OJTRecordsController";
import TrainingPlansController from "./Components/Admin/TrainingPlansDashboard/controller/TrainingPlansController";
import InternDashboardController from "./Components/Intern/InternDashboard/controller/InternDashboardController";
import TrainingPlanController from "./Components/Intern/TrainingPlan/controller/TrainingPlanController";
import SubmissionsController from "./Components/Intern/LogbookSubmissions/controller/SubmissionsController";
import SubmitLogbookController from "./Components/Intern/SubmitLogbook/controller/SubmitLogbookController";
import SupervisorDashboardController from "./Components/Supervisor/Dashboard/controller/SupervisorDashboardController";
import InternListController from "./Components/Supervisor/InternList/controller/InternListController";
import SupervisorEvaluationsController from "./Components/Supervisor/Evaluations/controller/SupervisorEvaluationsController";
import { GlobalStateProvider } from "./Components/Globals/variables";

const Layout = () => {
  const location = useLocation();
  const hideSidebarPaths = ["/", "/register", "/forgot-password", "/activate-account"];
  const { authUser, isLoggedIn } = useAuth();

  return (
    <div className="App">
      <Header />
      {!hideSidebarPaths.includes(location.pathname) && <Sidebar />}
      <main>
        <Routes>
          <Route path="/" element={<LoginController />} />
          <Route path="/register" element={<RegisterController />} />
          <Route path="/activate-account" element={<ActivateAccountController />} />
          <Route path="/forgot-password" element={<ForgotPasswordController />} />
          
          {authUser && isLoggedIn && (
            <>
              <Route path="/admin-users" element={<UsersController />} />
              <Route path="/admin-companies" element={<CompaniesController />} />
              <Route path="/admin-ojt-records" element={<OJTRecordsController />} />
              <Route path="/admin-training-plans" element={<TrainingPlansController />} />
              <Route path="/intern-dashboard" element={<InternDashboardController />} />
              <Route path="/intern-tp" element={<TrainingPlanController />} />
              <Route path="/intern-entries" element={<SubmissionsController />} />
              <Route path="/intern-submit" element={<SubmitLogbookController />} />
              <Route path="/supervisor-dashboard" element={<SupervisorDashboardController />} />
              <Route path="/supervisor-intern-list" element={<InternListController />} />
              <Route path="/supervisor-evaluations" element={<SupervisorEvaluationsController />} />
            </>
          )}
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <GlobalStateProvider>
          <Layout />
        </GlobalStateProvider>
      </Router>
    </AuthProvider>
  );
};

export default App;
