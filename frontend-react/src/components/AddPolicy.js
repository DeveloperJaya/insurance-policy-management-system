import React, { useEffect, useState } from "react";
import PolicyService from "../services/PolicyService";
import "./AddPolicy.css";

function AddPolicy({ selectedPolicy, onSaveSuccess, onCancelEdit }) {

  const [policy, setPolicy] = useState({
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

  const saveOrUpdatePolicy = (e) => {
    e.preventDefault();

    const action = policy.id
      ? PolicyService.updatePolicy(policy.id, policy)
      : PolicyService.addPolicy(policy);

    action.then(() => {
      onSaveSuccess();
      onCancelEdit();
    });
  };

  return (
    <div className="form-container">
      <h2>{policy.id ? "Edit Policy" : "Add Policy"}</h2>

      <form onSubmit={saveOrUpdatePolicy}>
        {/* 🔹 INPUT ROW */}
        <div className="input-row">
          <input name="policyNumber" value={policy.policyNumber} onChange={handleChange} placeholder="Policy No" />
          <input name="policyHolder" value={policy.policyHolder} onChange={handleChange} placeholder="Policy Holder" />
          <input name="policyType" value={policy.policyType} onChange={handleChange} placeholder="Policy Type" />
          <input name="coverageAmount" value={policy.coverageAmount} onChange={handleChange} placeholder="Coverage" />
          <input name="premium" value={policy.premium} onChange={handleChange} placeholder="Premium" />
          <input name="status" value={policy.status} onChange={handleChange} placeholder="Status" />
        </div>

        {/* 🔹 BUTTON ROW */}
        <div className="button-row">
          <button type="submit" className="btn update">
            {policy.id ? "Update Policy" : "Save Policy"}
          </button>

          <button
            type="button"
            className="btn cancel"
            onClick={onCancelEdit}
          >
            Cancel Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPolicy;