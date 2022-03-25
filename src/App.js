import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BranchDetails from "./routes/BranchDetails";
import Login from "./routes/Login";
import "./routes/Analytics";
import "./routes/CollegeDetails";
import Analytics from "./routes/Analytics";
import CollegeDetails from "./routes/CollegeDetails";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="about" element={<Analytics />} />
        <Route path="/detail/branch" element={<BranchDetails />} />
        <Route path="/detail" element={<CollegeDetails/>} />

      </Routes>
    </div>
  );
}

