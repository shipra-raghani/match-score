import React, { use } from "react";
import { useState } from "react";
import MatchTable from "./MatchTable";

function MatchForm() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [score, setScore] = useState("");
  const [matchDetails, setMatchDetails] = useState([]);

  function handleAdd() {
    if (
      firstName.trim() === "" &&
      lastName.trim() === "" &&
      country === "" &&
      score === ""
    ) {
      alert("Please Enter all the details");
      return;
    }
    if (firstName.trim() === "") {
      alert("Please enter first name");
      return;
    }

    if (lastName.trim() === "") {
      alert("Please enter last name");
      return;
    }

    if (country === "") {
      alert("Please select country");
      return;
    }

    if (score === "") {
      alert("Please enter score");
      return;
    }
    const newMatchDetail = {
      firstName: firstName,
      lastName: lastName,
      country: country,
      score: score,
    };
    const updatedDetails = [...matchDetails, newMatchDetail];
    updatedDetails.sort((a, b) => Number(b.score) - Number(a.score));

    setMatchDetails(updatedDetails);
    console.log(updatedDetails);

    setfirstName("");
    setLastName("");
    setCountry("");
    setScore("");
  }

  return (
    <div className="formAndTable">
      <form id="form">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <select
          name="country"
          id="country"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="NewZeland">NewZeland</option>
          <option value="South Africa">South Africa</option>
          <option value="England">England</option>
        </select>
        <input
          type="number"
          name="score"
          id="score"
          placeholder="Enter Score"
          value={score}
          onChange={(e) => {
            setScore(e.target.value);
          }}
        />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </form>
      <MatchTable
        matchDetails={matchDetails}
        setMatchDetails={setMatchDetails}
      />
    </div>
  );
}

export default MatchForm;
