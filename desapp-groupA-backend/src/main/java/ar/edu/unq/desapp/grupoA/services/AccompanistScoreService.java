package ar.edu.unq.desapp.grupoA.services;


import ar.edu.unq.desapp.grupoA.models.Score;
import ar.edu.unq.desapp.grupoA.models.Travel;
import ar.edu.unq.desapp.grupoA.models.UserModel;

public class AccompanistScoreService {

    public Score createScore(UserModel driver, Travel travel, boolean isGood) {
        Score score = new Score(travel, isGood);
        driver.addAccompanistScore(score);
        return score;
    }

}
