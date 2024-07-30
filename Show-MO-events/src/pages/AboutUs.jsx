import React from 'react';
import logo from '../asserts/SPOILER_WebWizardTraining.png'; // Adjust the path to your logo image

const AboutUs = () => {
    return (
        <div style={styles.container}>
            <img src={logo} alt="Web Wizards Logo" style={styles.logo} />
            <h2 style={styles.heading}>About Us</h2>
            <p style={styles.paragraph}>
                We are Web Wizards, the creators of the ShowMOEvents application. As dedicated developers, our mission is to provide a user-friendly platform for people to explore events and activities in and around Missouri. With ShowMOEvents, users can share their experiences, provide feedback, and post updates using our interactive features. Additionally, they can create and promote events to invite and engage with more people. Our aim is to support local vendors and small businesses, helping them gain visibility and reach within the community.
            </p>
            <h3 style={styles.subheading}>Meet the Team</h3>
            <div style={styles.teamContainer}>
                <div style={styles.teamMember}>👤 Zachary Cain</div>
                <div style={styles.teamMember}>👤 Kyle M</div>
                <div style={styles.teamMember}>👤 Aishwarya Senthilkumar</div>
            </div>
        </div>
    );
};


const styles = {
    container: {
        textAlign: 'center',
        margin: '0 auto',
        padding: '20px',
        maxWidth: '800px',
    },
    logo: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        marginBottom: '20px',
    },
    heading: {
        marginBottom: '20px',
    },
    subheading: {
        marginTop: '30px',
        marginBottom: '10px',
        color: 'dark brown',
    },
    paragraph: {
        fontSize: '1.2em',
        lineHeight: '1.6',
    },
    teamContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    teamMember: {
        fontSize: '1.1em',
        lineHeight: '1.5',
        marginBottom: '10px',
    },
};

export default AboutUs;