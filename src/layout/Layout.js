import React from 'react'
import Footer from '../components/Footer.component'
import Sidebar from '../components/Sidebar.cmponent'
import TopNavBar from '../components/TopNavBar.component'

const Layout = (props) => {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopNavBar />
                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">{props.title}</h1>
                        </div>
                        {
                            props.children
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
