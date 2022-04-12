import "./App.css";
import Searchbar from "./SearchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileTop from "./ProfileTop";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Searchbar />} />
          <Route path="/profile/:userId" element={<ProfileTop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
