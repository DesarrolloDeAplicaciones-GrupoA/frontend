package ar.edu.unq.desapp.grupoA.services;

import ar.edu.unq.desapp.grupoA.models.UserModel;

/**
 * Created by DamianRafael on 29/3/2016.
 */
public class Login {

    public UserModel signUp(String fullName, String email) {
        return new UserModel(fullName, email);
    }
}
