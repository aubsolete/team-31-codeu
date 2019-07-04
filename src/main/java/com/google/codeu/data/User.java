package com.google.codeu.data;

import java.util.*;
import java.util.UUID;

public class User {

  private UUID id;
  private String email;
  private String aboutMe;
  private String password;
  private String firstName;
  private String lastName;
  private String imgUrl;
  
  public User(String email) {
	    this(UUID.randomUUID(), email, null, null, null, null);
	  }
  
  public User(UUID id, String email, String aboutMe, String firstName, String lastName, String imgUrl) {
	this.id = id;
    this.email = email;
    this.aboutMe = aboutMe;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imgUrl = imgUrl;
  }

  public User(String email2, String aboutMe2) {
	this.email = email2;
	this.aboutMe = aboutMe2;
}

public UUID getId(){
	    return id;
  }
  
  public String getEmail(){
    return email;
  }

  public String getAboutMe() {
    return aboutMe;
  }
  
  public String getFirstName() {
	    return firstName;
  }
  
  public String getLastName() {
	    return lastName;
  }
  
  public String getImg() {
	    return imgUrl;
}
  
  public void setAboutMe(String aboutMe) {
	  this.aboutMe = aboutMe;
  }
  
  public void setFirstName(String firstName) {
	  this.firstName = firstName;
  }
  
  public void setLastName(String lastName) {
	  this.lastName = lastName;
  }
  
  public void setImg(String imgUrl) {
	  this.imgUrl = imgUrl;
  }
}