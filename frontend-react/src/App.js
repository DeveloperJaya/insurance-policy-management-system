import React, { useEffect, useState } from "react";
import AddPolicy from "./components/AddPolicy";
import EditPolicy from "./components/EditPolicy"; // ✅ import EditPolicy
import PolicyList from "./components/PolicyList";
import PolicyService from "./services/PolicyService";

function App() {

  const [policies, setPolicies] = useState([]);
  const [selectedPolicy, setSelectedPolicy] = useState(null); // used for editing

  // Load policies from backend
  const loadPolicies = () => {
    PolicyService.getPolicies()
      .then(res => setPolicies(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    loadPolicies();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Insurance Policy Management System</h1>

      {/* 🔹 ADD POLICY */}
      {!selectedPolicy && (
        <AddPolicy
          onSaveSuccess={loadPolicies}
        />
      )}

      {/* 🔹 EDIT POLICY */}
      {selectedPolicy && (
        <EditPolicy
          selectedPolicy={selectedPolicy}
          onUpdateSuccess={loadPolicies}
          onCancel={() => setSelectedPolicy(null)}
        />
      )}

      {/* 🔹 POLICY LIST */}
      <PolicyList
        policies={policies}
        onEdit={setSelectedPolicy}
        refreshPolicies={loadPolicies}
      />
    </div>
  );
}

export default App;