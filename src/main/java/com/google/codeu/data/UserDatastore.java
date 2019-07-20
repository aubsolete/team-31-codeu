/*
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.google.codeu.data;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.FilterOperator;
import com.google.appengine.api.datastore.Query.SortDirection;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

/** Provides access to the data stored in Datastore. */
public class UserDatastore {

  private DatastoreService userdatastore;

  public UserDatastore() {
    userdatastore = DatastoreServiceFactory.getDatastoreService();
  }
  
  /** Stores the User in Datastore. */
  public void storeUser(User user) {
   Entity userEntity = new Entity("User", user.getEmail());
   userEntity.setProperty("id", user.getId());
   userEntity.setProperty("aboutMe", user.getAboutMe());
   userEntity.setProperty("firstName", user.getFirstName());
   userEntity.setProperty("lastName", user.getLastName());
   userEntity.setProperty("imgUrl", user.getImg());
   userEntity.setProperty("teamId", user.getTeamId());
   userdatastore.put(userEntity);
  }
  
  public User edit(User user) {
	  User old = getUser(user.getId().toString());
	  if (old == null) {
	      // Throw some error on front end.
	      return null;
	  }
	  // Copy over any of the new fields that users can edit.
	  old.setAboutMe(user.getAboutMe());
	  old.setFirstName(user.getFirstName());
	  old.setLastName(user.getLastName());
	  old.setImg(user.getImg());
	  storeUser(old);
	  return old;
  }

  /**
   * Returns the User owned by the email address, or
   * null if no matching User was found.
   */
  public User getUser(String id) {
   Query query = new Query("User")
		     .setFilter(new Query.FilterPredicate("id", FilterOperator.EQUAL, id));
		   PreparedQuery results = userdatastore.prepare(query);
		   Entity userEntity = results.asSingleEntity();
		   if(userEntity == null) {
		    return null;
		   }
   String email = userEntity.getKey().getName();
   String aboutMe = (String) userEntity.getProperty("aboutMe");
   String imgUrl = (String) userEntity.getProperty("imgUrl");
   String firstName = (String) userEntity.getProperty("firstName");
   String lastName = (String) userEntity.getProperty("lastName");
   String teamId = (String) userEntity.getProperty("teamId");
   
   User user = new User(UUID.fromString(id), email, teamId, aboutMe, firstName, lastName, imgUrl);
   
   return user;
  }
  
  public Set<String> getUsers(){
	  Set<String> users = new HashSet<>();
	  Query query = new Query("User");
	  PreparedQuery results = userdatastore.prepare(query);
	  for(Entity entity : results.asIterable()) {
	    users.add((String) entity.getProperty("email"));
	  }
	  return users;
  }
  
  public List<User> getUsersForTeam(String teamId) {
	  List<User> users = new ArrayList<User>();
	  Query query = new Query("User")
	  .setFilter(new Query.FilterPredicate("teamId", FilterOperator.EQUAL, teamId));
	  PreparedQuery results = userdatastore.prepare(query);
	   List<Entity> userEntities = results.asList(FetchOptions.Builder.withLimit(4));
	   if (userEntities == null) {
	    return null;
	   }
	   for (Entity userEntity : userEntities) 
		   users.add(getUser((String) userEntity.getProperty("id")));
	   return users;
  }
}
