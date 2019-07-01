package com.google.codeu.data;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.SortDirection;
import java.util.UUID;
import com.google.codeu.data.Team;

public class TeamDatastore {

    public Team create(Team team) {}

    public Team getById(String teamID) {}

    public Team edit(Team team) {}

}
