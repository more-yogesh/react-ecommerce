import React from 'react'
import PropTypes from 'prop-types'

const Counter = props => {
    return (
        <div>
            <div className={`card border-left-${props.type} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.type} text-uppercase mb-1`}>
                                {props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas fa-${props.icon ? props.icon : 'calendar' } fa-2x text-gray-300`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
