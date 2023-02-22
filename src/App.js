import { Route, Routes } from "react-router-dom";
import List from "./components/List/List";
import Menu from "./components/Menu/Menu";
import Post from "./components/Post/Post";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/task1" element={<Posts />} />
        <Route path="/task1/products/:id" element={<Post />} />
        <Route path="/task2" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
