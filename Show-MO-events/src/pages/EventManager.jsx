// ------------------- Import Statements -------------------
import React, { useState, useEffect } from 'react';

// Importing React and two hooks:
// - useState: Manages local state in the component.
// - useEffect: Performs side effects (e.g., data fetching) in the component.

// ------------------- Component Definition -------------------
const EventManager = () => {
    // ------------------- State Definitions -------------------
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({ id: '', title: '', date: '', time: '', details: '' });
    const [formMode, setFormMode] = useState('create');
    const [error, setError] = useState(null);

    // useState hooks are used here to manage different pieces of state:
    // - events: Stores the list of events fetched from the server.
    // - formData: Holds the data for the form inputs (title, date, time, details).
    // - formMode: Tracks whether the form is in "create" or "update" mode.
    // - error: Stores any error messages.

    // ------------------- Fetch Events on Component Mount -------------------
    useEffect(() => {
        fetchEventsList();
    }, []);

    // useEffect is used to fetch the events when the component first mounts.
    // The empty dependency array ([]) ensures this runs only once.

    // ------------------- Fetch Events Function -------------------
    const fetchEventsList = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/events', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            if (response.ok) {
                const data = await response.json();
                setEvents(data);
            } else {
                setError('Failed to fetch events');
            }
        } catch (error) {
            setError('An error occurred while fetching events');
        }
    };

    // This function fetches the list of events from the server.
    // - If the fetch is successful, the events are stored in the `events` state.
    // - If there's an error, it is stored in the `error` state.

    // ------------------- Handle Input Change -------------------
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // This function updates the form data state as the user types in the form.
    // - `e.target.name` gives the name of the form field (title, date, etc.).
    // - `e.target.value` gives the current value of that form field.
    // The formData state is then updated with the new value.

    // ------------------- Handle Form Submission -------------------
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const url = formMode === 'create' 
            ? 'http://localhost:8080/api/events/create' 
            : `http://localhost:8080/api/events/${formData.id}`;
        const method = formMode === 'create' ? 'POST' : 'PUT';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include',
            });

            if (response.ok) {
                alert(`Event ${formMode === 'create' ? 'created' : 'updated'} successfully!`);
                setFormData({ id: '', title: '', date: '', time: '', details: '' });
                setFormMode('create');
                fetchEventsList();
            } else {
                setError(`Failed to ${formMode === 'create' ? 'create' : 'update'} event`);
            }
        } catch (error) {
            setError(`An error occurred: ${error.message}`);
        }
    };

    // This function handles the form submission:
    // - It prevents the default form submission behavior.
    // - Depending on the formMode, it either sends a POST request (for creating a new event) or a PUT request (for updating an existing event).
    // - After a successful request, it resets the form and refetches the events.
    // - If there's an error, it updates the error state.

    // ------------------- Handle Edit Button Click -------------------
    const handleEditClick = (event) => {
        setFormData(event);
        setFormMode('update');
    };

    // This function is called when the "Edit" button is clicked for a specific event:
    // - It sets the form data to the event's details.
    // - It changes the formMode to "update", so the form will allow updating the event.

    // ------------------- Handle Delete Button Click -------------------
    const handleDeleteClick = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/events/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (response.ok) {
                alert('Event deleted successfully!');
                fetchEventsList();
            } else {
                setError('Failed to delete event');
            }
        } catch (error) {
            setError('An error occurred: ' + error.message);
        }
    };

    // This function handles deleting an event:
    // - It sends a DELETE request to the server with the event ID.
    // - If successful, it refetches the events list to reflect the changes.

    // ------------------- Format Time to 12-Hour Format -------------------
    const formatTimeTo12Hour = (time24) => {
        const [hours, minutes] = time24.split(':');
        const hours12 = ((hours % 12) || 12).toString();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        return `${hours12.padStart(2, '0')}:${minutes} ${ampm}`;
    };

    // This helper function converts a 24-hour time string to a 12-hour format (e.g., "14:30" becomes "02:30 PM").

    // ------------------- Format Date -------------------
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // This helper function formats a date string into a more readable format (e.g., "2024-08-22" becomes "Aug 22, 2024").

    // ------------------- JSX Layout -------------------
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            {/* Event List Section */}
            <div style={{ width: '60%', paddingRight: '10px' }}>
                <h2>Event List</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <ul>
                    {events.map((event) => (
                        <li key={event.id} style={{ marginBottom: '10px' }}>
                            <strong>{event.title}</strong> - {formatDate(event.date)} {formatTimeTo12Hour(event.time)}
                            <p>{event.details}</p>
                            <button onClick={() => handleEditClick(event)} style={{ marginLeft: '10px' }}>Edit</button>
                            <button onClick={() => handleDeleteClick(event.id)} style={{ marginLeft: '10px' }}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Form Section */}
            <div style={{ width: '35%' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{formMode === 'create' ? 'Create Event' : 'Update Event'}</h2>
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Event Title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', width: '100%' }}
                    />
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', width: '100%' }}
                    />
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', width: '100%' }}
                    />
                    <textarea
                        name="details"
                        placeholder="Event Details"
                        value={formData.details}
                        onChange={handleInputChange}
                        required
                        style={{ marginBottom: '10px', padding: '10px', fontSize: '16px', width: '100%' }}
                    />
                    <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
                        {formMode === 'create' ? 'Create Event' : 'Update Event'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EventManager;

