package com.google.codeu.servlets;

import com.google.codeu.data.Cohort;
import com.google.codeu.data.CohortDatastore;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import com.google.gson.Gson;

@WebServlet("/cohort")
public class CohortServlet {

    private CohortDatastore cohortDatastore;

    public void init() {
        cohortDatastore = new CohortDatastore();
    }

    // Note by Faisal: return a specific Cohort or list of Cohorts depending on the parameters in the request.
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String cohortID = request.getParameter("cohortID"); // Fetch the cohort's id.
        if (cohortID == null || cohortID.equals("")) {     // Request is empty...
            response.getWriter().println("[]");        // ...return empty array.
            return;
        }

        // Fetch the cohort tied to the id from the datastore.
        Cohort cohort = cohortDatastore.getById(cohortID);
        if(cohort == null) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        Gson gson = new Gson();
        String json = gson.toJson(cohort);
        response.getWriter().println(json);
    }

    // Note by Faisal: create a new Cohort.
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Acquire all of the data needed for a cohort.
        String cohortName = request.getParameter("cohortName");

        // Create a new Cohort with the acquired data.
        Cohort cohort = cohortDatastore.create(new Cohort(cohortName));

        // ID is now set, return it.
        response.getWriter().println(new Gson().toJson(cohort));
    }

    // Note by Faisal: edit an existing Cohort. The id of the Cohort to edit will be a request parameter.
    public void doPut(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Acquire all of the data needed for a cohort.
        String cohortID = request.getParameter("cohortID");
        String cohortName = request.getParameter("cohortName");

        // Edit an existing cohort with the acquired data.
        Cohort cohort = cohortDatastore.edit(new Cohort(cohortID, cohortName));

        // Cohort is set, now return it.
        response.getWriter().println(new Gson().toJson(cohort));
    }

}
