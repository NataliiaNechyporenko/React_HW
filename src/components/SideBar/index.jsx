import React from 'react';
import './styles.css';

import SearchForm from '../SearchForm';
import Categories from '../Categories';
import WatchList from '../WatchList';

const SideBar = ({onSearch, query}) => (
    <div className="SideBar">
        <SearchForm onSearch={onSearch} query={query} />
        <Categories />
        <WatchList />
    </div>
);

export default SideBar;
