import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./content/css/App.css";
import Home from "./pages/Home";
import NoPage from "./pages/Nopage";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import SelectedServices from "./pages/ServicesComponent/SelectedServices";
import MyProfile from "./pages/MyProfile";
import MyProfileHome from "./pages/ProfilePages/MyProfileHome";
import MyProfileOrder from "./pages/ProfilePages/MyProfileOrder";
import MyProfileUser from "./pages/ProfilePages/MyProfileUser";
import MyProfileEmails from "./pages/ProfilePages/MyProfileEmails";
import SendEmail from "./pages/ProfilePages/SendEmail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            exact={true}
            path="/"
            element={
              <>
                <Home /> <title>Pointer Planner- Home</title>
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Gallery /> <title>Pointer Planner- Gallery</title>
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Services /> <title>Pointer Planner- Services</title>
              </>
            }
          />
          <Route
            path="/selected_services"
            element={
              <>
                <SelectedServices />{" "}
                <title>Pointer Planner- Selected Services</title>
              </>
            }
          />
          <Route
            path="/my_profile"
            element={
              <>
                <MyProfile page={<MyProfileHome />} />{" "}
                <title>Pointer Planner- My Profile(Home)</title>
              </>
            }
          />
          <Route
            path="/my_profile/order"
            element={
              <>
                <MyProfile page={<MyProfileOrder />} />{" "}
                <title>Pointer Planner- My Profile(Order)</title>
              </>
            }
          />
          <Route
            path="/my_profile/user"
            element={
              <>
                <MyProfile page={<MyProfileUser />} />{" "}
                <title>Pointer Planner- My Profile(User)</title>
              </>
            }
          />
          <Route
            path="/my_profile/send_email"
            element={
              <>
                <MyProfile page={<SendEmail />} />{" "}
                <title>Pointer Planner- My Profile(User)</title>
              </>
            }
          />
          <Route
            path="/my_profile/emails"
            element={
              <>
                <MyProfile page={<MyProfileEmails />} />{" "}
                <title>Pointer Planner- My Profile(Emails)</title>
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <NoPage /> <title>Error 404</title>
              </>
            }
          />
        </Route>
        <Route
          exact
          path="/login"
          element={
            <>
              <Login /> <title>Pointer Planner- Login</title>
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup /> <title>Pointer Planner- Signup</title>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
