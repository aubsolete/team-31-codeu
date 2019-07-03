package com.google.codeu.data;

import java.util.UUID;

public class Team {

    private UUID teamID;        // The ID of this team, assigned by the database upon creation.
    private UUID cohortID;      // The ID of this team's cohort, also connected to a database.
    private String teamName;    // The name of this team, to be assigned manually.
    private String projectName; // The name of this team's project, to be assigned manually.
    private String projectDesc; // The description of this team's project, to be assigned manually.
    private String githubLink;  // The Github link for this team's project, to be assigned upon creation of the repo.

    // Constructors
    public Team() {}

    public Team(String cohortID, String teamName, String projectName, String projectDesc, String githubLink) {
        this.teamID = UUID.randomUUID();
        this.cohortID = UUID.fromString(cohortID);
        this.teamName = teamName;
        this.projectName = projectName;
        this.projectDesc = projectDesc;
        this.githubLink = githubLink;
    }

    public Team(String teamID, String cohortID, String teamName, String projectName, String projectDesc, String githubLink) {
        this.teamID = UUID.fromString(teamID);
        this.cohortID = UUID.fromString(cohortID);
        this.teamName = teamName;
        this.projectName = projectName;
        this.projectDesc = projectDesc;
        this.githubLink = githubLink;
    }

    // Setters
    public void setTeamID(UUID teamID) { this.teamID = teamID; }
    public void setCohortID(UUID cohortID) { this.cohortID = cohortID; }
    public void setTeamName(String teamName) { this.teamName = teamName; }
    public void setProjectName(String projectName) { this.projectName = projectName; }
    public void setProjectDesc(String projectDesc) { this.projectDesc = projectDesc; }
    public void setGithubLink(String githubLink) { this.githubLink = githubLink; }

    // Getters
    public UUID getTeamID() { return teamID; }
    public UUID getCohortID() { return cohortID; }
    public String getTeamName() { return teamName; }
    public String getProjectName() { return projectName; }
    public String getProjectDesc() { return projectDesc; }
    public String getGithubLink() { return githubLink; }

}
