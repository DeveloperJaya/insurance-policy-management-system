package com.example.policyservice.controller;

import com.example.policyservice.entity.Policy;
import com.example.policyservice.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/policies")
@CrossOrigin(origins = "http://localhost:3000")
public class PolicyController {

    @Autowired
    private PolicyService policyService;

    // Create Policy
    @PostMapping
    public Policy createPolicy(@RequestBody Policy policy) {
        return policyService.createPolicy(policy);
    }

    // Get All Policies
    @GetMapping
    public List<Policy> getAllPolicies() {
        return policyService.getAllPolicies();
    }

    // Get Policy By ID
    @GetMapping("/{id}")
    public Policy getPolicyById(@PathVariable Long id) {
        return policyService.getPolicyById(id);
    }

    // Get Policy By Policy Number
    @GetMapping("/number/{policyNumber}")
    public Policy getPolicyByNumber(@PathVariable String policyNumber) {
        return policyService.getPolicyByNumber(policyNumber);
    }

    // Get Policies By Status
    @GetMapping("/status/{status}")
    public List<Policy> getPoliciesByStatus(@PathVariable String status) {
        return policyService.getPoliciesByStatus(status);
    }

    // Update Policy
    @PutMapping("/{id}")
    public Policy updatePolicy(@PathVariable Long id,
                               @RequestBody Policy policy) {
        return policyService.updatePolicy(id, policy);
    }

    // Delete Policy
    @DeleteMapping("/{id}")
    public String deletePolicy(@PathVariable Long id) {
        policyService.deletePolicy(id);
        return "Policy deleted successfully";
    }
}
