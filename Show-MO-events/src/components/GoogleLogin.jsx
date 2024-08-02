

import React, { useEffect } from 'react';

const GoogleLogin = () => {
  const YOUR_CLIENT_ID = '562269835682-vjv4akf84462tffrat30qqniqedoel02.apps.googleusercontent.com';
  const YOUR_REDIRECT_URI = 'http://localhost:5173'; // Ensure this matches your configuration

  // Function to generate a random state value
  const generateCryptoRandomState = () => {
    const randomValues = new Uint32Array(2);
    window.crypto.getRandomValues(randomValues);

    // Encode as UTF-8
    const utf8Encoder = new TextEncoder();
    const utf8Array = utf8Encoder.encode(
      String.fromCharCode.apply(null, randomValues)
    );

    // Base64 encode the UTF-8 data
    return btoa(String.fromCharCode.apply(null, utf8Array))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  };

  // Function to initiate OAuth2 sign-in
  const oauth2SignIn = () => {
    const state = generateCryptoRandomState();
    localStorage.setItem('state', state);

    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    const params = new URLSearchParams({
      client_id: YOUR_CLIENT_ID,
      redirect_uri: YOUR_REDIRECT_URI,
      scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
      state: state,
      include_granted_scopes: 'true',
      response_type: 'token',
    });

    // Redirect to Google's OAuth 2.0 server
    window.location.href = `${oauth2Endpoint}?${params.toString()}`;
  };

  // If there's an access token, try an API request. Otherwise, start OAuth 2.0 flow.
  const trySampleRequest = () => {
    const params = JSON.parse(localStorage.getItem('oauth2-test-params'));

    if (params && params['access_token']) {
      fetch(`https://www.googleapis.com/drive/v3/about?fields=user&access_token=${params['access_token']}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else if (response.status === 401) {
            // Token invalid, so prompt for user permission.
            oauth2SignIn();
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          console.log(data); // Use this data as needed
        })
        .catch(error => console.error('Error:', error));
    } else {
      oauth2SignIn();
    }
  };

  return (
   <button onClick={trySampleRequest}>
     <img
       src="./src/asserts/google.jpeg"
       alt="Sign in with Google"
       style={{ width: '100px', height: 'auto' }} // Adjust width and height as needed
     />
   </button>

  );
};

export default GoogleLogin;
