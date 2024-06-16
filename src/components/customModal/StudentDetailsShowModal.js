import React from "react";
import "./CustomModal.css";

// StudentDetailsShowModal
const StudentDetailsShowModal = ({
  modalIsOpen,
  setModalIsOpen,
  currentStudentData,
  setCurrentStudentData,
}) => {
  // exitModal
  const exitModal = () => {
    console.log("exitButtonClicked");
    setCurrentStudentData(null);
    setModalIsOpen(false);
  };

  console.log("All________", currentStudentData, modalIsOpen);

  // view
  return (
    <div style={{ display: modalIsOpen ? "block" : "none" }}>
      <div className="ModalMainDiv">
        <div>
          <div className="CurrentStudentDiv">Current Student</div>
          <div>
            <div>
              <b>Student Name : </b> {currentStudentData?.name}
            </div>
            <div>
              <b>Student Class :</b> {currentStudentData?.class}
            </div>
          </div>
          <div>
            <button onClick={() => exitModal()}>Exit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsShowModal;
