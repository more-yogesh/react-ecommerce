import React from 'react'
import Counter from '../components/dashboard/Counter.component';
import Layout from '../layout/Layout';

const Dashboard = () => {
    return (
        <Layout title="Dashboard">
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <Counter title="Customers" type="primary" value="500" />
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <Counter title="Orders" type="success" value="556" icon="dollar-sign" />
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <Counter title="Earnings" type="success" value="50,000" icon="dollar-sign" />
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;
