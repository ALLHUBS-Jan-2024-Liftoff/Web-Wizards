package org.launchcode.BackEnd.controllers;

import org.launchcode.BackEnd.models.Event;
import org.launchcode.BackEnd.models.data.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "http://localhost:5173")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    // Handles requests to retrieve all events from the database
    // and responds with the events in JSON format.
//    Response entity wraps the response data and status code which makes it easier for thr frontend to unwrap and use.
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Event>> getAllEvents() {
        return ResponseEntity.ok((List<Event>) eventRepository.findAll());
    }

    // Handles requests to create a new event
    // and saves it to the database.
    @PostMapping("/create")
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        Event savedEvent = eventRepository.save(event);
        return new ResponseEntity<>(savedEvent, HttpStatus.CREATED);
    }

    // Handles requests to retrieve a single event by its ID.
    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Integer id) {
        Optional<Event> event = eventRepository.findById(id);

        if (event.isPresent()) {
            return new ResponseEntity<>(event.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Handles requests to update an existing event by its ID.
    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Integer id, @RequestBody Event eventDetails) {
        Optional<Event> eventOpt = eventRepository.findById(id);

        if (eventOpt.isPresent()) {
            Event event = eventOpt.get();
            event.setTitle(eventDetails.getTitle());
            event.setDate(eventDetails.getDate());
            event.setTime(eventDetails.getTime());
            event.setDetails(eventDetails.getDetails());
            Event updatedEvent = eventRepository.save(event);
            return new ResponseEntity<>(updatedEvent, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Handles requests to delete an event by its ID.
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Integer id) {
        if (eventRepository.existsById(id)) {
            eventRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // A simple test endpoint that returns a greeting message.
    @GetMapping("/hello")
    public String testEndpoint() {
        return "Hello, from the test endpoint!";
    }
}
