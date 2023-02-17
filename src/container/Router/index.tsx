import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../../views/Welcome";
import LoginForm from "../../views/Auth/Login";
import SignupForm from "../../views/Auth/Signup";


const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
