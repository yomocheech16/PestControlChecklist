function Summary({ data, questions }) {
  const summaryData = data;
  let score;

  console.log("SUMMARY DATA: ", summaryData);
  console.log("list of questions: ", questions);

  const getTotal = () => {
    let score = 0;
    const questions = data.questionSrc.map((el) => {
      score += el.score;
    });
    return score;
  };

  const getImage = () => {
    let questionItem = "";
    const comments = data.questionSrc.map((element) => {
      console.log("GET COMMENT: ", element.fileSrc);
      console.log(questions[element.name]);
      if (element.fileSrc) {
        return (
          <>
            <h3>{questions[element.name]}</h3>
            <img
              className="img-display"
              key={element.id}
              src={element.fileSrc}
              alt={element.fileName}
            />
            <p>{element.comment}</p>
          </>
        );
      } else console.log("NONE FOUND");
    });
    return comments;
  };

  return (
    <>
      <h2>SUMMARY</h2>
      <div className="summary-credentials">
        <p>Name: {data.info[0].text}</p>
        <p>Country: {data.info[1].text}</p>
        <p>Email: {data.info[2].text}</p>
        <p>Score: {(score = getTotal())}</p>
      </div>

      <div className="summary">
        {score !== 3 && getImage()}
        {score === 3 && (
          <div className="summary-no-nc">
            <h2>There are no NCs raised for this checklist</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default Summary;
