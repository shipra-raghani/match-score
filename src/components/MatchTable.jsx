import React from "react";
import Delete from "./Delete";

function MatchTable({ matchDetails, setMatchDetails }) {
  function handleMinus(index) {
    const updatedDetail = matchDetails.map((match, i) =>
      i === index ? { ...match, score: Number(match.score) - 5 } : match
    );

    updatedDetail.sort((a, b) => Number(b.score) - Number(a.score));

    setMatchDetails(updatedDetail);
  }
  function handlePlus(index) {
    const updatedDetail = matchDetails.map((match, i) =>
      i === index ? { ...match, score: Number(match.score) + 5 } : match
    );

    updatedDetail.sort((a, b) => Number(b.score) - Number(a.score));

    setMatchDetails(updatedDetail);
  }
  console.log(matchDetails);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Country</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {matchDetails.map((match, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{match.firstName + " " + match.lastName}</td>
              <td>{match.country}</td>
              <td>{match.score}</td>
              <td className="action">
                <Delete
                  matchDetails={matchDetails}
                  index={index}
                  setMatchDetails={setMatchDetails}
                />
                <button onClick={() => handlePlus(index)}>+5</button>

                <button onClick={() => handleMinus(index)}>-5</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MatchTable;
