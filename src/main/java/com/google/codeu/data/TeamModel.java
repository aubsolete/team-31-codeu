package com.google.codeu.data;

public class TeamModel {

    private int teamID = 0;
    private int cohortID = 0;
    private String teamName = "";
    private String projectName = "";
    private String projectDesc = "";
    private String githubLink = "";

    // Setters -- somehow this information is going to need to get sent into the database
    public void setTeamID(int teamID) { this.teamID = teamID; }
    public void setCohortID(int cohortID) { this.cohortID = cohortID; }
    public void setTeamName(String teamName) { this.teamName = teamName; }
    public void setProjectName(String projectName) { this.projectName = projectName; }
    public void setProjectDesc(String projectDesc) { this.projectDesc = projectDesc; }
    public void setGithubLink(String githubLink) { this.githubLink = githubLink; }

    // Getters -- somehow this information is going to need to get pulled from the database
    public int getTeamID() { return teamID; }
    public int getCohortID() { return cohortID; }
    public String getTeamName() { return teamName; }
    public String getProjectName() { return projectName; }
    public String getProjectDesc() { return projectDesc; }
    public String getGithubLink() { return githubLink; }

}
