
import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';


function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.course) newErrors.course = "Course selection is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
      alert("Registration Successful!");
    }
  };

  
  const handleReset = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "",
    });
    setErrors({});
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          error={!!errors.mobile}
          helperText={errors.mobile}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <FormControl component="fieldset" margin="normal" fullWidth>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
          {errors.gender && <p style={{ color: 'red', fontSize: '12px' }}>{errors.gender}</p>}
        </FormControl>
        <TextField
          fullWidth
          margin="normal"
          label="Date of Birth"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          error={!!errors.dob}
          helperText={errors.dob}
        />
        <TextField
          fullWidth
          margin="normal"
          select
          label="Course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          error={!!errors.course}
          helperText={errors.course}
        >
          <MenuItem value="Biology">Biology</MenuItem>
          <MenuItem value="Computer Science">Computer Science</MenuItem>
          <MenuItem value="Commerce">Commerce</MenuItem>
          <MenuItem value="Humanities">Humanities</MenuItem>
        </TextField>
        <Box display="flex" justifyContent="space-between" marginTop={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            onClick={handleReset}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default RegistrationForm;
