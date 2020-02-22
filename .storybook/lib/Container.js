/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './container.scss';

class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <React.StrictMode>
        <div
          data-floating-menu-container
          role="main"
          style={ {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          { story() }
        </div>
      </React.StrictMode>
    );
  }
}

Container.propTypes = {
  story: PropTypes.func,
};

export default Container;
