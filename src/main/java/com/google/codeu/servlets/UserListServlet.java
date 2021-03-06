package com.google.codeu.servlets;

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
@WebServlet("/user-list")
public class UserListServlet extends HttpServlet {

  private UserDatastore datastore;

  @Override
  public void init() {
    datastore = new UserDatastore();
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException {
    response.setContentType("application/json");
    Set<String> users = datastore.getUsers();
    Gson gson = new Gson();
    String json = gson.toJson(users);
    response.getOutputStream().println(json);
  }
}