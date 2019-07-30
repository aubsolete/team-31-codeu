package com.google.codeu.servlets;

import com.google.codeu.data.Team;
import com.google.codeu.data.TeamDatastore;
import com.google.codeu.data.User;
import com.google.codeu.data.UserDatastore;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import com.google.gson.Gson;

@WebServlet("/team")
public class TeamServlet extends HttpServlet {

    private TeamDatastore teamDatastore;
    private UserDatastore userDatastore;

    public void init() {
        teamDatastore = new TeamDatastore();
        userDatastore = new UserDatastore();
    }

    // Note by Faisal: return a specific Team or list of Teams depending on the parameters in the request.
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String teamId = request.getParameter("teamId"); // Fetch the team's id.
        if (teamId == null || teamId.equals("")) {     // Request is empty...
            response.getWriter().println("[]");        // ...return empty array.
            return;
        }

        // Fetch the team tied to the id from the datastore.
        Team team = teamDatastore.getById(teamId);
        if(team == null) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        Gson gson = new Gson();
        String json = gson.toJson(team);
        response.getWriter().println(json);
    }

    // Note by Faisal: create a new Team.
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Acquire all of the data needed for a team.
        String cohortId = request.getParameter("cohortId");
        String teamName = request.getParameter("teamName");
        String projectName = request.getParameter("projectName");
        String projectDesc = request.getParameter("projectDesc");
        String githubLink = request.getParameter("githubLink");
        String[] emailList = request.getParameter("emails").split(",");

        // Create a new Team with the acquired data.
        Team team = teamDatastore.create(new Team(cohortId, teamName, projectName, projectDesc, githubLink));
        for (String email : emailList) {
        	User user = new User(email, team.getTeamId().toString());
        	userDatastore.storeUser(user);
        }
        // ID is now set, return it.
        response.getWriter().println(new Gson().toJson(team));
    }

    // Note by Faisal: edit an existing Team. The id of the Team to edit will be a request parameter.
    public void doPut(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Acquire all of the data needed for a team.
        String teamId = request.getParameter("teamId");
        String cohortId = request.getParameter("cohortId");
        String teamName = request.getParameter("teamName");
        String projectName = request.getParameter("projectName");
        String projectDesc = request.getParameter("projectDesc");
        String githubLink = request.getParameter("githubLink");

        // Edit an existing team with the acquired data.
        Team team = teamDatastore.edit(new Team(teamId, cohortId, teamName, projectName, projectDesc, githubLink));

        // Team is set, now return it.
        response.getWriter().println(new Gson().toJson(team));
    }

}
