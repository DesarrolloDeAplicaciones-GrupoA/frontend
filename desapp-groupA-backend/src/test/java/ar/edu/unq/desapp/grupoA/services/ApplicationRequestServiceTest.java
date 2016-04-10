package ar.edu.unq.desapp.grupoA.services;


import ar.edu.unq.desapp.grupoA.models.ApplicationRequest;
import ar.edu.unq.desapp.grupoA.models.Travel;
import ar.edu.unq.desapp.grupoA.models.UserModel;
import ar.edu.unq.desapp.grupoA.models.utils.Point;
import ar.edu.unq.desapp.grupoA.testUtis.factories.TravelTestFactory;
import ar.edu.unq.desapp.grupoA.testUtis.factories.UserModelTestFactory;
import org.joda.time.DateTime;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;

public class ApplicationRequestServiceTest {

    public UserModel requester;
    public Travel travel;
    public ApplicationRequestService service;
    public ApplicationRequest request;

    @Before
    public void setUp() {
        this.requester = new UserModelTestFactory().getUser();
        this.travel = new TravelTestFactory().getTravelTest();
        this.service = new ApplicationRequestService();
        DateTime datetime = DateTime.now();
        Point upPoint = mock(Point.class);
        Point downPoint = mock(Point.class);
        request = this.service.createApplicationRequest(requester, travel, datetime, upPoint, downPoint);
    }

    @Test
    public void testCreateRequestCorrectly() {
        assertEquals(request.getRequester(), requester);
        assertEquals(request.getTravel(), travel);
    }

    @Test
    public void testApplicationRequestIsPendingByDefaul() {
        assertTrue(request.isPending());
    }

    @Test
    public void testApplicationRequestIsApproved() {
        ApplicationRequest aprovedRequest = this.service.approveApplicationRequest(request);
        assertTrue(aprovedRequest.isApproved());
    }


}
