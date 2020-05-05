import React, { Component } from 'react';
import './NewMovie.scss';
import PropTypes from 'prop-types';

export class NewMovie extends Component {
  /* eslint-disable-next-line */
  urlPattern = /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/;

  state = {
    title: '',
    description: '',
    imgUrl: '',
    imdbUrl: '',
    viewError: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, imgUrl, imdbUrl } = this.state;
    const imdbId = +Date.now();

    const movie = {
      title, description, imgUrl, imdbUrl, imdbId,
    };

    if (!this.urlPattern.test(imgUrl)) {
      this.setState({
        imgUrl: '',
        viewError: true,
      });
    } else if (!this.urlPattern.test(imdbUrl)) {
      this.setState({
        imdbUrl: '',
        viewError: true,
      });
    } else if (title && imgUrl && imdbUrl) {
      this.props.addMovie(movie);
      this.setState({
        title: '',
        description: '',
        imgUrl: '',
        imdbUrl: '',
        viewError: false,
      });
    } else {
      this.setState({
        viewError: true,
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p className="form__title">title</p>
          <input
            onChange={(event) => {
              this.setState({ title: event.target.value });
            }}
            type="text"
            value={this.state.title}
          />
        </label>
        <p className={(!this.state.title && this.state.viewError)
          ? 'error' : 'no-error'}
        >
          Plese entered title...
        </p>
        <label>
          <p className="form__title">description</p>
          <textarea
            onChange={(event) => {
              this.setState({ description: event.target.value });
            }}
            type="text"
            value={this.state.description}
          />
        </label>
        <label>
          <p className="form__title">imgUrl</p>
          <input
            onChange={(event) => {
              this.setState({ imgUrl: event.target.value });
            }}
            type="text"
            value={this.state.imgUrl}
          />
        </label>
        <p className={(!this.state.imgUrl && this.state.viewError)
          ? 'error' : 'no-error'}
        >
          Plese entered correct imgUrl...
        </p>
        <label>
          <p className="form__title">imdbUrl</p>
          <input
            onChange={(event) => {
              this.setState({ imdbUrl: event.target.value });
            }}
            type="text"
            value={this.state.imdbUrl}
          />
        </label>
        <p className={(!this.state.imdbUrl && this.state.viewError)
          ? 'error' : 'no-error'}
        >
          Plese entered correct imdbUrl...
        </p>
        <button className="button" type="submit">add</button>
      </form>
    );
  }
}

NewMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
};
