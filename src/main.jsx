import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTrip from './create-trip';
import Header from './components/custom/Header';
import { Toaster } from "@/components/ui/sonner";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './view-trip/[tripId]';

// Check if the environment variable is accessible
const googleClientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

if (!googleClientId) {
  console.error("Google OAuth Client ID is missing. Please check your environment variables.");
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/create-trip',
    element: <CreateTrip />
  },
  {
    path: '/view-trip/:tripId',
    element: <ViewTrip />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {googleClientId ? (
      <GoogleOAuthProvider clientId={googleClientId}>
        <Header />
        <Toaster />
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    ) : (
      <div>
        <h1>Error</h1>
        <p>Google OAuth Client ID is not configured. Please check your environment variables.</p>
      </div>
    )}
  </StrictMode>
);
