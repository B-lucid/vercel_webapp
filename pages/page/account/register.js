import React, { useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label ,Col} from 'reactstrap';

const Register = () => {
    // add state variables to hold the values of the input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [rcode, setRcode] = useState('');

  // define the onSubmit event handler function for the form
  const handleSubmit = (event) => {

    event.preventDefault();
      // if there are no errors, submit the form
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Date of Birth:', dob);
      console.log('Gender:', gender);
      console.log('Country:', country);
      console.log('Referral Code:', rcode);
  };

  // define the onChange event handler functions for the input fields
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    if (event.target.value === " ") {
        alert('First name is required');
      }
      };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleReferralCodeChange = (event) => {
    setRcode(event.target.value);
  };

    return (
        <CommonLayout parent="home" title="register">
            <section className="register-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h3>create account</h3>
                            <div className="theme-card">
                                <Form className="theme-form" onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md="6">
                                            <Label className="form-label" for="firstName">First Name</Label>
                                            <Input type="text" className="form-control" id="firstName" placeholder="First Name"
                                                required="" onChange={handleFirstNameChange}/>
                                        </Col>
                                        <Col md="6">
                                            <Label className="form-label" for="lastName">Last Name</Label>
                                            <Input type="text" className="form-control" id="lastName" placeholder="Last Name"
                                                required="" onChange={handleLastNameChange}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <Label className="form-label" for="email">email</Label>
                                            <Input type="email" className="form-control" id="email" placeholder="Email" required="" onChange={handleEmailChange}/>
                                        </Col>
                                        <Col md="6">
                                            <Label className="form-label" for="phone">phone</Label>
                                            <Input type="phone" className="form-control" id="phone" placeholder="Phone" required="" onChange={handlePhoneChange}/>
                                        </Col>
                                        <Col md="6">
                                            <Label className="form-label" for="dob">Date of Birth</Label>
                                            <Input type="date" id="dob" placeholder="Date of Birth" required="" onChange={handleDobChange}/>
                                        </Col>
                                        <Col md="6">
                                            <Label className="form-label" for="gender">Gender</Label>
                                            <Input type="select" id="gender" className ="gender-class" placeholder="Select" bsSize ="lg" required="" onSelect={handleGenderChange}>
                                            <option> Male </option>
                                            <option> Female </option>
                                            </Input>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <Label className="form-label" for="country">country</Label>
                                            <Input type="text" className="form-control" id="country" placeholder="Country" required="" onChange={handleCountryChange}/>
                                        </Col>
                                        <Col md="6">
                                            <Label className="form-label" for="rcode">Referral Code</Label>
                                            <Input type="text" className="form-control" id="rcode" placeholder="Referral Code" required="" onChange={handleReferralCodeChange}/>
                                        </Col>   
                                        <Col md="6">
                                            <Label className="form-label" for="review">Password</Label>
                                            <Input type="password" className="form-control" id="review"
                                                placeholder="Enter your password" required="" />
                                        </Col>
                                    </Row>
                                        <Col md="12">
                                            <button type="submit" className="btn btn-solid w-auto">create Account</button>
                                        </Col>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Register