import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BranchDetails from "./routes/BranchDetails";
import Login from "./routes/Login";
import CollegeDetails from "./routes/CollegeDetails";
export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(
    localStorage.getItem("isSignedIn") === "true"
  );
  return (
    <div className="App">
      <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <Routes>
        <Route
          path="/"
          element={
            <Login isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
          }
        />
        <Route path="/detail/branch/:bName" element={<BranchDetails />} />
        <Route path="/detail" element={<CollegeDetails />} />
      </Routes>
    </div>
  );
}
