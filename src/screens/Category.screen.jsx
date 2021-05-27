import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../API/api';
import Layout from '../layout/Layout';

const Category = () => {

    const [categories, setCategories] = useState([]);

    const loadCategories = () => {
        api.get('/categories').then(response => {
            setCategories(response.data.message.data);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <Layout title="Category">
            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow mb-4">
                        <div className="card-header">
                            <h6 className="m-0 font-weight-bold text-primary">All Categories
                            <Link to="/category/create" className="btn btn-secondary float-right">Create</Link>
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            categories.map((category, index) => {
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{category.name}</td>
                                                        <td>{category.description}</td>
                                                        <td><img src={category.thumb} /></td>
                                                        <td>
                                                            <a href="#" className="btn btn-primary btn-sm">
                                                                <span className="fas fa-edit"></span>
                                                            </a>
                                                            <a href="#" className="btn btn-danger btn-sm">
                                                                <span className="fas fa-trash"></span>
                                                            </a>
                                                            <a href="#" className="btn btn-success btn-sm">
                                                                <span className="fas fa-eye"></span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Category;
