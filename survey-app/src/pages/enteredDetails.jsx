import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EnteredDetails({ basicDetails, answers, clearAllData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!basicDetails.name || !basicDetails.email || !basicDetails.phone) {
      navigate("/");
    }
  }, [basicDetails, navigate]);

  const handleSubmit = () => {
    clearAllData();
    navigate("/thank-you");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="mb-3">Confirm Your Details</h3>

            <div className="mb-3">
              <strong>Name:</strong> {basicDetails.name}
            </div>
            <div className="mb-3">
              <strong>Email:</strong> {basicDetails.email}
            </div>
            <div className="mb-3">
              <strong>Phone:</strong> {basicDetails.phone}
            </div>

            <hr />

            <div className="mb-3">
              <strong>Q1:</strong> {answers.q1}
            </div>
            <div className="mb-3">
              <strong>Q2:</strong> {answers.q2}
            </div>
            <div className="mb-3">
              <strong>Q3:</strong> {answers.q3}
            </div>

            <button className="btn btn-success" onClick={handleSubmit}>
              Confirm & Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnteredDetails;
