package com.example.policyservice.service;

import com.example.policyservice.entity.Policy;
import com.example.policyservice.repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PolicyService {

    @Autowired
    private PolicyRepository policyRepository;

    // Create Policy
    public Policy createPolicy(Policy policy) {
        if (policyRepository.existsByPolicyNumber(policy.getPolicyNumber())) {
            throw new RuntimeException("Policy Number already exists");
        }
        return policyRepository.save(policy);
    }

    // Get All Policies
    public List<Policy> getAllPolicies() {
        return policyRepository.findAll();
    }

    // Get Policy By ID
    public Policy getPolicyById(Long id) {
        return policyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Policy not found with ID: " + id));
    }

    // Get Policy By Policy Number
    public Policy getPolicyByNumber(String policyNumber) {
        return policyRepository.findByPolicyNumber(policyNumber)
                .orElseThrow(() -> new RuntimeException("Policy not found"));
    }

    // Get Policies By Status
    public List<Policy> getPoliciesByStatus(String status) {
        return policyRepository.findByStatus(status);
    }

    // Update Policy
    public Policy updatePolicy(Long id, Policy updatedPolicy) {
        Policy existing = getPolicyById(id);

        existing.setPolicyHolder(updatedPolicy.getPolicyHolder());
        existing.setPolicyType(updatedPolicy.getPolicyType());
        existing.setCoverageAmount(updatedPolicy.getCoverageAmount());
        existing.setPremium(updatedPolicy.getPremium());
        existing.setStatus(updatedPolicy.getStatus());

        return policyRepository.save(existing);
    }

    // Delete Policy
    public void deletePolicy(Long id) {
        policyRepository.deleteById(id);
    }
}
