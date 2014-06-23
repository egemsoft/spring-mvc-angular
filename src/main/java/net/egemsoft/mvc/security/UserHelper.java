package net.egemsoft.mvc.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;

/**
 * @author Halit
 */
public class UserHelper {

    public static String getUserIdOfLoggedInUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof SimpleUser) {
            SimpleUser user = (SimpleUser) principal;
            return user.getEmail();
        }
        else if (principal instanceof User) {
            return ((User) principal).getUsername();
        } else {
            throw new RuntimeException("Do not know how to handle {} " + principal.getClass());
        }
    }
}