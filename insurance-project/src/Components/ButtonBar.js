import React from 'react';

class ButtonBar extends React.Component{
    
    render(){
        return (
            <div className="button-bar">
                <div className='buttons'>
                    <button className='btn secondary' onClick={this.props.unloadFieldDetails}>Cancel Changes</button>
                    <button className='btn save'>Save Changes</button>
                    <button className='btn delete'>Delete Input</button>                    
                </div>        
            </div>
        );
    }
}

export default ButtonBar;