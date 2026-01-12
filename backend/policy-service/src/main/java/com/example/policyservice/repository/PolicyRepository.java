package com.example.policyservice.repository;

import com.example.policyservice.entity.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface PolicyRepository extends JpaRepository<Policy, Long> {

    // Find policy by policy number
    Optional<Policy> findByPolicyNumber(String policyNumber);

    // Find all policies by status (ACTIVE, EXPIRED, PENDING)
    List<Policy> findByStatus(String status);

    // Find all policies by policy holder name
    List<Policy> findByPolicyHolder(String policyHolder);

    // Check if policy number already exists
    boolean existsByPolicyNumber(String policyNumber);
}
