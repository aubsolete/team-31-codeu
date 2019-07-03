package com.google.codeu.data;

import java.util.UUID;

public class Cohort {

    private UUID cohortID;        // The ID of this cohort, assigned by the database upon creation.
    private String cohortName;    // The name of this cohort, to be assigned manually.

    // Constructors
    public Cohort(String cohortName) {
        this.cohortID = UUID.randomUUID();
        this.cohortName = cohortName;
    }

    public Cohort(String cohortID, String cohortName) {
        this.cohortID = UUID.fromString(cohortID);
        this.cohortName = cohortName;
    }

    // Setters
    public void setCohortID(UUID cohortID) { this.cohortID = cohortID; }
    public void setCohortName(String cohortName) { this.cohortName = cohortName; }

    // Getters
    public UUID getCohortID() { return cohortID; }
    public String getCohortName() { return cohortName; }

}
