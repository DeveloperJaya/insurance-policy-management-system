import React from "react";
import PolicyService from "../services/PolicyService";
import "./PolicyList.css";

function PolicyList({ policies, onEdit, refreshPolicies }) {

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this policy?")) {
      PolicyService.deletePolicy(id)
        .then(() => {
          alert("Policy Deleted Successfully");
          refreshPolicies();   // 🔥 auto refresh
        })
        .catch(() => alert("Delete failed"));
    }
  };

  return (
    <div>
      <h2>Policy List</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Policy No</th>
            <th>Holder</th>
            <th>Type</th>
            <th>Coverage</th>
            <th>Premium</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {policies.length === 0 ? (
            <tr>
              <td colSpan="9">No Policies Found</td>
            </tr>
          ) : (
            policies.map(policy => (
              <tr key={policy.id}>
                <td>{policy.id}</td>
                <td>{policy.policyNumber}</td>
                <td>{policy.policyHolder}</td>
                <td>{policy.policyType}</td>
                <td>{policy.coverageAmount}</td>
                <td>{policy.premium}</td>
                <td>{policy.status}</td>

                {/* ✅ EDIT BUTTON */}
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => onEdit(policy)}
                  >
                    Edit Policy
                  </button>
                </td>

                {/* ✅ DELETE BUTTON */}
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(policy.id)}
                  >
                    Delete Policy
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PolicyList;
