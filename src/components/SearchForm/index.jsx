import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { search, changeSearch } from '../../redux/actions/search';
import Input from '../Shared/Input';
import './styles.css';

const SearchForm = ({ currentSearchValue, onSubmit, onChange }) => (
  <form
    className="SearchForm"
    action="#"
    onSubmit={evt => {
      evt.preventDefault();
      console.log('Submit!');
      onSubmit(currentSearchValue);
    }}>
    <Input
      cls="searchInput"
      placeholder="Search for movies by name..."
      onChange={evt => {
        onChange(evt.target.value);
      }}
      value={currentSearchValue}
      name="search"
      type="text"
    />
  </form>
);

SearchForm.defaultProps = {
  currentSearchValue: '',
  onSubmit: () => {},
  onChange: () => {}
};

SearchForm.propTypes = {
  currentSearchValue: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
}

const mSTP = state => ({
  currentSearchValue: state.searchValue.searchQuery,
});

const mDTP = dispatch => ({
  onSubmit: searchValue => dispatch(search(searchValue)),
  onChange: searchValue => dispatch(changeSearch(searchValue)),
});

export default connect(
  mSTP,
  mDTP,
)(SearchForm);
