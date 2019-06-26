package com.google.codeu.servlets;

import com.google.api.Http;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TeamServlet {

    // Note by Faisal: return a specific Team or list of Teams depending on the parameters in the request.
    public void doGet(HttpServletRequest request, HttpServletResponse response);

    // Note by Faisal: create a new Team.
    public void doPost(HttpServletRequest request, HttpServletResponse response);

    // Note by Faisal: edit an existing Team. The id of the Team to edit will be a request parameter.
    public void doPut(HttpServletRequest request, HttpServletResponse response);

    // Note by Faisal: delete an existing Team. The id of the Team to be deleted will be a request parameter.
    public void doDelete(HttpServletRequest request, HttpServletResponse response);

}
