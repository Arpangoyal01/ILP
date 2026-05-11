import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import BasicDetails from "./pages/basicDetails";
import Questionnaire from "./pages/questionnaire";
import EnteredDetails from "./pages/enteredDetails";
import ThankYou from "./pages/thankYou";

const initialBasicDetails = JSON.parse(
  localStorage.getItem("basicDetials"),
) || {
  name: "",
  email: "",
  phone: "",
};
const initialAnswers = JSON.parse(localStorage.getItem("answers")) || {
  q1: "",
  q2: "",
  q3: "",
};

export default function App() {
  const [basicDetails, setBasicDetails] = useState(initialBasicDetails);
  const [answers, setAnswers] = useState(initialAnswers);

  useEffect(() => {
    localStorage.setItem("basicDetails", JSON.stringify(basicDetails));
  }, [basicDetails]);
  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  const clearAllData = () => {
    setBasicDetails({ name: "", email: "", phone: "" });
    setAnswers({ q1: "", q2: "", q3: "" });
    localStorage.removeItem("basicDetails");
    localStorage.removeItem("answers");
  };
  return (
    <>
      <Header />
      <div className="conatiner py-4">
        <Routes>
          <Route
            path="/"
            element={
              <BasicDetails
                basicDetails={basicDetails}
                setBasicDetails={setBasicDetails}
              />
            }
          />

          <Route
            path="/questionnaire"
            element={
              <Questionnaire
                basicDetails={basicDetails}
                answers={answers}
                setAnswers={setAnswers}
              />
            }
          />

          <Route
            path="/details"
            element={
              <EnteredDetails
                basicDetails={basicDetails}
                answers={answers}
                clearAllData={clearAllData}
              />
            }
          />

          <Route path="/thankYou" element={<ThankYou />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
