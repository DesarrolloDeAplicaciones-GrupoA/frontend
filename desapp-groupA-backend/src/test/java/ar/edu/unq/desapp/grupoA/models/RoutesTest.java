package ar.edu.unq.desapp.grupoA.models;


import ar.edu.unq.desapp.grupoA.factories.RouteFactory;
import ar.edu.unq.desapp.grupoA.models.utils.PointFactory;
import org.junit.Test;

import static org.junit.Assert.assertNotNull;

public class RoutesTest {

    @Test
    public void aRouteHaveAStartAndEndPoint() {
        PointFactory factory = new PointFactory();
        Route route = new RouteFactory().fromTo(factory.create(-34.627712, -58.379718), factory.create(-34.603722, -58.382002));
        assertNotNull(route.getStart());
        assertNotNull(route.getEnd());
    }
}
