import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @author İsmail Demirbilek
 *         6/13/14
 */
public class HomeController {
    @RequestMapping("/")
    public String home(Model model) {
        model.addAttribute("q", "Naber");
        return "index";
    }
}
