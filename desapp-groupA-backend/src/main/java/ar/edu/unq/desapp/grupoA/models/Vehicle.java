package ar.edu.unq.desapp.grupoA.models;

import ar.edu.unq.desapp.grupoA.services.scoring.ScoringModel;

import java.util.ArrayList;
import java.util.List;


public class Vehicle implements ScoringModel {

    private String brand;
    private int capacity;
    private List<Score> scores;
    private UserModel driver;

    public Vehicle(String brand, int capacity, UserModel driver) {
        this.brand = brand;
        this.capacity = capacity;
        this.scores = new ArrayList<>();
        this.driver = driver;
    }

    public String getBrand() {
        return brand;
    }

    public int getCapacity() {
        return capacity;
    }

    public List<Score> getScores() {
        return scores;
    }

    public int getDriverPoints() {
        return this.driver.getPoints();
    }

    public void addVehicleScore(Score score) {
        this.scores.add(score);
    }

    public UserModel getDriver() {
        return driver;
    }
}
