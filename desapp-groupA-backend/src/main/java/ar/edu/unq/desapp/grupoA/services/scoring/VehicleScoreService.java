package ar.edu.unq.desapp.grupoA.services.scoring;


import ar.edu.unq.desapp.grupoA.models.Score;
import ar.edu.unq.desapp.grupoA.models.Vehicle;

public class VehicleScoreService extends BaseScoreService<Vehicle> {

    @Override
    protected void addScore(Vehicle vehicle, Score score) {
        vehicle.addVehicleScore(score);
    }
}
