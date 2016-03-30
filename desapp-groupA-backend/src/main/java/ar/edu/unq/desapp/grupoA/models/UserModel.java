package ar.edu.unq.desapp.grupoA.models;

import java.util.List;

/**
 * Created by Loiacono.P671 on 22/03/2016.
 */
public class UserModel {

    private String fullName;
    private String email;
    private Vehicle vehicle;
    private List<Score> driverScore;
    private List<Score> accompanistScore;
    private int points;
    private List<Exchange> exchanges;


    public UserModel(String fullName, String email) {
        this.fullName = fullName;
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }
}