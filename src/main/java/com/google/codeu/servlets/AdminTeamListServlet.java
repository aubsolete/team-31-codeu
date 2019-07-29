package com.google.codeu.servlets;

import com.google.codeu.data.Team;
import com.google.codeu.data.TeamDatastore;
import com.google.gson.Gson;
import java.io.IOException;

import java.util.*;
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
    String cohortId = request.getParameter("cohortId");
    List<Team> teams = datastore.getTeams(cohortId);
    Gson gson = new Gson();
    String json = gson.toJson(teams);
    response.getOutputStream().println(json);
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
          throws IOException {
    response.setContentType("application/json");
    String cohortId = request.getParameter("cohortId");
    String teamName = request.getParameter("teamName");
    Team team = datastore.create(new Team(cohortId, teamName, "", "", ""));
    response.getOutputStream().println(new Gson().toJson(team));
  }
}