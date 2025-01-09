import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PostListProvider from "../store/postListStore";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
         
          <Outlet/>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
