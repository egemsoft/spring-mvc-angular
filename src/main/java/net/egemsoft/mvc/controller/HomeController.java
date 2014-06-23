package net.egemsoft.mvc.controller;

import net.egemsoft.mvc.security.UserHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author İsmail Demirbilek
 *         6/13/14
 */

@Controller
@RequestMapping("/")
public class HomeController {

    @RequestMapping(method = RequestMethod.GET)
    public String home(Model model) {
        UserHelper userHelper = new UserHelper();
        model.addAttribute("userEmail", userHelper.getUserIdOfLoggedInUser());
        return "index";
    }
}
