import React from 'react';
import './styles.css';

import SearchForm from '../SearchForm';
import Categories from '../Categories';
import WatchList from '../WatchList';

const SideBar = ({onSearch, query, getCategory, watchList, deleteFromWatchList }) => (
    <div className="SideBar">
        <SearchForm onSearch = {onSearch} query={query} />
        <Categories getCategory={getCategory} />
        <WatchList watchList = {watchList} deleteFromWatchList={deleteFromWatchList} />
    </div>
);

export default SideBar;
