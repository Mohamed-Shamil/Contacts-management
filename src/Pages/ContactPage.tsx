import React from 'react';
import ContactComponent from '../Components/ContactComponent';
import SidebarComponent from '../Components/SidebarComponent';
import Navbar from '../Components/Navbar';

function ContactPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="flex">
          <SidebarComponent />
        </div>

        {/* Contact Component */}
        <div className="w-full">
          <ContactComponent />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
