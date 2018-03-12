import React, { Component } from 'react';
import './styles.css';
import v4 from 'uuid/v4';

import Header from '../Header';
import SideBar from '../SideBar';
import MovieGallery from '../MovieGallery';

const navLinks = [
    {
        id: v4(),
        linkText: "home"
    },
    {
        id: v4(),
        linkText: "about"
    },
    {
        id: v4(),
        linkText: "browse"
    }
];

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header pageTitle="Movie Mate" navLinks={ navLinks }/>
                <div className="AppBody">
                    <SideBar />
                    <MovieGallery />
                </div>
            </div>

        );
    }
}
