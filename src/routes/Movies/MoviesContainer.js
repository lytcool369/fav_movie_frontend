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

  render() {
    const { movieList, error, loading } = this.state;
    return (
      <MoviesPresenter movieList={movieList} error={error} loading={loading} />
    );
  }
}
