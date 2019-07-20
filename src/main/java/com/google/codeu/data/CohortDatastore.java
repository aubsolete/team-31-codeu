package com.google.codeu.data;

import com.google.appengine.api.datastore.*;

import java.util.ArrayList;
import java.util.List;
import java.util.HashSet;

public class CohortDatastore {

    private DatastoreService cohortDatastore;

    public CohortDatastore() {
        cohortDatastore = DatastoreServiceFactory.getDatastoreService();
    }

    // Create runs as though all the cohort information has been set already.
    public Cohort create(Cohort cohort) {
        Entity cohortEntity = getEntity(cohort);
        cohortDatastore.put(cohortEntity);
        return cohort;
    }

    public Cohort getById(String id) {
        Entity cohortEntity;
        try {
            cohortEntity = cohortDatastore.get(KeyFactory.createKey("Cohort", id));
        } catch (EntityNotFoundException e) {
            return null;
        }
        return getCohort(cohortEntity);
    }

    public Cohort edit(Cohort cohort) {
        Cohort old = getById(cohort.getCohortID().toString());
        if (old == null) {
            // Throw some error on front end.
            return null;
        }
        // Copy over any of the new fields that users can edit.
        old.setCohortName(cohort.getCohortName());
        cohortDatastore.put(getEntity(old));
        return old;
    }

    public Entity getEntity(Cohort cohort) {
        Entity cohortEntity = new Entity("Cohort", cohort.getCohortID().toString());
        cohortEntity.setProperty("cohortName", cohort.getCohortName());
        return cohortEntity;
    }

    public Cohort getCohort(Entity cohortEntity) {
        String cohortID = cohortEntity.getKey().getName();
        String cohortName = (String) cohortEntity.getProperty("cohortName");
        return new Cohort(cohortID, cohortName);
    }

    public List<Cohort> getCohorts() {
        List<Cohort> cohorts = new ArrayList<>();
        Query query = new Query("Cohort");
        PreparedQuery results = cohortDatastore.prepare(query);
        for(Entity entity : results.asIterable()) {
            cohorts.add(getCohort(entity));
        }
        return cohorts;
    }
  
}
