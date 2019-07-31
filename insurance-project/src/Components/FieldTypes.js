import React from 'react';
import FieldType from './FieldType';
import { pickBy } from 'lodash';

class FieldTypes extends React.Component{  
    state = {
        selectedField: null,
        matchingFilters: [],
        filtered: false,
    }
    componentDidMount(){
        this.props.loadSampleFieldType();
        this.filterFieldType = this.filterFieldType.bind(this);
        // this.setState({matchingFilters: this.props.fieldType});
    } 
    fieldTypeSelected(selectedField) {
        this.setState({ selectedField });
        this.props.loadFieldDetails()
    }
    filterFieldType(event) {
        const value = event.target.value;
        if(value == '') {
            this.setState({ matchingFilters: this.props.fieldType})
            return;
        }
        // debugger
        let matchingFilters = pickBy(this.props.fieldType, (fieldType) => {
            return fieldType.name.toLowerCase().startsWith(value)
        });
    
        this.setState({ matchingFilters, filtered: true })
    }   
    render(){
        const fields = this.state.filtered ? this.state.matchingFilters : this.props.fieldType;
        return (
            <div className="left-container">
                <h2>Field Types</h2>
                <form className='filter'>
                    <label>Filter Types</label>
                    <input type='text' name='Filter Types' onKeyUp={this.filterFieldType}
                    />
                </form> 
                <ul className='field-type'>
                    {Object.keys(fields).map(key => (
                        <FieldType 
                            fieldTypeSelected={this.fieldTypeSelected.bind(this)}
                            key={key}
                            index={key}
                            selectedField={this.state.selectedField}
                            details={this.props.fieldType[key]}
                        /> 
                    ))}           
                </ul>
            </div>
        );
    }
}

export default FieldTypes;