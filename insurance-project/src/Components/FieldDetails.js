import React from 'react';
import ButtonBar from './ButtonBar';
import { tagGroups, tags } from '../tags';

class Tags extends React.Component {
    render() {
        return(
            <ul className='tags'>
                {this.props.tags.map((tag, key) => {
                    return (
                        <li key={key} onClick={this.props.tagClicked && this.props.tagClicked.bind(this, tag)}>
                            {tag}
                        </li>
                    )
                })}
            </ul>
        );
    }
}

class FieldDetails extends React.Component{
    state = {
        referenceName: '',
        tags: {},
        tagGroups: [],
        selectedTagGroup: '',
    }
    removeSpaces = (event) => {
        const value = event.target.value;
        const trim = value.replace(/\s/g, "");
        this.setState({ referenceName: trim})
    }
    checkRegex = (event) => {
        const value = event.target.value;
        const str = 'test sentance';
        const regex = str.replace(value, "");
        console.log(str);
        console.log(regex);
        if (str === regex){
            console.log('FAILED');
        }
    }
    loadSampleTags = () => {
        this.setState({tags});
        this.setState({tagGroups})
    };
    componentDidMount(){
        this.loadSampleTags();
    } 
    tagGroupClicked = (tagGroup, e) => {
        this.setState({selectedTagGroup: tagGroup})
    }
       
    render(){
        return (
            <div className='right-container'>
                <div className="field-details-wrap">
                    <div className="col-3">
                        <h2>Field Details</h2>
                        <form>
                            <label>Display Label</label>
                            <input type='text' name='Display Label' onKeyUp={this.removeSpaces} />

                            <span>For display purposes, spaces allowed.</span>
                        </form>
                        <form>
                            <label>Reference Name</label>
                            <input type="text" name='Display Label' disabled value={this.state.referenceName}/>
                            <span>Used to reference in calculations, no spaces allowed</span>
                        </form>                        
                        <form>
                            <label>Default Value</label>
                            <input type='text' name='Default Value' />
                        </form>
                        <form>
                            <label>Custom Validation</label>
                            <input type='text' name='Custom Validation' onKeyUp={this.checkRegex}/>
                            <span>Any regex patter can be used for custom input validation</span>
                        </form>
                        <form>
                            <label>Validation Error Message</label>
                            <input type='text' name='Validation Error Message' />
                        </form>
                    </div>   
                    <div className='col-3'>
                        <h2>Tags</h2>
                        <h4>Tag Group</h4>
                        <Tags tags={this.state.tagGroups} tagClicked={this.tagGroupClicked} />
                        <h4>Tags</h4>
                        { this.state.selectedTagGroup != '' ? (
                            <Tags tags={this.state.tags[this.state.selectedTagGroup]} />
                        ) : (
                            <span>Select a tag group to see individual tags</span>    
                        )
                        }
                        
                    </div>
                    <div className='col-3'>
                        <h2>Field Groups</h2>
                        <h4>Choose a group for this input</h4>
                        <button className="btn secondary">+ Add a Group</button>
                        <ul className='group-container'>
                            <li className='group-button'>Example Group</li>
                        </ul>
                    </div>                
                </div>
                <ButtonBar unloadFieldDetails={this.props.unloadFieldDetails}/>
            </div>
        );
    }
}

export default FieldDetails;