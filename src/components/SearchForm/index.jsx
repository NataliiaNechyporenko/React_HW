import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { changeSearch } from '../../redux/actions/search';
import Input from '../Shared/Input';
import './styles.css';

const SearchForm  = ({currentSearchValue, onChange}) => (
    <form className="SearchForm" action="#" onSubmit={this.handleSubmit}>
        <Input cls="searchInput" 
        placeholder="Search for movies by name..."
        onChange={evt => {onChange(evt.target.value)}}
        value={currentSearchValue}
        name="search"
        type="text" />
    </form>
)

const mSTP = state => ({
        currentSearchValue: state.searchValue
      });
      
      const mDTP = dispatch => ({
        onChange: (searchValue) => dispatch(changeSearch(searchValue)),
      });
      
export default connect(mSTP, mDTP)(SearchForm);