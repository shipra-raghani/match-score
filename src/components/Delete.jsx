import React from "react";

function Delete({ matchDetails, index, setMatchDetails }) {
  function deleteMatchDetail() {
    const updatedDetails = matchDetails.filter((match, i) => i !== index);
    setMatchDetails(updatedDetails);
  }
  return (
    <div>
      <button
        type="button"
        onClick={deleteMatchDetail}
        className="Delete buttons"
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default Delete;
