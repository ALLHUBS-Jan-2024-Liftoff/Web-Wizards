//SearchProfile.jsx
import React, { useState } from 'react';
import './SearchProfile.css';

const posts = [
{ id: 1, title: 'First Post', content: 'This is the first post content' },
{ id: 2, title: 'Second Post', content: 'This is the second post content' },
{ id: 3, title: 'Third Post', content: 'This is the third post content' },
];

const SearchProfile = () => {
	const [query, setQuery] = useState('');
	const [events, setEvents] = useState([]);
	const [error, setError] = useState(null);
	
	const handleSearch = async () => {
	try
	{
			const response = await fetch(`http://localhost:8080/search/find-events?location=${query}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
		});
		
		if(!response.ok)
		{
			throw new Error('Network response was not ok...');
		}
		const data = await response.json();
		
		setEvents(data._embedded.events);
		
	}
	catch(error)
	{
		setError(error.message);
	}
	};
	
	return (
	    <div>
		<h1>Search Nearby Events...</h1>
		<input
		type="text"
		value={query}
		onChange={(e) => setQuery(e.target.value)}
		placeholder="Enter location for events..."
		/>
		<button onClick = {handleSearch}>Search Events</button>
		
		{error && <p>Error: {error}</p>}
		
		<h1>Events</h1>
		<table>
		<thead>
		    <tr>
			    <th>Event Name</th>
				<th>Location</th>
				<th>Date</th>
				<th>Time</th>
				<th>Link</th>
			</tr>
		</thead>
		<tbody>
		    {events.map(event => (
			    <tr key = {event.id}>
				<td>{event.name}</td>
				<td>{event._embedded.venues[0].city.name}</td>
				<td>{new Date(event.dates.start.localDate).toLocaleDateString()}</td>
				<td>{new Date(event.dates.start.dateTime).toLocaleTimeString()}</td>
				<td><a href = {event.url} target="_blank" rel="noopener noreferrer">View Event</a></td>
				</tr>
			))}
			</tbody>
		</table>
		</div>
	);
};

export default SearchProfile;