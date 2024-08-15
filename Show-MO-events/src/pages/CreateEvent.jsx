// src/pages/CreateEvent.js
const CreateEvent = () => {
  return (
    <div>
      <h2>Create Event</h2>
      <form>
        <div>
          <label htmlFor="eventName">Event Name</label>
          <input type="text" id="eventName" name="eventName" required />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateEvent;
