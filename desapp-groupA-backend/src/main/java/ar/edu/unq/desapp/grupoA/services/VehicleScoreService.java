package ar.edu.unq.desapp.grupoA.services;


import ar.edu.unq.desapp.grupoA.models.Score;
import ar.edu.unq.desapp.grupoA.models.Travel;
import ar.edu.unq.desapp.grupoA.models.UserModel;
import ar.edu.unq.desapp.grupoA.models.Vehicle;

public class VehicleScoreService {

    public Score createScore(Vehicle vehicle, Travel travel, boolean isGood) {
        Score score = new Score(travel, isGood);
        vehicle.addVehicleScore(score);
        return score;
    }

}
