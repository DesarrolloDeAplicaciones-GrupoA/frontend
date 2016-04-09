package ar.edu.unq.desapp.grupoA.models;

public class Score {

    private Travel travel;
    private boolean isGood;

    public Score(Travel travel, boolean isGood) {
        this.travel = travel;
        this.isGood = isGood;
    }

    public boolean isGood() {
        return isGood;
    }

    public Travel getTravel() {
        return travel;
    }
}
