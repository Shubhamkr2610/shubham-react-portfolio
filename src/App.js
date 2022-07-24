import "./App.css";
import { Header, Footer, Loader } from "../src/components/index";
import { BlogPage, HomePage, ProjectPage } from "../src/pages/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Loader/>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/blog" element={<BlogPage/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
