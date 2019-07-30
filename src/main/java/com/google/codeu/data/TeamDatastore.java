package com.google.codeu.data;

import java.util.*;

import com.google.appengine.api.datastore.*;
import com.google.appengine.api.datastore.Query.FilterOperator;

public class TeamDatastore {

    private DatastoreService teamDatastore;

    public TeamDatastore() {
        teamDatastore = DatastoreServiceFactory.getDatastoreService();
    }

    // Create runs as though all the team information has been set already.
    public Team create(Team team) {
        Entity teamEntity = getEntity(team);
        teamEntity.setProperty("cohortId", team.getCohortId().toString());
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
        Team old = getById(team.getTeamId().toString());
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
        Entity teamEntity = new Entity("Team", team.getTeamId().toString());
        teamEntity.setProperty("teamName", team.getTeamName());
        teamEntity.setProperty("projectName", team.getProjectName());
        teamEntity.setProperty("projectDesc", team.getProjectDesc());
        teamEntity.setProperty("githubLink", team.getGithubLink());
        return teamEntity;
    }

    public Team getTeam(Entity teamEntity) {
        String teamID = teamEntity.getKey().getName();
        String cohortID = (String) teamEntity.getProperty("cohortId");
        String teamName = (String) teamEntity.getProperty("teamName");
        String projectName = (String) teamEntity.getProperty("projectName");
        String projectDesc = (String) teamEntity.getProperty("projectDesc");
        String githubLink = (String) teamEntity.getProperty("githubLink");
        return new Team(teamID, cohortID, teamName, projectName, projectDesc, githubLink);
    }
    
    public List<Team> getTeams(String cohortId) {
  	  List<Team> teams = new ArrayList<Team>();
  	  Query query = new Query("Team")
  		  .setFilter(new Query.FilterPredicate("cohortId", FilterOperator.EQUAL, cohortId));
  	  PreparedQuery results = teamDatastore.prepare(query);
  	  for(Entity entity : results.asIterable()) {
  	    teams.add(getTeam(entity));
  	  }
  	  return teams;
  	}
}
