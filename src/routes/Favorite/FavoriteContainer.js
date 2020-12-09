import React from "react";
import { moviesApi } from "../../api";
import FavoritePresenter from "./FavoritePresenter";

export default class extends React.Component {
  // constructor: 클래스 생성자
  //   생성자의 매개변수로 부모 컴포넌트의 props가 들어온다.
  constructor(props) {
    super(props);
  }

  // 클래스형 컴포넌트에서 state 만들기
  state = {
    favorite: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { result: favorite },
      } = await moviesApi.favorite();

      this.setState({
        favorite,
      });
    } catch (error) {
      this.setState({
        error: "내가 좋아하는 영화 정보를 찾을 수 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { favorite, error, loading } = this.state;

    return (
      <FavoritePresenter favorite={favorite} error={error} loading={loading} />
    );
  }
}
