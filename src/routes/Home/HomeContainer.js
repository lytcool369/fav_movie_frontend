import React, { useEffect, useState } from "react";
import { scrapping } from "../../api";

const HomeContainer = ({ setHomeLoading }) => {
  const [state, setState] = useState({
    error: null,
    loading: true,
  });

  useEffect(() => {
    const process = async () => {
      setState({ error: null, loading: true });

      try {
        await scrapping.scrapNowMovie();
        await scrapping.scrapPreMovie();
      } catch (error) {
        setState({ error: "크롤링에 실패하였습니다.", loading: false });
      } finally {
        setState({ error: null, loading: false });
        setHomeLoading(false);
      }
    };

    process();
  }, []);

  return <div></div>;
};

export default HomeContainer;
