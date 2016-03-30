package ar.edu.unq.desapp.grupoA.services;

import ar.edu.unq.desapp.grupoA.models.UserModel;
import org.junit.Assert;
import org.junit.Test;

/**
 * Created by DamianRafael on 29/3/2016.
 */
public class LoginTest {

    @Test
    public void loginUserWithoutCar() {
        Login login = new Login();
        UserModel user = login.signUp("Foo Bar", "foobar@sample.com");
        Assert.assertEquals(user.getFullName(), "Foo Bar");
        Assert.assertEquals(user.getEmail(), "foobar@sample.com");
    }

}
