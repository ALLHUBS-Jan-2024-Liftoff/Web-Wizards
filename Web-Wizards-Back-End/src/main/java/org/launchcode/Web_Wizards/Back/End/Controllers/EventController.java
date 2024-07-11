import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class EventController
{
    //Insert controller code here...
    @GetMapping
    public String index()
    {
        return "index";
    }
}