package ar.edu.unq.desapp.grupoA.services;

import ar.edu.unq.desapp.grupoA.models.Score;
import ar.edu.unq.desapp.grupoA.models.Travel;
import ar.edu.unq.desapp.grupoA.models.UserModel;
import ar.edu.unq.desapp.grupoA.services.scoring.DriverScoreService;
import ar.edu.unq.desapp.grupoA.testUtis.factories.TravelTestFactory;
import ar.edu.unq.desapp.grupoA.testUtis.factories.UserModelTestFactory;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class DriverScoreServiceTest {

    private UserModel user;
    private Travel travel;
    private DriverScoreService service;

    @Before
    public void setUp() {
        this.user = new UserModelTestFactory().getUser();
        this.travel = new TravelTestFactory().getTravelTest();
        this.service = new DriverScoreService();
    }

    @Test
    public void testCreateScore() {
        Score score = service.createScore(user, travel, true);
        assertTrue(score.isGood());
        assertEquals(score.getTravel(), travel);
    }

    @Test
    public void testUserOneMoreDriverScore() {
        service.createScore(user, travel, false);
        assertEquals(user.getDriverScores().size(), 1);
    }
}
