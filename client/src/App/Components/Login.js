import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import fire from '../../config/Firebase';
import './Login.scss';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {});
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) => {})
            .catch((error) => {})
    }

    render() {
        const {
            email = '',
            password = ''
        } = this.state;
        return (
            <MDBContainer>
                <MDBRow className="center">
                    <MDBCol md="6">
                        <MDBCard>
                            <div className="header pt-3 peach-gradient">
                                <MDBRow className="d-flex justify-content-center">
                                    <h3 className="white-text mb-3 pt-3 font-weight-bold">
                                        Log in
                                    </h3>
                                </MDBRow>
                            </div>
                            <MDBCardBody className="mx-4 mt-4">
                                <MDBInput label="Your email" group type="text" name="email" validate value={email} onInput={e => this.handleChange(e)} />
                                <MDBInput
                                    label="Your password"
                                    group
                                    type="password"
                                    validate
                                    name="password"
                                    containerClass="mb-0"
                                    value={password}
                                    onInput={e => this.handleChange(e)}
                                />
                                <MDBRow className="center">
                                            <MDBBtn
                                                color="grey"
                                                rounded
                                                type="button"
                                                className="col-md-6 col-sm-12 z-depth-1a"
                                                onClick={(e) => this.login(e)}
                                            >
                                                Log in
                                            </MDBBtn>
                                </MDBRow>
                                <MDBRow className="center">
                                    <p className="font-small grey-text mt-3">
                                            Don't have an account?
                                    </p>
                                </MDBRow>
                                <MDBRow className="center">    
                                        <MDBBtn
                                            type="button"
                                            className="col-md-6 col-sm-12 z-depth-1a"
                                            onClick={(e) => this.signup(e)}
                                        >
                                            Sign up
                                        </MDBBtn>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}
export default Login;