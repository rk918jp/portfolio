import "./App.css";
import BlogList from "./pages/blog/index";
import Blog from "./pages/blog/blog";
import Top from "./pages/top";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import PostList from "./pages/admin/postlist";
import Post from "./pages/admin/post";
// 動的ルーティング

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Top />} />
        <Route path={`/blog`} element={<BlogList />} />
        <Route path={`/blog/blog`} element={<Blog />} />
        <Route path={`/admin/`} element={<PostList />} />
        {/* ブログ閲覧の動的ルーティング */}
        <Route path="/blog/:id" element={<Blog />}></Route>
        {/* ブログ投稿の動的ルーティング */}
        <Route path="/admin/posts/edit/:id" element={<Post />}></Route>
        {/* 新規追加 */}
        {/* idがある時ない時で分岐させる　ページタイトルも */}
        <Route path="/admin/posts/add" element={<Post />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
