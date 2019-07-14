package com.google.codeu.servlets;

import com.google.codeu.data.CohortDatastore;
import com.google.gson.Gson;
import java.io.IOException;

import java.util.Set;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * Fetches all the cohorts.
 */
@WebServlet("/cohort-list")
public class CohortListServlet extends HttpServlet {

    private CohortDatastore cohortDatastore;

    @Override
    public void init() {
        cohortDatastore = new CohortDatastore();
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        Set<String> cohorts = cohortDatastore.getCohorts();
        Gson gson = new Gson();
        String json = gson.toJson(cohorts);
        response.getOutputStream().println(json);
    }
}
