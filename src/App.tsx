import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { lazy, Suspense } from "react";
import LoadignSpinners from "./Components/LoadingSpinner";


const ContactPage = lazy(() => import("./Pages/ContactPage"));

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route 
      path='/'
      element={
        <Suspense fallback={<LoadignSpinners />}>
          <ContactPage />
        </Suspense>
      }>
      </Route>

      <Route 
      path='/Dashboard'
      element={
        <Suspense fallback={<LoadignSpinners />}>
          <ContactPage />
        </Suspense>
      }>
      </Route>

      <Route 
      path='/'
      element={
        <Suspense fallback={<LoadignSpinners />}>
          <ContactPage />
        </Suspense>
      }>
      </Route>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
