package ar.edu.unq.desapp.grupoA.services.scoring;

import ar.edu.unq.desapp.grupoA.models.Score;
import ar.edu.unq.desapp.grupoA.models.UserModel;

public class DriverScoreService extends BaseScoreService<UserModel> {

    @Override
    protected UserModel getUserModel(UserModel driver) {
        return driver;
    }

    @Override
    protected void addScore(UserModel drive, Score score) {
        drive.addDriverScore(score);
    }
}
