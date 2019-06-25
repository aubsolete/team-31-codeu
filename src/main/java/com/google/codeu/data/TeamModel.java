package com.google.codeu.data;

import java.util.UUID;

public class TeamModel {


    private UUID teamID;        // The ID of this team, assigned by the database upon creation.
    private UUID cohortID;      // The ID of this team's cohort, also connected to a database.
    private String teamName;    // The name of this team, to be assigned manually.
    private String projectName; // The name of this team's project, to be assigned manually.
    private String projectDesc; // The description of this team's project, to be assigned manually.
    private String githubLink;  // The Github link for this team's project, to be assigned upon creation of the repo.

    // Setters -- somehow this information is going to need to get sent into the database
    public void setTeamID(UUID teamID) { this.teamID = teamID; }
    public void setCohortID(UUID cohortID) { this.cohortID = cohortID; }
    public void setTeamName(String teamName) { this.teamName = teamName; }
    public void setProjectName(String projectName) { this.projectName = projectName; }
    public void setProjectDesc(String projectDesc) { this.projectDesc = projectDesc; }
    public void setGithubLink(String githubLink) { this.githubLink = githubLink; }

    // Getters -- somehow this information is going to need to get pulled from the database
    public UUID getTeamID() { return teamID; }
    public UUID getCohortID() { return cohortID; }
    public String getTeamName() { return teamName; }
    public String getProjectName() { return projectName; }
    public String getProjectDesc() { return projectDesc; }
    public String getGithubLink() { return githubLink; }

}
