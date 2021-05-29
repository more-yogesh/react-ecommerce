import Layout from "../layout/Layout"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Card from './../components/Card.component';
import api from "../API/api";

const CategoryCreate = () => {

    const formInitvalues = {
        name: '',
        description: '',
        slug: '',
        image: '',
    }


    const submitHandler = (formValues) => {
        // console.log(formValues);
        // 500 error serverv error // coding mistake
        // 419 // anauthorised
        // 422 // validation error
        // 200 not error
        api.post('/categories', formValues)
            .then(response => {
                console.log(response);
            }).catch(err => {
                console.log(err.errors);
            });
    }

    const validSchema = Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().required(),
        slug: Yup.string().required()
    })

    return (
        <Layout title="Create New Category">
            <Formik
                onSubmit={submitHandler}
                initialValues={formInitvalues}
                validationSchema={validSchema}>
                <Form>
                    <Card title="Create New Category">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <Field type="text" name="name" id="" className="form-control" />
                            <ErrorMessage name="name" className="text-danger" component="span" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <Field type="textarea" name="description" id="" className="form-control" />
                            <ErrorMessage name="description" className="text-danger" component="span" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Slug</label>
                            <Field type="text" name="slug" id="" className="form-control" />
                            <ErrorMessage name="slug" className="text-danger" component="span" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Image</label>
                            <Field type="file" name="image" id="" className="form-control" />
                            <ErrorMessage name="image" className="text-danger" component="span" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </Card>
                </Form>
            </Formik>
        </Layout>
    )
}

export default CategoryCreate

