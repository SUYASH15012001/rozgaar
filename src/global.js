function createData(name, sgpa, branch, emailId, placed) {
  return {
    name,
    sgpa,
    branch,
    emailId,
    placed,
  };
}

const StudentInfo = [
  createData("Cupcake", 9, "CSE", "registrar@abes.ac.in", true),
  createData("Donut", 8.6, "IT", "registrar@abes.ac.in", true),
  createData("Eclair", 8.6, "IT", "registrar@abes.ac.in", false),
  createData("Frozen yoghurt", 9, "CSE", "registrar@abes.ac.in", false),
  createData("Gingerbread", 8.6, "IT", "registrar@abes.ac.in", true),
  createData("Honeycomb", 8.6, "IT", "registrar@abes.ac.in", true),
  createData("Ice cream sandwich", 9, "CSE", "registrar@abes.ac.in", false),
  createData("Jelly Bean", 8.6, "IT", "registrar@abes.ac.in", false),
  createData("KitKat", 9, "CSE", "registrar@abes.ac.in", true),
  createData("Lollipop", 8.6, "IT", "registrar@abes.ac.in", true),
  createData("Marshmallow", 9, "CSE", "registrar@abes.ac.in", false),
  createData("Nougat", 8.6, "IT", "registrar@abes.ac.in", true),
  createData("Oreo", 9, "CSE", "registrar@abes.ac.in", true),
  createData("Nougat", 8.6, "ME", "registrar@abes.ac.in", true),
  createData("Oreo", 9, "ME", "registrar@abes.ac.in", false),
  createData("Nougat", 8.6, "ME", "registrar@abes.ac.in", false),
  createData("Oreo", 9, "ME", "registrar@abes.ac.in", false),
  createData("Champ", 8.8, "CSE", "registrar@abes.ac.in", true),
];

let state = {
  branches: [
    {
      label: "CSE",
      notPlaced: 3,
      placed: 4,
      pcolor: "#353935",
      scolor: "#28282B",
      bpcolor: "	#36454F",
      bscolor: "#36454F",
    },
    {
      label: "IT",
      notPlaced: 2,
      placed: 5,
      scolor: "#00008B",
      pcolor: "#0047AB",
      bscolor: "#7393B3",
      bpcolor: "rgba(75, 192, 192, 1)",
    },
    {
      label: "ME",
      notPlaced: 3,
      placed: 1,
      pcolor: "#FFBF00",
      scolor: "#F08000",
      bpcolor: "#FFC300",
      bscolor: "#CD7F32",
    },
  ],
  tPlaced: 10,
  tNonPlaced: 8,
  // isSignedIn: false,
};
export { state, StudentInfo };
