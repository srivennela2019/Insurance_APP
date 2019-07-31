import React from 'react';

class FieldType extends React.Component{
    fieldSelected(){
        this.props.fieldTypeSelected(this.props.index)
    }
    render(){
        const {definition, display, icon, name} = this.props.details;
        return (
            <li onClick={this.fieldSelected.bind(this)}
                className={this.props.selectedField == this.props.index ? 
                    'field-type-wrap active' : 
                    'field-type-wrap'}
            >
                <h3><i className={icon}></i>{name}</h3>
                <span>Definition</span>
                <p>{definition}</p>
                <span>Default Display</span>
                <p>{display}</p>
            </li>
        );
    }
}

export default FieldType;