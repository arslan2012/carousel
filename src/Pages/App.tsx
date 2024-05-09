import { CSSProperties, useEffect, useState } from "react";
import styles from "./App.module.css";
import CarouselCard, { CarouselCardProps } from "../Components/CarouselCard";

const items: CarouselCardProps[] = [
  { src: "/a.avif", title: "A", href: "/a" },
  { src: "/b.avif", title: "B", href: "/b" },
  { src: "/c.avif", title: "C", href: "/c" },
  { src: "/d.avif", title: "D", href: "/d" },
];

export default function App({ interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  const getStyle = (index: number) => {
    const style: CSSProperties = {}
    // if (index === currentIndex) {
    //   style.display = "block";
    // } else {
    //   style.display = "none";
    // }
    style.transform = `translateX(${100 * (index - currentIndex)}%)`;
    return style;
  }

  return (
    <div className={styles.carousel}>
      {items.map((item, index) => (
        <div className={styles.item} style={getStyle(index)}>
          <CarouselCard {...item} key={item.title}/>
        </div>
      ))}
    </div>
  );
};
