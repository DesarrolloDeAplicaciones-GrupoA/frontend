package ar.edu.unq.desapp.grupoA.models;

import sun.management.resources.agent_pt_BR;


public interface ApplicationRequestState {
    public boolean isPending();
    public boolean isApproved();
    public boolean isReject();
    public void approve();
    public void reject();


}
