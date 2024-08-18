package org.launchcode.BackEnd.controllers;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RequestMapping("/search")
@RestController
public class SearchController
{
    private static final String TICKETMASTER_API_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
    private static final String TICKETMASTER_API_KEY = "";

    @GetMapping("/find-events")
    public ResponseEntity<String> getNearbyEvents(@RequestParam String location)
    {
        try
        {
            //Make the HTTP request using RestTemplate
            RestTemplate restTemplate = new RestTemplate();

            String url = TICKETMASTER_API_URL + "?apikey=" + TICKETMASTER_API_KEY + "&city=" + location;

            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

            return response;
        }
        catch(Exception e)
        {
            e.printStackTrace();
            return new ResponseEntity<>("An error occurred while fetching nearby events: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
