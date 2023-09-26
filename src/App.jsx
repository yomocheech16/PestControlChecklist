import { useEffect, useState } from "react";
// import './App.css'
import { Route, Routes } from "react-router-dom";
import Dummydb from "./components/Dummydb";
import UserInformation from "./components/UserInformation.jsx";
import Checklist from "./components/Checklist";
// import UploadEvidence from "./components/UploadEvidence";
import NavRoutes from "./components/NavRoutes";
import Summary from "./components/Summary";

function App() {
  const [data, setData] = useState({
    questionSrc: [
      {
        id: "1",
        name: "question1",
        fileSrc: "",
        fileName: "",
        comment: "",
        score: null,
      },
      {
        id: "2",
        name: "question2",
        fileSrc: "",
        fileName: "",
        comment: "",
        score: null,
      },
      {
        id: "3",
        name: "question3",
        fileSrc: "",
        fileName: "",
        comment: "",
        score: null,
      },
    ],

    info: [
      {
        name: "Full Name",
        text: "",
      },
      {
        name: "Country",
        text: "",
      },
      {
        name: "Email",
        text: "",
      },
      {
        name: "TryCountry",
        text: "",
      },
    ],
  });

  const questions = {
    question1:
      "Q1. Is the area free of evidence of live pests outside the facility (rodents, abnormal amounts of flies, cockroaches)?",
    question2:
      "Q2. Is the area free of evidence of dead pests outside the facility (rodents, cockroaches)?",
    question3:
      "Q3: Is the area free of signs of pest activity (nesting or burrowing, droppings, smears, gnaws)?",
  };

  useEffect(() => {
    console.log("DATA: ", data);
  }, [data]);

  function findUser(name) {
    const userName = name;
    const filteredName = Dummydb.filter((user) => user.name === userName);
    console.log("look for this name: ", userName);
    console.log("findUser FIND NAME: ", filteredName);
    return filteredName;
  }

  const handleData = (e) => {
    setData({
      ...data,
      info: data.info.map((element) => {
        if (element.name === e.target.placeholder)
          element.text = e.target.value;
        console.log(element);
        return element;
      }),
    });
  };

  const handleComment = (questionId, newComment) => {
    const questionIndex = data.questionSrc.findIndex(
      (q) => q.id === questionId
    );

    if (questionIndex !== -1) {
      const updatedData = { ...data };

      updatedData.questionSrc[questionIndex].comment = newComment;

      setData(updatedData);
    }
  };
  const handleImageUpload = (e, questionName) => {
    const questionIndex = data.questionSrc.findIndex(
      (q) => q.name === questionName
    );
    let updatedQuestionSrc = [...data.questionSrc];
    if (questionIndex !== -1) {
      updatedQuestionSrc[questionIndex].fileName = e.target.files[0].name;
      updatedQuestionSrc[questionIndex].fileSrc = URL.createObjectURL(
        e.target.files[0]
      );

      setData({
        ...data,
        questionSrc: updatedQuestionSrc,
      });
    }
  };

  const handleUpdateScore = (questionId, score) => {
    const questionIndex = data.questionSrc.findIndex(
      (q) => q.id === questionId
    );
    if (questionIndex !== -1) {
      const updatedQuestionSrc = [...data.questionSrc];
      updatedQuestionSrc[questionIndex].score = score;
      setData({
        ...data,
        questionSrc: updatedQuestionSrc,
      });
    }
  };

  return (
    <>
      <div className="main-app">
        <h1 className="main-title">PEST CONTROL WEEKLY WALK</h1>
        <NavRoutes />
        <Routes>
          <Route
            path="/"
            element={<UserInformation data={data} handleData={handleData} />}
          />
          <Route
            path="/question1"
            element={
              <Checklist
                key="question1"
                id="1"
                data={data}
                handleData={handleData}
                handleImageUpload={(e) => handleImageUpload(e, "question1")}
                handleUpdateScore={handleUpdateScore}
                handleComment={handleComment}
                question={questions.question1}
              />
            }
          />
          <Route
            path="/question2"
            element={
              <Checklist
                key="question2"
                id="2"
                data={data}
                handleData={handleData}
                handleImageUpload={(e) => handleImageUpload(e, "question2")}
                handleUpdateScore={handleUpdateScore}
                handleComment={handleComment}
                question={questions.question2}
              />
            }
          />
          <Route
            path="/question3"
            element={
              <Checklist
                key="question3"
                id="3"
                data={data}
                handleData={handleData}
                handleImageUpload={(e) => handleImageUpload(e, "question3")}
                handleUpdateScore={handleUpdateScore}
                handleComment={handleComment}
                question={questions.question3}
              />
            }
          />

          <Route
            path="/summary"
            element={<Summary data={data} questions={questions} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
