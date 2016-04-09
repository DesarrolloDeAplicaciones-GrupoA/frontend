package ar.edu.unq.desapp.grupoA.services;


import ar.edu.unq.desapp.grupoA.models.ApplicationRequest;
import ar.edu.unq.desapp.grupoA.models.Travel;
import ar.edu.unq.desapp.grupoA.models.UserModel;
import ar.edu.unq.desapp.grupoA.models.utils.Point;
import ar.edu.unq.desapp.grupoA.testUtis.factories.TravelTestFactory;
import ar.edu.unq.desapp.grupoA.testUtis.factories.UserModelTestFactory;
import junit.framework.Assert;
import org.joda.time.DateTime;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;

public class ApplicationRequestServiceTest {

    public UserModel requester;
    public Travel travel;
    public ApplicationRequestService service;

    @Before
    public void setUp() {
        this.requester = new UserModelTestFactory().getUser();
        this.travel = new TravelTestFactory().getTravelTest();
        this.service = new ApplicationRequestService();

    }

    @Test
    public void testCreateRequestCorrectly() {
        ApplicationRequest request;
        DateTime datetime = DateTime.now();
        Point upPoint = mock(Point.class);
        Point downPoint = mock(Point.class);
        request = this.service.createApplicationRequest(requester, travel, datetime, upPoint, downPoint);

        assertEquals(request.getRequester(), requester);
        assertEquals(request.getTravel(),travel);

    }


}
