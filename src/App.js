
import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login"
import Signup from "./Components/SignUp/Signup"
import Footer from "./Components/Footer/Footer";
import PostSection from "./Components/Posts/PostSection";
import SinglePost from "./Components/SinglePost/SinglePost";
import WritePost from "./Components/Write/WritePost";


import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useContext } from "react";
import { Context } from "./Components/context/Context";
import Profile from "./Components/Profile/Profile";
import AboutPage from "./Components/AboutPage/AboutPage";

function App() {
  const { user } = useContext(Context)
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostSection />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/write" element={user ? <WritePost /> : <Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/signup" element={user ? <Home /> : <Signup />} />
        <Route path="/profile" element={user ? <Profile /> : <Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
