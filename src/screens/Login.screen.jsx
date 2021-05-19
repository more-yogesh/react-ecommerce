import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import api from '../API/api';

const Login = () => {

    const initialValues = {
        email: "",
        password: ""
    };

    const submitHandler = values => {

        api.post('/login', values).then(response => {
            alert('Loing Success');
            sessionStorage.setItem('token', 'Bearer ' + response.data.data.token);
            // redirect to dashboard
        }).catch(err => {
            alert('Credentials are wrong please check entered details');
        });

        console.log('DEFAULT VALUES', values);
    }
    const validateSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    });

    // console.log(process.env.API_URL);

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <Formik
                                                onSubmit={submitHandler}
                                                initialValues={initialValues}
                                                validationSchema={validateSchema}>
                                                <Form className="user">
                                                    <div className="form-group">
                                                        <Field type="email"
                                                            className="form-control form-control-user isInvalid"
                                                            name="email"
                                                            placeholder="Enter Email Address..." />
                                                    </div>
                                                    <ErrorMessage name="email" component='span' className="text-danger" />
                                                    <div className="form-group">
                                                        <Field
                                                            type="password"
                                                            name="password"
                                                            className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                                    </div>
                                                    <ErrorMessage name="password" component='span' className="text-danger" />
                                                    <button className="btn btn-primary btn-user btn-block" type="submit">
                                                        Login</button>
                                                </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
