import { Route, Routes } from "react-router-dom";
import App from "../App";
import FormsPage from "./FormsPage";

const LandingPage = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<App/>}></Route>
        <Route path={'/sform'} element={<FormsPage/>}></Route>
      </Routes>
    </div>
  )
};

export default LandingPage;