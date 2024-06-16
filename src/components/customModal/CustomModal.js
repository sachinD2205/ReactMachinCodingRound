import { useState } from "react";
import "./CustomModal.css";
import StudentDetailsShowModal from "./StudentDetailsShowModal";

function CustomModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentStudentData, setCurrentStudentData] = useState(null);

  // studentDetails
  const studentDetails = [
    {
      name: "Ajit",
      class: "BCA",
    },
    {
      name: "Ravi",
      class: "MCA",
    },
    {
      name: "Yogesh",
      class: "BSC",
    },
    {
      name: "Ganesh",
      class: "BA",
    },
    {
      name: "Tejas",
      class: "BCA",
    },
  ];

  // tableActionButton
  const tableActionButton = (data) => {
    console.log("ActionClickedRowData", data);
    setCurrentStudentData(data);
    setModalIsOpen(true);
  };

  //  view
  return (
    <div className="App">
      <div className="StudentDetailsDiv"> Student Details</div>
      <div className="StudentTableDiv">
        <table className="StudentTable">
          <tr>
            <th>Sr No.</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
          {studentDetails &&
            studentDetails?.map((student, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{student?.name}</td>
                <td>{student?.class}</td>
                <td>
                  <button onClick={() => tableActionButton(student)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>

      {/** Modal To Show Data */}
      <StudentDetailsShowModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        currentStudentData={currentStudentData}
        setCurrentStudentData={setCurrentStudentData}
      />
    </div>
  );
}

export default CustomModal;
