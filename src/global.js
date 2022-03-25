function createData(name, sgpa, branch, emailId) {
  return {
    name,
    sgpa,
    branch,
    emailId,
  };
}

const StudentInfo = [
  createData("Cupcake", 9, "CSE", "registrar@abes.ac.in"),
  createData("Donut", 8.6, "IT", "registrar@abes.ac.in"),
  createData("Eclair", 8.6, "IT", "registrar@abes.ac.in"),
  createData("Frozen yoghurt", 9, "CSE", "registrar@abes.ac.in"),
  createData("Gingerbread", 8.6, "IT", "registrar@abes.ac.in"),
  createData("Honeycomb", 8.6, "IT", "registrar@abes.ac.in"),
  createData("Ice cream sandwich", 9, "CSE", "registrar@abes.ac.in"),
  createData("Jelly Bean", 8.6, "IT", "registrar@abes.ac.in"),
  createData("KitKat", 9, "CSE", "registrar@abes.ac.in"),
  createData("Lollipop", 8.6, "IT", "registrar@abes.ac.in"),
  createData("Marshmallow", 9, "CSE", "registrar@abes.ac.in"),
  createData("Nougat", 8.6, "IT", "registrar@abes.ac.in"),
  createData("Oreo", 9, "CSE", "registrar@abes.ac.in"),
];

let state = {};
export { state, StudentInfo };
