import React, { useEffect, useState } from "react";
import PolicyService from "../services/PolicyService";
import "./EditPolicy.css";

function EditPolicy({ selectedPolicy, onUpdateSuccess, onCancel }) {

  const [policy, setPolicy] = useState({
    id: "",
    policyNumber: "",
    policyHolder: "",
    policyType: "",
    coverageAmount: "",
    premium: "",
    status: ""
  });

  useEffect(() => {
    if (selectedPolicy) {
      setPolicy(selectedPolicy);
    }
  }, [selectedPolicy]);

  const handleChange = (e) => {
    setPolicy({ ...policy, [e.target.name]: e.target.value });
  };

  const updatePolicy = (e) => {
    e.preventDefault();

    PolicyService.updatePolicy(policy.id, policy).then(() => {
      onUpdateSuccess();
      onCancel();
    });
  };

  if (!selectedPolicy) return null;

  return (
    <div className="edit-container">
      <h3>Edit Policy</h3>

      <form onSubmit={updatePolicy}>
        {/* 🔹 INPUT ROW */}
        <div className="input-row">
          <input name="policyNumber" value={policy.policyNumber} onChange={handleChange} />
          <input name="policyHolder" value={policy.policyHolder} onChange={handleChange} />
          <input name="policyType" value={policy.policyType} onChange={handleChange} />
          <input name="coverageAmount" value={policy.coverageAmount} onChange={handleChange} />
          <input name="premium" value={policy.premium} onChange={handleChange} />
          <input name="status" value={policy.status} onChange={handleChange} />
        </div>

        {/* 🔹 BUTTON ROW */}
        <div className="button-row">
          <button type="submit" className="btn update">
            Update Policy
          </button>

          <button
            type="button"
            className="btn cancel"
            onClick={onCancel}
          >
            Cancel Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPolicy;
