import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import MoviePage from '../pages/movie';
import NotFoundPage from '../pages/notFound';
import Header from '../Header';
import SideBar from '../SideBar';
import Modal from '../Modal';

import './styles.css';

const navLinks = [
  { linkText: "home", linkUrl: "/" },
  { linkText: "about", linkUrl: "/about" },
  { linkText: "browse", linkUrl: "/" }
];

export default class App extends Component {
  state = {
      displayModal: false,
  };

  handleCloseModal = (evt) => {
    evt.preventDefault();
    this.setState({ displayModal: false });
  }

  render() {
    const { displayModal } = this.state;

    return (
      <div className="App">
        { displayModal && 
          <Modal 
            message="Enter something for search"
            handleClose={this.handleCloseModal} 
          />
        }
        <Header pageTitle="Movie Mate" navLinks={ navLinks }/>
        <div className="AppBody">
          <SideBar onSearch={this.handleSearch} getCategory={this.getCategoriesMovies} deleteFromWatchList={this.deleteFromWatchList} />
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/about" component={ AboutPage } />
            <Route path="/movie/:id" component={ MoviePage } />
            <Route component={ NotFoundPage } />
          </Switch>
        </div>
      </div>
    );
  };
};

