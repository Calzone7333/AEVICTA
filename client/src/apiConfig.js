// API Configuration
// This will automatically switch between localhost and your production domain
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const API_BASE_URL = isLocal 
    ? 'http://localhost:5000/api' 
    : 'https://www.aevicta.com/api'; // Your production API endpoint

// Note: Ensure your backend server is also configured to handle requests from this domain.
