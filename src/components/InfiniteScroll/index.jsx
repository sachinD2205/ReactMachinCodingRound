import { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Card.module.css";
import ShimmerCard from "./ShimmerCard";
const InfiniteScroll = () => {
  const [mems, setMems] = useState([]);
  const [showShimmer, setShowShimmer] = useState(true);

  const fetchMemes = useCallback(async () => {
    try {
      const api = `https://meme-api.com/gimme/20`;
      const res = await fetch(api);
      const data = await res.json();
      setMems((prev) => [...prev, ...data.memes]);
      setShowShimmer(false);
    } catch (error) {
      setShowShimmer(false);
    }
  }, []);

  useEffect(() => {
    setShowShimmer(true);
    fetchMemes();
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.body.scrollHeight;
      const scroollYInnerHeight = scrollY + innerHeight;

      if (scroollYInnerHeight >= scrollHeight) {
        setShowShimmer(true);
        fetchMemes();
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMemes]);

  let shimmer = Array(8).fill("");

  return (
    <div>
      <div> Memes Page </div>
      <div className={styles.cardWrapper}>
        {mems?.map((data,index) => (
          <Card meme={data} key={`${data?.title}-${index}`} />
        ))}

        {showShimmer &&
          shimmer?.map((data, index) => <ShimmerCard key={index+1} />)}
      </div>
    </div>
  );
};

export default InfiniteScroll;
