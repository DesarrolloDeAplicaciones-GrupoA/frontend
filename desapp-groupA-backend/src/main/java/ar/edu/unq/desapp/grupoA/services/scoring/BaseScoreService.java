package ar.edu.unq.desapp.grupoA.services.scoring;


import ar.edu.unq.desapp.grupoA.models.Score;
import ar.edu.unq.desapp.grupoA.models.Travel;

public abstract class BaseScoreService<T extends ScoringModel> {

    public Score createScore(T scoring, Travel travel, boolean isGood) {
        Score score = this.getScore(travel, isGood);
        this.addScore(scoring, score);
        return score;
    }

    protected abstract void addScore(T scoringModel, Score score);

    protected Score getScore(Travel travel, boolean isGood) {
        return new Score(travel, isGood);
    }

}
