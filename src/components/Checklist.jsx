import { useEffect, useState } from "react";
import UploadEvidence from "./UploadEvidence";

function Checklist({
  id,
  data,
  handleData,
  handleComment,
  handleImageUpload,
  handleUpdateScore,
  question,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // console.log("Component mounted");
    setSelectedOption("");
  }, []);

  const calculateScore = (option) => {
    if (option === "Yes") {
      return 1;
    } else if (option === "No") {
      return 0;
    } else {
      return null; // null for NA score
    }
  };

  const handleSelectedOption = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    const score = calculateScore(option);
    handleUpdateScore(id, score);
  };

  return (
    <>
      <div className="checklist">
        <h2>{question}</h2>

        <div className="checklist-options">
          <label className="radio-button">
            <input
              className="radio-button"
              type="radio"
              value="Yes"
              checked={selectedOption === "Yes"}
              onChange={handleSelectedOption}
            />
            Yes
          </label>

          <label className="radio-button">
            <input
              className="radio-button"
              type="radio"
              value="No"
              checked={selectedOption === "No"}
              onChange={handleSelectedOption}
            />
            No, there is evidence
          </label>

          <label className="radio-button">
            <input
              className="radio-button"
              type="radio"
              value="NA"
              checked={selectedOption === "NA"}
              onChange={handleSelectedOption}
            />
            Not Applicable
          </label>

          {/* <div>
          <p>Selected Option: {selectedOption}</p>
        </div> */}
        </div>
      </div>

      {selectedOption === "No" && (
        <UploadEvidence
          id={id}
          data={data}
          handleData={handleData}
          handleImageUpload={handleImageUpload}
          handleComment={handleComment}
          className="show-upload-evidence"
        />
      )}
    </>
  );
}

export default Checklist;
