package net.egemsoft.mvc.security;

/**
 * @author Halit
 */
public class SimpleUser {

    private String email;
    private boolean isAdmin;

    public SimpleUser(String email, boolean admin) {
        this.email = email;
        isAdmin = admin;
    }

    public String getEmail() {
        return email;
    }

    public boolean isAdmin() {
        return isAdmin;
    }
}