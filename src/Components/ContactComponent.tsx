import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormValidation from "../Hooks/formValidation";
// import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import toastifyNotifications from "./Toast/Toastify";
// import { setDetails } from "../Redux/contactSlice";
// import axios from "axios";
// import { useMutation } from "@tanstack/react-query";

const {inValidToast, successToast} = toastifyNotifications()

const contactsData = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
    },
    {
        firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
  },
];

// interface Data {
//   id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: number;
//   status:string
// }

function ContactComponent() {
    const { errors, handleInputs, isValidForm, Form, handleStatusChange } = FormValidation();
  const [showModal, setShowModal] = useState(false);
//   const dispatch = useDispatch();
  const navigate = useNavigate();

 
 
  


  const handleSubmit = async (e: FormEvent) => {
       
    try {
        setShowModal(false)
      e.preventDefault();
      const formStatus = await isValidForm(e);
      
      if (!formStatus) {
        inValidToast()
        return;
      }
      successToast()



    //   const formData = new FormData(event?.target as HTMLFormElement) 
    //   const newContactData : Data  = {
    //     firstName:Form.firstName,
    //     lastName:Form.lastName,
    //     email:Form.email,
    //     phone:Form.phone,
    //     status:Form.status
    //   }
    

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
         <ToastContainer />
      <div className="flex justify-between mr-5 items-center">
        <h1 className="font-bold lg:mt-5 md:mt-2 sm:mt-2 text-transparent text-4xl ml-5 bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          Contacts
        </h1>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="rounded-md mt-5 w-32 h-12 bg-gradient-to-r font-bold text-white from-cyan-400 to-blue-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500"
        >
          Create Contact
        </button>
      </div>

      <div className="flex justify-center mt-5">
        <div className="border h-10 rounded-md lg:w-96 flex items-center border-cyan-300">
          <h1 className="text-xl ml-4 font-medium text-blue-400">Search</h1>
        </div>
      </div>

      {contactsData ? (
        <div className="flex justify-center">
          <div className="mt-5 lg:rounded-md lg:w-[80%] md:w-[80%] sm:w-[80%] border">
            <div className="flex justify-center items-center flex-col">
              <div className="bg-cyan-200 rounded-t-md h-12 w-full p-3 font-semibold text-center flex justify-between">
                <h1 className="w-1/4 sm:w-1/6">Name</h1>
                <h1 className="w-1/4 sm:w-1/4">Email</h1>
                <h1 className="w-1/4 sm:w-1/6">Phone</h1>
              </div>
            </div>
            <div className="flex justify-center items-center overflow-y-scroll max-h-96 flex-col">
              {contactsData.map((contact, index) => (
                <div
                  key={index}
                  className="flex justify-between text-center p-3 border-t w-full"
                >
                  <h1 className="w-1/4 sm:w-1/6">
                    {contact.firstName} {contact.lastName}
                  </h1>
                  <h1 className="w-1/4 sm:w-1/4">{contact.email}</h1>
                  <h1 className="w-1/4 sm:w-1/6">{contact.phone}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>No contacts available</h1>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto">
          <div className="fixed inset-0 w-full h-full bg-black opacity-70 backdrop-filter backdrop-blur-3xl"></div>
          <div className="relative w-full max-w-md p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="mt-3">
              <div className="mt-2  sm:text-left">
                <h4 className="text-2xl font-bold ] text-center text-cyan-700">
                  Add Contact
                </h4>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-1">
                      <label
                        className="text-center text-cyan-500 mt-3 font-medium"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        name="firstName"
                        onChange={handleInputs}
                        value={Form.firstName}
                        placeholder="First Name"
                        className="border text-center rounded-sm p-2"
                        type="text"
                      />
                      <p className="text-red-500 text-sm font-size: 0.75rem">
                        {errors.firstName}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label
                        className="font-medium text-cyan-500 text-center"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        name="lastName"
                        onChange={handleInputs}
                        value={Form.lastName}
                        placeholder="Last Name"
                        className="border text-center rounded-sm p-2"
                        type="text"
                      />
                      <p className="text-red-500 text-sm font-size: 0.75rem">
                        {errors.lastName}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label
                        className="font-medium text-cyan-500 text-center"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        name="email"
                        type="text"
                        onChange={handleInputs}
                        value={Form.email}
                        placeholder="example@gmail.com"
                        className="border text-center rounded-sm p-2"
                      />
                      <p className="text-red-500 text-sm font-size: 0.75rem">
                        {errors.email}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label
                        className="font-medium text-cyan-500 text-center"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        name="phone"
                        type="number"
                        onChange={handleInputs}
                        value={Form.phone}
                        placeholder="*************"
                        className="border text-center rounded-sm p-2"
                      />
                      <p className="text-red-500 text-sm font-size: 0.75rem">
                        {errors.phone}
                      </p>
                    </div>


                   <div className="flex flex-col space-y-4">
  <label className="font-medium text-cyan-500 text-center">Status</label>
  <div className="flex items-center justify-center space-x-4">
    <div className="flex items-center space-x-2">
      <input
        id="status-active"
        type="radio"
        name="status"
        value='active'
        checked={Form?.status === 'active'} 
        className="w-4 h-4 text-blue-600 border border-gray-300 rounded"
        onClick={handleStatusChange}
      />
      <label htmlFor="status-active">Active</label>
    </div>
    <div className="flex items-center space-x-2">
      <input
        id="status-inactive"
        type="radio"
        name="status"
        value='Inactive'
        checked={Form?.status === 'Inactive'}
        className="w-4 h-4 text-blue-600 border border-gray-300 rounded"
        onClick={handleStatusChange}
      />
      <label htmlFor="status-inactive text-cyan-500">Inactive</label>
    </div>
  </div>
</div>

                  </div>
                  <div className="flex justify-center space-x-4 mt-6">
                    <button
                      className="w-full py-2 text-cyan-600 bg-white border rounded-md hover:bg-cyan-600 hover:text-white "
                      type="submit"
                    >
                      Save
                    </button>
                    <button
                      className="w-full py-2 text-red-500 bg-white border rounded-md hover:bg-red-700 hover:text-white focus:ring-2 focus:ring-red-500"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactComponent;
