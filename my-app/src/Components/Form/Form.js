import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, FormControl, FormCheck } from "react-bootstrap";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    isStudent: true,
    file: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0] && e.target.files[0].type === "application/pdf") {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    } else {
      alert("Please select a PDF file");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1337/api/formdata", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          age: formData.age,
          gender: formData.gender,
          isStudent: formData.isStudent,
          file: formData.file,
        }),
      });

      const data = await response.json();
      console.log("formdataaaaaa:::::::::::::::::::::", data);
      alert("Form Submitted Successfully");
      setFormData({
        name: "",
        email: "",
        age: "",
        gender: "",
        isStudent: true,
        file: null,
      });
    } catch (error) {
      console.log("submission failed!!!", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGender">
        <Form.Label>Gender</Form.Label>
        <Form.Select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formStudent">
        <FormCheck
          type="checkbox"
          label="Are you a student?"
          name="isStudent"
          checked={formData.isStudent}
          onChange={handleCheckboxChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formFile">
        <Form.Label>Upload a PDF file</Form.Label>
        <Form.Control
          type="file"
          accept="application/pdf"
          name="file"
          onChange={handleFileChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;
