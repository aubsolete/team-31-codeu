package com.google.codeu.servlets;

import java.io.IOException;
import java.util.UUID;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.appengine.repackaged.com.google.gson.Gson;
import com.google.codeu.data.Datastore;
import com.google.codeu.data.User;

import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

/**
 * Handles fetching and saving user data.
 */
@WebServlet("/about")
public class AboutMeServlet extends HttpServlet {

  private Datastore datastore;

  @Override
  public void init() {
    datastore = new Datastore();
  }

  /**
   * Responds with the "about me" section for a particular user.
   */
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    response.setContentType("text/html");

    String user = request.getParameter("user");

    if(user == null || user.equals("")) {
      // Request is invalid, return empty response
      return;
    }

    User userData = datastore.getUser(user);

    if(userData == null) {
      return;
    }
    Gson gson = new Gson();
    String json = gson.toJson(userData);
    response.getWriter().println(json);
  }

  @Override
  public void doPut(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    UserService userService = UserServiceFactory.getUserService();
    if (!userService.isUserLoggedIn()) {
      response.sendRedirect("/index.html");
      return;
    }

    String userEmail = userService.getCurrentUser().getEmail();
    UUID id = UUID.fromString(userService.getCurrentUser().getUserId());
    String aboutMe = Jsoup.clean(request.getParameter("about-me"), Whitelist.none());
    String firstName = request.getParameter("firstName");
    String lastName = request.getParameter("lastName");
    String imgUrl = request.getParameter("imgUrl");
    String teamId = request.getParameter("teamId");
    User user = new User(id, userEmail, teamId, aboutMe, firstName, lastName, imgUrl);
    datastore.storeUser(user);
    //return JSON
    response.sendRedirect("/user-page.html?user=" + userEmail);
  }
}
