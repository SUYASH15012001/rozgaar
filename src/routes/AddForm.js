import React from "react";
import { useNavigate } from "react-router-dom";

function AddForm() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log(state);
    if (state.email === "admin@admin.com" && state.password === "password") {
      navigate("/detail/branch");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "120vh",
      width:"100%"
      }}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center ">
       
          <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto  mt-10 md:mt-0">
            <h2 className="text-gray-1000 text-lg font-large title-font mb-5 ">
              Add Student Details
            </h2>
            <div className="relative mb-4 ">
              <label
                for="first-name"
                className="leading-7 mr-30 text-md text-gray-900 ">
                FirstName:
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={state.fname}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4 ">
              <label
                for="last-name"
                className="leading-7 mr-30 text-md text-gray-900 ">
               LastName:
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={state.lname}
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
                name="email"
                value={state.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
             
            <div className="relative mb-4 ">
              <label
                for="rollno"
                className="leading-7 mr-30 text-md text-gray-900 ">
                University Rollno:
              </label>
              <input
                type="text"
                id="rollno"
                name="rollno"
                value={state.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 ">
              <label
                for="mobile"
                className="leading-7 mr-30 text-md text-gray-900 ">
               Mobile No:
              </label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                value={state.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          
            <div className="relative mb-4 ">
            <label
            className="leading-7 mr-30 text-md text-gray-900 ">
         Degree:</label>
          <select 
           value={state.email}
           onChange={handleChange}
           className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">           
          <option value="Btech"> Bachelors of Technology</option>
            <option value="Mtech"> Masters of Technology</option>
            <option value="BCA"> Bachelors in Computer Application </option>
            <option value="MCA"> Masters in Computer Application </option>
         </select>
     
            </div>

            <div className="relative mb-4 ">
            <label 
             className="leading-7 mr-30 text-md text-gray-900 ">
         Branch:
         </label>
          <select 
           value={state.email}
           onChange={handleChange}
           className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">           
          <option value="CSE"> Computer Science Engineer</option>
            <option value="IT"> Information Technology</option>
            <option value="CE"> Civil Engineering</option>
            <option value="ME"> Mechanical Engineering</option>
            <option value="EN"> Electrical and Electronics</option>
            <option value="ECE" > Electrical and Communication Engineering</option>

          </select>
            </div>

            <div className="relative mb-4 ">
              <label
                for="cname"
                className="leading-7 mr-30 text-md text-gray-900 ">
             Company Name:
              </label>
              <input
                type="text"
                id="cname"
                name="cname"
                value={state.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              </div>
               <div className="relative mb-4 ">
              <label
                for="package"
                className=" leading-7 mr-30 text-md text-gray-900 ">
              Package:
              </label>
              <input
                type="text"
                id="package"
                name="package"
                value={state.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
           
            <button
              //   disabled
              onClick={handleSubmit}
              disabled={!(state.email && state.password)}
              className="text-white bg-blue-500 disaled:bg-gray-100 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
             Submit
            </button>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddForm;
