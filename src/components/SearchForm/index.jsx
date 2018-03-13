import React, {Component} from 'react';
import './styles.css';

export default class SearchForm extends Component {
    state = {
        inputValue: ""
    };
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSearch(this.state.inputValue);
    };
    handleInputChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            inputValue: value
        }
    );
    };
    render () {
        console.log(this.props);
        return (
            <form className="SearchForm" action="#" onSubmit={this.handleSubmit}>
                <input className="searchInput" placeholder="Search for movies by name..." value={this.state.inputValue} onChange={this.handleInputChange} />
            </form>
        )
    }};
