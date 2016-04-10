package ar.edu.unq.desapp.grupoA.models;

public class RejectedApplication implements ApplicationRequestState {
    @Override
    public boolean isPending() {
        return false;
    }

    @Override
    public boolean isApproved() {
        return false;
    }

    @Override
    public boolean isReject() {
        return true;
    }

    @Override
    public void approve() {

    }

    @Override
    public void reject() {

    }
}
