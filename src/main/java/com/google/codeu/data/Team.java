package com.google.codeu.data;

import java.util.UUID;

public class Team {

    private UUID teamId;        // The ID of this team, assigned by the database upon creation.
    private UUID cohortId;      // The ID of this team's cohort, also connected to a database.
    private String teamName;    // The name of this team, to be assigned manually.
    private String projectName; // The name of this team's project, to be assigned manually.
    private String projectDesc; // The description of this team's project, to be assigned manually.
    private String githubLink;  // The Github link for this team's project, to be assigned upon creation of the repo.

    // Constructors
    public Team(String cohortID, String teamName, String projectName, String projectDesc, String githubLink) {
        this.teamId = UUID.randomUUID();
        this.cohortId = UUID.fromString(cohortID);
        this.teamName = teamName;
        this.projectName = projectName;
        this.projectDesc = projectDesc;
        this.githubLink = githubLink;
    }

    public Team(String teamID, String cohortID, String teamName, String projectName, String projectDesc, String githubLink) {
        this.teamId = UUID.fromString(teamID);
        this.cohortId = UUID.fromString(cohortID);
        this.teamName = teamName;
        this.projectName = projectName;
        this.projectDesc = projectDesc;
        this.githubLink = githubLink;
    }

    // Setters
    public void setTeamId(UUID teamId) { this.teamId = teamId; }
    public void setCohortId(UUID cohortId) { this.cohortId = cohortId; }
    public void setTeamName(String teamName) { this.teamName = teamName; }
    public void setProjectName(String projectName) { this.projectName = projectName; }
    public void setProjectDesc(String projectDesc) { this.projectDesc = projectDesc; }
    public void setGithubLink(String githubLink) { this.githubLink = githubLink; }

    // Getters
    public UUID getTeamId() { return teamId; }
    public UUID getCohortId() { return cohortId; }
    public String getTeamName() { return teamName; }
    public String getProjectName() { return projectName; }
    public String getProjectDesc() { return projectDesc; }
    public String getGithubLink() { return githubLink; }

}
