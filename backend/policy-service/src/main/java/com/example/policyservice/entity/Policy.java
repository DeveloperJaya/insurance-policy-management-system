package com.example.policyservice.entity;

import javax.persistence.*;

@Entity
@Table(name = "policies")
public class Policy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "policy_number", nullable = false, unique = true)
    private String policyNumber;

    @Column(name = "policy_holder", nullable = false)
    private String policyHolder;

    @Column(name = "policy_type")
    private String policyType;

    @Column(name = "coverage_amount")
    private double coverageAmount;

    @Column(name = "premium")
    private double premium;

    @Column(name = "status")
    private String status;

    // ---------------- CONSTRUCTORS ----------------

    public Policy() {
        // Default constructor (required by JPA)
    }

    public Policy(String policyNumber, String policyHolder, String policyType,
                  double coverageAmount, double premium, String status) {
        this.policyNumber = policyNumber;
        this.policyHolder = policyHolder;
        this.policyType = policyType;
        this.coverageAmount = coverageAmount;
        this.premium = premium;
        this.status = status;
    }

    // ---------------- GETTERS & SETTERS ----------------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPolicyNumber() {
        return policyNumber;
    }

    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }

    public String getPolicyHolder() {
        return policyHolder;
    }

    public void setPolicyHolder(String policyHolder) {
        this.policyHolder = policyHolder;
    }

    public String getPolicyType() {
        return policyType;
    }

    public void setPolicyType(String policyType) {
        this.policyType = policyType;
    }

    public double getCoverageAmount() {
        return coverageAmount;
    }

    public void setCoverageAmount(double coverageAmount) {
        this.coverageAmount = coverageAmount;
    }

    public double getPremium() {
        return premium;
    }

    public void setPremium(double premium) {
        this.premium = premium;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
