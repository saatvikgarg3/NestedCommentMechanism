import { Post } from "./components/Post";
import { PostList } from "./components/PostList";
import { PostProvider } from "./context/PostContext";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="container">
    <Routes>
      <Route path="/" element={<PostList/>}/>
      <Route path="/posts/:id" element={
      <PostProvider>
        <Post/>
      </PostProvider>}/>
    </Routes>
    </div>
  );
}

export default App;
