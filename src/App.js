import React, { Component } from 'react';
import MetisMenu from 'metismenujs';
import 'metismenujs/dist/metismenujs.css';

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    this.mm('dispose');
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={el => this.el = el}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <MM>
        <li>
          <a className="has-arrow" href="#" aria-expanded="false">
            <span className="fa fa-fw fa-github fa-lg"></span>
            metisMenu
        </a>
          <ul>
            <li>
              <a href="https://github.com/onokumus/metismenujs">
                <span className="fa fa-fw fa-code-fork"></span> Fork
            </a>
            </li>
            <li>
              <a href="https://github.com/onokumus/metismenujs">
                <span className="fa fa-fw fa-star"></span> Star
            </a>
            </li>
            <li>
              <a href="https://github.com/onokumus/metismenujs/issues">
                <span className="fa fa-fw fa-exclamation-triangle"></span> Issues
            </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="#" aria-expanded="false">Menu 0</a>
          <ul>
            <li>
              <a href="#">item 0.1</a>
            </li>
            <li>
              <a href="#">item 0.2</a>
            </li>
            <li>
              <a href="http://onokumus.com">onokumus</a>
            </li>
            <li>
              <a href="#">item 0.4</a>
            </li>
          </ul>
        </li>
        <li id="removable">
          <a className="has-arrow" href="#" aria-expanded="false">Menu 1</a>
          <ul>
            <li>
              <a href="#">item 1.1</a>
            </li>
            <li>
              <a href="#">item 1.2</a>
            </li>
            <li>
              <a className="has-arrow" href="#" aria-expanded="false">Menu 1.3</a>
              <ul>
                <li>
                  <a href="#">item 1.3.1</a>
                </li>
                <li>
                  <a href="#">item 1.3.2</a>
                </li>
                <li>
                  <a href="#">item 1.3.3</a>
                </li>
                <li>
                  <a href="#">item 1.3.4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">item 1.4</a>
            </li>
            <li>
              <a className="has-arrow" href="#" aria-expanded="false">Menu 1.5</a>
              <ul>
                <li>
                  <a href="#">item 1.5.1</a>
                </li>
                <li>
                  <a href="#">item 1.5.2</a>
                </li>
                <li>
                  <a href="#">item 1.5.3</a>
                </li>
                <li>
                  <a href="#">item 1.5.4</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="#" aria-expanded="false">Menu 2</a>
          <ul>
            <li>
              <a href="#">item 2.1</a>
            </li>
            <li>
              <a href="#">item 2.2</a>
            </li>
            <li>
              <a href="#">item 2.3</a>
            </li>
            <li>
              <a href="#">item 2.4</a>
            </li>
          </ul>
        </li>
      </MM>
    );
  }
}

export default App;
