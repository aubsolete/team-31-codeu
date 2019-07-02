package com.google.codeu.servlets;

import com.google.api.Http;
import java.util.UUID;
import com.google.codeu.data.Team;
import com.google.codeu.data.TeamDatastore;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import com.google.gson.Gson;

public class TeamServlet {

    private TeamDatastore teamDatastore;

    public void init() {
        teamDatastore = new TeamDatastore();
    }

    // Note by Faisal: return a specific Team or list of Teams depending on the parameters in the request.
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String teamID = request.getParameter("teamID"); // Fetch the team's id.
        if (teamID == null || teamID.equals("")) {     // Request is empty...
            response.getWriter().println("[]");        // ...return empty array.
            return;
        }

        // Fetch the team tied to the id from the datastore.
        Team team = teamDatastore.getById(teamID);
        if(team == null) {
            System.err.println("No team was found! :(");
        }

        Gson gson = new Gson();
        String json = gson.toJson(team);
        response.getWriter().println(json);
    }

    // Note by Faisal: create a new Team.
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Acquire all of the data needed for a team.
        String teamID = request.getParameter("teamID");
        String cohortID = request.getParameter("cohortID");
        String teamName = request.getParameter("teamName");
        String projectName = request.getParameter("projectName");
        String projectDesc = request.getParameter("projectDesc");
        String githubLink = request.getParameter("githubLink");

        // Create a new Team with the acquired data.
        // NOTE: MUST CONVERT STRING TO UUID SOMEHOW!!!!
        Team team = teamDatastore.create(new Team(teamID, cohortID, teamName, projectName, projectDesc, githubLink));

        // ID is now set, return it.
        response.getWriter().println(new Gson().toJson(team));
    }

    // Note by Faisal: edit an existing Team. The id of the Team to edit will be a request parameter.
    public void doPut(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Acquire all of the data needed for a team.
        String teamID = request.getParameter("teamID");
        String cohortID = request.getParameter("cohortID");
        String teamName = request.getParameter("teamName");
        String projectName = request.getParameter("projectName");
        String projectDesc = request.getParameter("projectDesc");
        String githubLink = request.getParameter("githubLink");

        // Edit an existing team with the acquired data.
        // NOTE: MUST CONVERT STRING TO UUID SOMEHOW!!!!
        Team team = teamDatastore.edit(new Team(teamID, cohortID, teamName, projectName, projectDesc, githubLink));

        // Team is set, now return it.
        response.getWriter().println(new Gson().toJson(team));
    }

}
