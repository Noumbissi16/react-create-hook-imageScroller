import { useEffect, useState } from "react";
import ImageList from "./components/ImageList/ImageList";
import s from "./App.module.css";
import { useScrollPosition } from "./hooks/useScrollPosition";
import axios from "axios";

export function App() {
  const { isBottom } = useScrollPosition();

  const [imageList, setImageList] = useState([]);
  const [pageToFetch, setPageToFetch] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchImagesByPage(pageNumber) {
    setIsLoading(true);
    const { data } = await axios(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=5`
    );
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchImagesByPage(pageToFetch);
  },[pageToFetch]);

  function increasePage() {
    setPageToFetch(pageToFetch + 1);
  }
  useEffect(() => {
    if (isBottom) {
      increasePage();
    }
  },[isBottom]);

  return (
    <div className={s.root}>
      <h1>Random Images</h1>
      <h2>Download random open source images</h2>
      <ImageList imageList={imageList} />

      {isLoading && <div className="spinner-border" role="status" />}
    </div>
  );
}
