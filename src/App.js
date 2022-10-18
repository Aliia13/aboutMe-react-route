import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Tools from "./components/Tools/Tools";
import MyChoices from "./components/MyChoices/MyChoices";
import Websites from "./components/Websites/Websites-to-follow";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/tools">Tools</Link>
            </li>
            <li>
              <Link to="/choices">My Choices</Link>
            </li>
            <li>
              <Link to="/websites">Websites to follow</Link>
            </li>
            <li>
              <a href="https://learn.seytech.co/" target="blank">
                Seytech
              </a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/tools" element={<Tools />}></Route>
          <Route path="/choices" element={<MyChoices />}></Route>
          <Route path="/websites" element={<Websites />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
