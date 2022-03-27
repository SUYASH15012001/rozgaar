import { FormControlLabel, Switch, Grid, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function AddStudent({
  StudentInfo,
  setStudentInfo,
  globalState,
  globalSetState,
}) {
  const [state, setState] = React.useState({
    name: "",
    sgpa: 0,
    branch: "CSE",
    emailId: "",
    placed: false,
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.name === "sgpa") {
      if (e.target.value >= 0 && e.target.value <= 10) {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
      }
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = () => {
    console.log(state);
    setStudentInfo([...StudentInfo, { ...state }]);
    let newBranches = globalState.branches.map((br) => {
      if (br.label === state.branch) {
        let newBranchObj = {
          ...br,
          placed: br.placed + (state.placed ? 1 : 0),
          notPlaced: br.notPlaced + (state.placed ? 0 : 1),
        };
        // console.log(newBranchObj);
        return newBranchObj;
      } else return br;
    });
    // console.log(newBranches);
    globalSetState({
      ...globalState,
      branches: newBranches,
      tPlaced: globalState.tPlaced + (state.placed ? 1 : 0),
      tNonPlaced: globalState.tNonPlaced + (state.placed ? 0 : 1),
    });
    navigate("/detail");
  };

  return (
    <Grid container>
      <Grid xs={12} sm={3} />
      <Grid item xs={12} sm={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}>
          <section className="text-gray-600 body-font">
            <div className="container px-5 pb-5  mx-auto flex flex-wrap items-center ">
              <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto  mt-10 md:mt-0">
                <h2 className="text-gray-1000 text-lg font-large title-font mb-5 ">
                  Add Student Details
                </h2>
                <div className="relative mb-4 ">
                  <label
                    for="first-name"
                    className="leading-7 mr-30 text-md text-gray-900 ">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4 ">
                  <label
                    for="full-name"
                    className="leading-7 mr-30 text-md text-gray-900 ">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="emailId"
                    value={state.emailId}
                    onChange={handleChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4 ">
                  <label
                    for="rollno"
                    className="leading-7 mr-30 text-md text-gray-900 ">
                    SGPA:
                  </label>
                  <input
                    type="number"
                    id="rollno"
                    name="sgpa"
                    value={state.sgpa}
                    onChange={handleChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4 ">
                  <label className="leading-7 mr-30 text-md text-gray-900 ">
                    Field of Study:
                  </label>
                  <select
                    value={state.branch}
                    name="branch"
                    onChange={handleChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    {globalState.branches.map((br) => (
                      <option value={br.label}> {br.label}</option>
                    ))}
                  </select>
                </div>

                <Grid container>
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                    item
                    xs={12}
                    sm={6}>
                    <FormControlLabel
                      control={
                        <Switch
                          name="placed"
                          checked={state.placed}
                          onChange={(e) => {
                            console.log(state);
                            setState({
                              ...state,
                              placed: e.target.checked,
                            });
                          }}
                        />
                      }
                      label="Placed ?"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}>
                    <Button
                      fullwidth
                      color="primary"
                      style={{ textTransform: "none" }}
                      variant="contained"
                      onClick={handleSubmit}
                      disabled={!(state.emailId && state.sgpa && state.name)}
                      //   className=" w-100 text-white bg-blue-500 disaled:bg-gray-100 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </section>
        </div>
      </Grid>
      <Grid xs={12} sm={3} />
    </Grid>
  );
}

export default AddStudent;
