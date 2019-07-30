package com.google.codeu.servlets;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.codeu.data.User;
import com.google.codeu.data.UserDatastore;

import java.io.IOException;

import javax.servlet.ServletRequest;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/create-user")
public class CreateUserServlet extends HttpServlet {
    private UserDatastore userDatastore;

    public void init() {
        userDatastore = new UserDatastore();
    }

   @Override
   public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Acquire all of the data needed for a team.
        String teamId = request.getParameter("teamId");
        String email = request.getParameter("email");
        
       // You can add a constructor that only requires the email and teamId.
        userDatastore.storeUser(new User(email, teamId));
    }
}
