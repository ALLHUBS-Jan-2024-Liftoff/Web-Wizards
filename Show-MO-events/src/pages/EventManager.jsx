import React, { useState, useEffect } from 'react';

const EventManager = () => {
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({ id: '', title: '', date: '', time: '', details: '' });
    const [formMode, setFormMode] = useState('create');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchEventsList();
    }, []);

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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

    const handleEditClick = (event) => {
        setFormData(event);
        setFormMode('update');
    };

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

    const formatTimeTo12Hour = (time24) => {
        const [hours, minutes] = time24.split(':');
        const hours12 = ((hours % 12) || 12).toString();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        return `${hours12.padStart(2, '0')}:${minutes} ${ampm}`;
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
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
