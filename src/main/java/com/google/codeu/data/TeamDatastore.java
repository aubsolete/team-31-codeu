package com.google.codeu.data;

import com.google.appengine.api.datastore.*;

public class TeamDatastore {

    private DatastoreService teamDatastore;

    public TeamDatastore() {
        teamDatastore = DatastoreServiceFactory.getDatastoreService();
    }

    // Create runs as though all the team information has been set already.
    public Team create(Team team) {
        Entity teamEntity = getEntity(team);
        teamEntity.setProperty("cohortID", team.getCohortID());
        teamDatastore.put(teamEntity);
        return team;
    }

    public Team getById(String id) {
        Entity teamEntity;
        try {
            teamEntity = teamDatastore.get(KeyFactory.createKey("Team", id));
        } catch (EntityNotFoundException e) {
            return null;
        }
        return getTeam(teamEntity);
    }

    public Team edit(Team team) {
        Team old = getById(team.getTeamID().toString());
        if (old == null) {
            // Throw some error on front end.
            return null;
        }
        // Copy over any of the new fields that users can edit.
        old.setTeamName(team.getTeamName());
        old.setProjectName(team.getProjectName());
        old.setProjectDesc(team.getProjectDesc());
        old.setGithubLink(team.getGithubLink());
        teamDatastore.put(getEntity(old));
        return old;
    }

    public Entity getEntity(Team team) {
        Entity teamEntity = new Entity("Team", team.getTeamID().toString());
        teamEntity.setProperty("teamName", team.getTeamName());
        teamEntity.setProperty("projectName", team.getProjectName());
        teamEntity.setProperty("projectDesc", team.getProjectDesc());
        teamEntity.setProperty("githubLink", team.getGithubLink());
        return teamEntity;
    }

    public Team getTeam(Entity teamEntity) {
        String teamID = teamEntity.getKey().getName();
        String cohortID = (String) teamEntity.getProperty("cohortID");
        String teamName = (String) teamEntity.getProperty("teamName");
        String projectName = (String) teamEntity.getProperty("projectName");
        String projectDesc = (String) teamEntity.getProperty("projectDesc");
        String githubLink = (String) teamEntity.getProperty("githubLink");
        return new Team(teamID, cohortID, teamName, projectName, projectDesc, githubLink);
    }
}
