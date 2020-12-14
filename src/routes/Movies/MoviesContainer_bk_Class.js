import React from "react";
import { moviesApi } from "../../api";

import MoviesPresenter from "./MoviesPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    movieList: null,
    error: null,
    loading: true,
    isFavorite: false,
  };

  async componentDidMount() {
    try {
      const {
        data: { result: movieList },
      } = await moviesApi.movieList();

      this.setState({
        movieList,
      });
    } catch (error) {
      this.setState({
        error: "영화 상영작을 찾을 수 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  _handleBookMark = async (id) => {
    try {
      await moviesApi.favorite(id);
    } catch (error) {
      this.setState({
        error: "북마크 중에 에러가 났습니다.",
      });
    }
  };

  render() {
    const { movieList, error, loading } = this.state;

    return (
      <MoviesPresenter
        movieList={movieList}
        error={error}
        loading={loading}
        _handleBookMark={(id) => this._handleBookMark(id)}
      />
    );
  }
}
