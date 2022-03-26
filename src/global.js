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

let state = {
  branches: [
    {
      label: "CSE",
      notPlaced: 120,
      placed: 200,
      pcolor:"#353935",
      scolor:"#28282B",
      bpcolor:"	#36454F",
      bscolor:"#36454F",
    },
    {
      label: "IT",
      notPlaced: 100,
      placed: 200,
      scolor:"#00008B",
      pcolor:"#0047AB",
      bscolor:"#7393B3",
      bpcolor:"rgba(75, 192, 192, 1)",
    },
    {
      label: "ME",
      notPlaced: 50,
      placed: 200,
      pcolor:"#FFBF00",
      scolor:"#F08000",
      bpcolor:"#FFC300",
      bscolor:"#CD7F32",
    },
  ],
  tPlaced: 600,
   tNonPlaced: 270,
  // isSignedIn: false,
};
export { state, StudentInfo };
