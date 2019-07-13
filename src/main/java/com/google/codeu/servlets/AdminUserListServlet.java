package com.google.codeu.servlets;

import com.google.codeu.data.Team;
import com.google.codeu.data.TeamDatastore;
import com.google.codeu.data.UserDatastore;
import com.google.gson.Gson;
import java.io.IOException;

import java.util.Set;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Handles fetching all users for the community page.
 */
@WebServlet("/admin-user-list")
public class AdminUserListServlet extends HttpServlet {

	private TeamDatastore teamDatastore;
    private UserDatastore userDatastore;

    public void init() {
        teamDatastore = new TeamDatastore();
        userDatastore = new UserDatastore();
    }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json");
    String teamID = request.getParameter("teamID"); // Fetch the team's id.
    if (teamID == null || teamID.equals("")) {     // Request is empty...
        response.getWriter().println("[]");        // ...return empty array.
        return;
    }
    Team team = teamDatastore.getById(teamID);
    if(team == null) {
        response.sendError(HttpServletResponse.SC_NOT_FOUND);
        return;
    }
    Gson gson = new Gson();
    String json = gson.toJson(request.getParameter("emails").split(","));
    response.getOutputStream().println(json);
  }
}