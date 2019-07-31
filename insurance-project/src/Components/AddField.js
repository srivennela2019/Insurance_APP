import React from 'react';
import FieldTypes from './FieldTypes';
import FieldDetails from './FieldDetails';
import NoFieldDetails from './NoFieldDetails';
import fieldType from '../field-type';

class AddField extends React.Component{
    state = {
        fieldType: {},
        detailsShown: false,
        buttonActive: false
    };   
    loadSampleFieldType = () => {
        this.setState({fieldType});
    };
    loadFieldDetails = () => {
        this.setState({
            detailsShown: true
        })
    };
    unloadFieldDetails = () => {
        this.setState({detailsShown: false})
    } 
    render(){
        return (
            <div className='main-container'>
                <FieldTypes 
                    fieldType={this.state.fieldType} 
                    filterFieldType={this.state.filterFieldType}
                    loadSampleFieldType={this.loadSampleFieldType}                    
                    loadFieldDetails={this.loadFieldDetails}
                    />
                {this.state.detailsShown ? 
                    <FieldDetails unloadFieldDetails={this.unloadFieldDetails}/> : 
                    <NoFieldDetails />}
            </div>
        );
    }
}

export default AddField;