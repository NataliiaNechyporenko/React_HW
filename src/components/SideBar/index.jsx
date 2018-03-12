import React from 'react';
import './styles.css';

import SearchForm from '../SearchForm';
import Categories from '../Categories';
import WatchList from '../WatchList';

const SideBar = () => (
    <div className="SideBar">
        <SearchForm />
        <Categories />
        <WatchList />
    </div>
);

export default SideBar;
