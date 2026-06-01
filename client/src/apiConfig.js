// API Configuration
// Ensure it uses the local API even if accessed via local network IP (e.g. 192.168.x.x)
const isProd = window.location.hostname === 'www.aevicta.com' || window.location.hostname === 'aevicta.com';

export const API_BASE_URL = isProd 
    ? 'https://www.aevicta.com/api' 
    : 'http://localhost:5000/api'; // Always use local backend when not on production domain

// Note: Ensure your backend server is also configured to handle requests from this domain.
