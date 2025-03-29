import Profile from "../common/Profile";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div>
        <Sidebar>
          <Profile />
        </Sidebar>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
