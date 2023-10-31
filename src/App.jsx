import "./App.css";
import Employees from "./components/Employees";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import GroupedTeamMembers from "./components/GroupedTeamMembers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
