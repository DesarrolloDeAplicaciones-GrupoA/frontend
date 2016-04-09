package ar.edu.unq.desapp.grupoA.models;

import ar.edu.unq.desapp.grupoA.models.utils.Point;
import org.joda.time.DateTime;

public class ApplicationRequest {


    private Point upPoint;
    private DateTime dateTime;
    private UserModel requester;
    private Travel travel;
    private Point downPoint;

    public ApplicationRequest(UserModel requester, Travel travel, DateTime dateTime, Point upPoint, Point downpoint) {
        this.requester = requester;
        this.travel = travel;
        this.dateTime = dateTime;
        this.upPoint = upPoint;
        this.downPoint = downpoint;
    }


    public UserModel getRequester() {
        return requester;
    }

    public Travel getTravel() {
        return travel;
    }
}
