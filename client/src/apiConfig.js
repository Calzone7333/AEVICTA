// Detect if we are on a production domain
const isProduction = window.location.hostname.includes('Aevicta.com');

// Define where the backend is located
const backendPort = '8083';

// Base URL of the backend server
export const BASE_URL = isProduction
    ? `https://${window.location.hostname}`
    : `http://${window.location.hostname}:${backendPort}`;

// API Base URL
export const API_BASE_URL = `${BASE_URL}/api`;

// Helper for file URLs
export const getFileUrl = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    const cleanPath = path.replace(/^\/+/, ''); // Remove all leading slashes
    return `${BASE_URL.replace(/\/+$/, '')}/${cleanPath}`;
};

