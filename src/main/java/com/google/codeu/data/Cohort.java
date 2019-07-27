package com.google.codeu.data;

import java.util.UUID;

public class Cohort {

    private UUID cohortId;        // The ID of this cohort, assigned by the database upon creation.
    private String cohortName;    // The name of this cohort, to be assigned manually.

    // Constructors
    public Cohort(String cohortName) {
        this.cohortId = UUID.randomUUID();
        this.cohortName = cohortName;
    }

    public Cohort(String cohortID, String cohortName) {
        this.cohortId = UUID.fromString(cohortID);
        this.cohortName = cohortName;
    }

    // Setters
    public void setCohortId(UUID cohortId) { this.cohortId = cohortId; }
    public void setCohortName(String cohortName) { this.cohortName = cohortName; }

    // Getters
    public UUID getCohortId() { return cohortId; }
    public String getCohortName() { return cohortName; }

}
