import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BasicDetails({ basicDetails, setBasicDetails }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setBasicDetails({
      ...basicDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = basicDetails;

    if (!name || !email || !phone) {
      setError("please fill in all basic details.");
      return;
    }
    setError("");
    navigate("/questionnaire");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="mb-3">Basic Details</h3>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={basicDetails.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email ID</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={basicDetails.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={basicDetails.phone}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
