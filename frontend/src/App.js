// import Dashboard from "./components/Dashboard";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Leaderboards from "./pages/Leaderboards";
import Search from "./pages/Search";
import Teams from "./pages/Teams";
import CenterContainer from "./components/Container/Container";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <CenterContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </CenterContainer>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //     <Dashboard />
    //   </header>
    // </div>
  );
}

export default App;
