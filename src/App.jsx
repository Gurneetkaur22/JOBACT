import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar
import HomePage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';

// Create the router with route paths and corresponding components
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,  // This will render the HomePage component when at the root path
  },
  {
    path: "/login",
    element: <Login />,  // This will render the Login component when at '/login'
  },
]);

const App = () => {
  return (
    <>
      {/* Navbar is always rendered outside RouterProvider */}
    
      
      {/* RouterProvider renders the content based on the active route */}
      <RouterProvider router={router} >
      <Navbar />
      </RouterProvider>
    </>
  );
};

export default App;
