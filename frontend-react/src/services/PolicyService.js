import axios from "axios";

const API_URL = "http://localhost:8081/policies";

class PolicyService {

  getPolicies() {
    return axios.get(API_URL);
  }

  addPolicy(policy) {
    return axios.post(API_URL, policy);
  }

  updatePolicy(id, policy) {
    return axios.put(`${API_URL}/${id}`, policy);
  }

  deletePolicy(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new PolicyService();
