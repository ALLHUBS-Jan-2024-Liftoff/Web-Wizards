package org.launchcode.BackEnd.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class SearchController
{
    private final String EVENTBRITE_API_URL = "https://www.eventbriteapi.com/v3/";
    private final String API_KEY = "YOUR_API_KEY";

    @GetMapping("/search")
    public String getNearbyEvents(@RequestParam String location)
    {
        RestTemplate restTemplate = new RestTemplate();

        String url = EVENTBRITE_API_URL +
                "events/search/?location.address=" +
                location + "&token=" + API_KEY;

        //Parse the JSON response to Java objs...
        //Return list of events...
        return restTemplate.getForObject(url, String.class);
    }
}
