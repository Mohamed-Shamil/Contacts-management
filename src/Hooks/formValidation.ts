import { useState } from "react";

const FormValidation = () => {
  const [errors, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    status: "",
  });

  const [Form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    status: "active",
  });

  const containsNumber = (string: string) => {
    return /\d/.test(string);
  };

  const length = (string: string) => {
    return string.length >= 3;
  };

  const isValidEmail = (string: string) => {
    return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(string);
  };

  const isValidPhone = (number: string): boolean => {
    return /^[6-9]\d{9}$/.test(number);
  };

  const handleInputs = (e: any) => {
    let error = "";
    const { name, value } = e.target;

    if (!value.trim()) {
      error = `${name} is required`;
    } else if (name === "firstName") {
      if (containsNumber(value)) error = "Should contain only alphabets";
      if (!length(value)) error = "Should contain at least three alphabets";
    } else if (name === "lastName") {
      if (containsNumber(value)) error = "Should contain only alphabets";
      if (!length(value)) error = "Should contain at least three alphabets";
    } else if (name === "email") {
      if (!isValidEmail(value)) error = "Invalid email address";
    } else if (name === "phone") {
      if (!isValidPhone(value)) error = "Invalid phone number";
    }

    setError((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStatusChange = (event: any) => {
    const target = event.target as HTMLInputElement;
    const selectedValue = target.value;
    setForm((prevData) => ({
      ...prevData,
      status: selectedValue,
    }));
  };

  const isValidForm = async (e: any) => {
    e.preventDefault();
    let status = false;

    if (
      Form.email.length &&
      Form.firstName.length &&
      Form.lastName.length &&
      Form.phone.length & Form.status.length
    ) {
      status = true;
    }

    return status;
  };

  return { errors, Form, handleInputs, isValidForm, handleStatusChange };
};

export default FormValidation;
