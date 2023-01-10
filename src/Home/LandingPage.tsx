import { Route, Routes } from "react-router-dom";
import App from "../App";
import GiftPage from "../HolidayGiftTracker/GiftPage";
import FormsPage from "./FormsPage";
import UserInfo from "./UserInfo";

const LandingPage = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<App/>}></Route>
        <Route path={'/sform'} element={<FormsPage/>}></Route>
        <Route path={'/gifts'} element={<GiftPage/>}></Route>
        <Route path={'/profile'} element={<UserInfo/>}></Route>
      </Routes>
    </div>
  )
};

export default LandingPage;