import React from "react";
import "./index.css";
import Navbar from "./Components/NavBar.jsx";
import "./App.css";
import Userprofile from "./Components/UserProfile.jsx"
import Post from "./Components/Post.jsx";
import Contacts from "./Components/Contacts.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <div className="main-body">
        <Userprofile/>
        <Contacts/>
        <Post/>
      </div>
    </>
  )
}

export default App;
