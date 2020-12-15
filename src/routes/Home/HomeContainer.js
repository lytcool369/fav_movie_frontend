import React, { useEffect, useState } from "react";
import { scrapping } from "../../api";
import HomePresenter from "./HomePresenter";

const HomeContainer = ({ setHomeLoading }) => {
  const [state, setState] = useState({
    error: null,
    loading: true,
  });

  useEffect(() => {
    const process = async () => {
      setHomeLoading(true);
      setState({ error: null, loading: true });

      try {
        await scrapping.scrapNowMovie();
        await scrapping.scrapPreMovie();
      } catch (error) {
        setState({ error: "크롤링에 실패하였습니다.", loading: false });
      } finally {
        setHomeLoading(false);
        setState({ error: null, loading: false });
      }
    };

    process();
  }, []);

  return <HomePresenter />;
};

export default HomeContainer;
