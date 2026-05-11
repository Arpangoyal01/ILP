import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Questionnaire({ basicDetails, answers, setAnswers }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!basicDetails.name || !basicDetails.email || !basicDetails.phone) {
      navigate("/");
    }
  }, [basicDetails, navigate]);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!answers.q1 || !answers.q2 || !answers.q3) {
      alert("please answer all questions.");
      return;
    }
    navigate("/details");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="mb-3">Questionnaire</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  1. How did you hear about us?
                </label>
                <select
                  className="form-select"
                  name="q1"
                  value={answers.q1}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="Google">Google</option>
                  <option value="Friend">Friend</option>
                  <option value="Social Media">Social Media</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  2. Are you satisfied with our service?
                </label>
                <select
                  className="form-select"
                  name="q2"
                  value={answers.q2}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Average">Average</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">3. Any suggestions for us?</label>
                <textarea
                  className="form-control"
                  name="q3"
                  rows="4"
                  value={answers.q3}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Review Details
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
