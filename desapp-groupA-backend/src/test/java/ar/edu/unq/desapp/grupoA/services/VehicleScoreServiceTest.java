package ar.edu.unq.desapp.grupoA.services;

import ar.edu.unq.desapp.grupoA.models.Score;
import ar.edu.unq.desapp.grupoA.models.Travel;
import ar.edu.unq.desapp.grupoA.models.UserModel;
import ar.edu.unq.desapp.grupoA.models.Vehicle;
import ar.edu.unq.desapp.grupoA.testUtis.factories.TravelTestFactory;
import ar.edu.unq.desapp.grupoA.testUtis.factories.UserModelTestFactory;
import ar.edu.unq.desapp.grupoA.testUtis.factories.VehicleTestFactory;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class VehicleScoreServiceTest {

    private Vehicle vehicle;
    private Travel travel;
    private VehicleScoreService service;

    @Before
    public void setUp() {
        this.vehicle = new VehicleTestFactory().getVehicle();
        this.travel = new TravelTestFactory().getTravelTest();
        this.service = new VehicleScoreService();
    }

    @Test
    public void testCreateScore() {
        Score score = service.createScore(vehicle, travel, true);
        assertTrue(score.isGood());
        assertEquals(score.getTravel(), travel);
    }

    @Test
    public void testUserOneMoreDriverScore() {
        service.createScore(vehicle, travel, false);
        assertEquals(vehicle.getScores().size(), 1);
    }
}
