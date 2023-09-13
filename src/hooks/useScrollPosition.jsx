import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [isBottom, setIsBottom] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      //   window.innerHeight; // height of visible window
      //   document.documentElement.scrollTop; // distance scrolled from top of page
      //   document.documentElement.offsetHeight; // all height of application

      setIsBottom(
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight
      );
    });
  }, []);
  return { isBottom };
}
