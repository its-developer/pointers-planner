import DashboardHeader from "../Components/Dashboard/DashboardHeader";
import Footer from "../Components/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="main-layout">
        <div className="fixed-top">
          <DashboardHeader />{" "}
        </div>
        <div className="main_layout">
          {children}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
