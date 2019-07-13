package com.google.codeu.servlets;

import com.google.codeu.data.TeamDatastore;
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
@WebServlet("/admin-team-list")
public class AdminTeamListServlet extends HttpServlet {

  private TeamDatastore datastore;

  @Override
  public void init() {
    datastore = new TeamDatastore();
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException {
    response.setContentType("application/json");
    Set<String> teams = datastore.getTeams();
    Gson gson = new Gson();
    String json = gson.toJson(teams);
    response.getOutputStream().println(json);
  }
}