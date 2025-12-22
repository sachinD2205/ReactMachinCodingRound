import { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Card.module.css";
import ShimmerCard from "./ShimmerCard";
const InfiniteScroll = () => {
  const [mems, setMems] = useState([]);
  const [showShimmer, setShowShimmer] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMemes = useCallback(async () => {
    if (isLoading) return; // Prevent duplicate calls

    setIsLoading(true);
    setShowShimmer(true);
    try {
      const api = `https://meme-api.com/gimme/20`;
      const res = await fetch(api);
      const data = await res.json();
      setMems((prev) => {
        const newMems = [...prev, ...data.memes];
        // Keep only last 100 items in DOM for performance
        return newMems.length > 100 ? newMems.slice(-100) : newMems;
      });
      setShowShimmer(false);
    } catch (error) {
      setShowShimmer(false);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    fetchMemes();
  }, []); // Run only on mount

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.body.scrollHeight;
      const scroollYInnerHeight = scrollY + innerHeight;

      if (scroollYInnerHeight >= scrollHeight && !isLoading) {
        fetchMemes();
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMemes, isLoading]);

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
