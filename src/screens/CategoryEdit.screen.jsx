import Layout from "../layout/Layout"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Card from './../components/Card.component';
import api from "../API/api";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const CategoryEdit = () => {

    let params = useParams();
    let history = useHistory();

    const [initialFormValues, setInitialFormValues] = useState({
        name: '',
        description: '',
        slug: '',
        _method: 'PUT'
    });

    useEffect(() => {
        getRecord();
    }, []);

    const getRecord = () => {
        api.get(`/categories/${params.id}/edit`).then(response => {
            // console.log(response);
            setInitialFormValues({
                name: response.data.data.name,
                description: response.data.data.description,
                slug: response.data.data.slug,
                _method: 'PUT'
            });
        }).catch(err => {
            console.log(err);
        });
    }

    const validScehma = Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().required(),
        slug: Yup.string().required()
    });

    const submitHandler = (formValues) => {
        console.log('submitteed', formValues);
        api.post(`/categories/${params.id}`, formValues)
            .then(response => {
                alert('updated success');
                history.push('/category');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <Layout title="Category">
            <Formik
                onSubmit={submitHandler}
                validationSchema={validScehma}
                initialValues={initialFormValues}
                enableReinitialize={true}
            >
                <Form>
                    <Card title="Edit Category">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <Field
                                type="text"
                                name="name"
                                id=""
                                className="form-control"
                            />
                            <ErrorMessage name="name" className="text-danger" component="span" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <Field
                                type="textarea"
                                name="description"
                                id=""
                                className="form-control"
                            />
                            <ErrorMessage name="description" className="text-danger" component="span" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Slug</label>
                            <Field
                                type="text"
                                name="slug"
                                id=""
                                className="form-control" />
                            <ErrorMessage name="slug" className="text-danger" component="span" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Image</label>
                            <Field type="file" name="image" id="" className="form-control" />
                            <ErrorMessage name="image" className="text-danger" component="span" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </Card>
                </Form>
            </Formik>
        </Layout>
    )
}

export default CategoryEdit

