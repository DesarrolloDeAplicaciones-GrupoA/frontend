package ar.edu.unq.desapp.grupoA.services.scoring;

import ar.edu.unq.desapp.grupoA.models.Score;
import ar.edu.unq.desapp.grupoA.models.Vehicle;
import ar.edu.unq.desapp.grupoA.services.scoring.BaseScoreServiceTest;
import ar.edu.unq.desapp.grupoA.services.scoring.VehicleScoreService;
import ar.edu.unq.desapp.grupoA.testUtis.factories.VehicleTestFactory;

import java.util.List;

public class VehicleScoreServiceTest extends BaseScoreServiceTest<Vehicle> {

    @Override
    protected void createScoringModel() {
        this.scoringModel = new VehicleTestFactory().getVehicle();
    }

    @Override
    protected void createService() {
        this.service = new VehicleScoreService();
    }

    @Override
    protected List<Score> getScoringModelScores() {
        return this.scoringModel.getScores();
    }
}
