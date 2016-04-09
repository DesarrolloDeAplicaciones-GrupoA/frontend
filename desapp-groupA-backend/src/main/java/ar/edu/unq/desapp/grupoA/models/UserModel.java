package ar.edu.unq.desapp.grupoA.models;

import java.util.ArrayList;
import java.util.List;


public class UserModel {

    private String fullName;
    private String email;
    private Vehicle vehicle;
    private List<Score> driverScores;
    private List<Score> accompanistScores;
    private int points;
    private List<Exchange> exchanges;
    private List<Travel> travels;
    private List<ApplicationRequest> requestedApplications;


    public UserModel(String fullName, String email) {
        this.fullName = fullName;
        this.email = email;
        this.accompanistScores = new ArrayList<>();
        this.driverScores = new ArrayList<>();
        this.exchanges = new ArrayList<>();
        this.travels = new ArrayList<>();
        this.points = 0;
        this.requestedApplications = new ArrayList<>();
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public List<Score> getDriverScores() {
        return driverScores;
    }

    public List<Score> getAccompanistScores() {
        return accompanistScores;
    }

    public int getPoints() {
        return points;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void addTravel(Travel travel) {
        this.travels.add(travel);
    }

    public List<Travel> getTravels() {
        return travels;
    }

    public List<Exchange> getExchanges() {
        return exchanges;
    }

    public void addRequestedApplications(ApplicationRequest request) {
        this.requestedApplications.add(request);
    }

    public void addDriverScore(Score score) {
        this.driverScores.add(score);
    }
}