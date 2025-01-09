import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PostListProvider from "./store/postListStore";
import Header from "./Components/Header";
import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import PostList from "./Components/PostList";
import { useState } from "react";
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
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
