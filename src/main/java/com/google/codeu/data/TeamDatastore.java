package com.google.codeu.data;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.SortDirection;
import java.util.UUID;
import com.google.codeu.data.Team;

public class TeamDatastore {

    private DatastoreService teamDatastore;

    // Create runs as though all the team information has been set already.
    public Team create(Team team) {
        Entity teamEntity = new Entity("Team");
        teamEntity.setProperty("teamID", team.getTeamID());
        teamEntity.setProperty("cohortID", team.getCohortID());
        teamEntity.setProperty("teamName", team.getTeamName());
        teamEntity.setProperty("projectName", team.getProjectName());
        teamEntity.setProperty("projectDesc", team.getProjectDesc());
        teamEntity.setProperty("githubLink", team.getGithubLink());
        teamDatastore.put(teamEntity);
        return team;
    }

    public Team getById(String id) {
        Query query = new Query("Team")
                .setFilter(new Query.FilterPredicate("teamID", FilterOperator.EQUAL, id));
        PreparedQuery results = teamDatastore.prepare(query);
        Entity teamEntity = results.asSingleEntity();
        if(teamEntity == null) {
            // Maybe include an error message that the team doesn't exist.
            return null;
        }
        UUID teamID = (UUID) teamEntity.getProperty("teamID");
        UUID cohortID = (UUID) teamEntity.getProperty("cohortID");
        String teamName = (String) teamEntity.getProperty("teamName");
        String projectName = (String) teamEntity.getProperty("projectName");
        String projectDesc = (String) teamEntity.getProperty("projectDesc");
        String githubLink = (String) teamEntity.getProperty("githubLink");
        Team team = new Team(teamID, cohortID, teamName, projectName, projectDesc, githubLink);
        return team;
    }

    public Team edit(Team team) {
        Team new_team = new Team();
        // You should NOT change a team's ID. Should we allow a team to change cohorts, though?
        new_team.setTeamID(team.getTeamID());
        new_team.setCohortID(team.getCohortID());
        new_team.setTeamName(team.getTeamName());
        new_team.setProjectName(team.getProjectName());
        new_team.setProjectDesc(team.getProjectDesc());
        new_team.setGithubLink(team.getGithubLink());
        return new_team;
    }

}
