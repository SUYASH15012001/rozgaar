import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BranchDetails from "./routes/BranchDetails";
import Login from "./routes/Login";
import CollegeDetails from "./routes/CollegeDetails";
import AddStudent from "./routes/AddStudent";
import { state as globState, StudentInfo as info } from "./global";
import CollegeLists from "./routes/CollegeLists";

export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(
    localStorage.getItem("isSignedIn") === "true"
  );
  const [StudentInfo, setStudentInfo] = React.useState(info);
  const [state, setState] = React.useState(globState);
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
        <Route
          path="/detail/branch/:bName"
          element={<BranchDetails rows={StudentInfo} isSignedIn={isSignedIn} />}
        />
        <Route
          path="/add"
          element={
            <AddStudent
              StudentInfo={StudentInfo}
              globalState={state}
              globalSetState={setState}
              setStudentInfo={setStudentInfo}
            />
          }
        />
        <Route path="/list" element={<CollegeLists />} />

        <Route
          path="/detail"
          element={<CollegeDetails isSignedIn={isSignedIn} state={state} />}
        />
      </Routes>
    </div>
  );
}
