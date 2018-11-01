import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/home';
import About from '../pages/about';
import Movie from '../pages/movie';
import NotFoundPage from '../pages/notFound';
import Header from '../Header';
import SideBar from '../SideBar';
import Modal from '../Modal';

import './styles.css';

const navLinks = [
  { linkText: "home" },
  { linkText: "about" },
  { linkText: "browse" }
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
            <Route path="/about" component={ About } />
            <Route path="/:id" component={ Movie } />
            <Route component={ NotFoundPage } />
          </Switch>
        </div>
      </div>
    );
  };
};

