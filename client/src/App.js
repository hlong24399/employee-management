import "./App.css";
import Sidebar from "./components/Sidebar";
import Employment from "./components/Employment";
import Services from "./components/Service";
import Contact from "./components/Contact";
import EditPage from "./components/EditPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container px-3">
      {/* sidebar */}

      {/*  Employment */}
      <div className="row mb-5">
        <h1>Employee Management</h1>
      </div>
      <div className="row">
        <Router>
          <div className="sidebar col col-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col col-9">
            <Routes>
              <Route path="/" element={<Employment />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route path="/edit/:userId" element={<EditPage />} />
              <Route path="/service" element={<Services />} />
              <Route path="*" element={<p>Path not resolved</p>} />
            </Routes>
          </div>
        </Router>
      </div>

      {/* <div className="Employment">
        <Employment></Employment>
      </div> */}
    </div>
  );
}

export default App;
