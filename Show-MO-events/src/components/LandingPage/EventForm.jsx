import React, { useState } from 'react';


const EventForm = ({ errorMsg, event, categories, handleSubmit }) => {
    const [formState, setFormState] = useState(event);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <div className="container">
            <header>
                {/* Replace with header component */}
            </header>

            {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

            <form onSubmit={(e) => handleSubmit(e, formState)}>
                <div className="form-group">
                    <label>
                        Name
                        <input
                            name="name"
                            value={formState.name || ''}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </label>
                    {/* Render error message for name if any */}
                </div>
                <div className="form-group">
                    <label>
                        Description
                        <input
                            name="eventDetails.description"
                            value={formState.eventDetails?.description || ''}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </label>
                    {/* Render error message for description if any */}
                </div>
                <div className="form-group">
                    <label>
                        Contact Email
                        <input
                            name="eventDetails.contactEmail"
                            value={formState.eventDetails?.contactEmail || ''}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </label>
                    {/* Render error message for contactEmail if any */}
                </div>
                <div className="form-group">
                    <label>
                        Category
                        <select
                            name="eventCategory"
                            value={formState.eventCategory || ''}
                            onChange={handleChange}
                            className="form-control"
                        >
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    {/* Render error message for eventCategory if any */}
                </div>
                <div className="form-group">
                    <input type="submit" value="Create" className="btn btn-success" />
                </div>
            </form>
        </div>
    );
};

export default EventForm;
