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
		
		<ul>
		{events.map((event) => (
		<li key = {event.id}>
			{event.name} - {event.dates.start.LocalDate}
		</li>
		))}
		</ul>
		</div>
	);
};

export default SearchProfile;