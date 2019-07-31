import React from 'react';

class NoFieldDetails extends React.Component{
    
    render(){
        return (
            <div className='right-container'>
                <div className="field-details-wrap">
                    <div className="col-full">
                        <h2>Please select a Field Type</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoFieldDetails;