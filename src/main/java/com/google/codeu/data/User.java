package com.google.codeu.data;

public class User {

  private String email;
  private String aboutMe;
  private String password;
  private String firstName;
  private String lastName;
  private String imgUrl;

  public User(String email, String aboutMe, String password, String firstName, String lastName, String imgUrl) {
    this.email = email;
    this.aboutMe = aboutMe;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imgUrl = imgUrl;
  }

  public String getEmail(){
    return email;
  }

  public String getAboutMe() {
    return aboutMe;
  }
  
  public String getPassword() {
	    return password;
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
}