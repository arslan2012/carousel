import styles from "./CarouselCard.module.css";

export interface CarouselCardProps {
  src: string;
  title: string;
  href: string;
}

export default function CarouselCard({ src, title, href }: CarouselCardProps) {
  return (
    <div className={styles.container}>
      <img src={src} alt={title} className={styles.backgroundImage}/>
      <div className={styles.overlayText}>{title}</div>
      <a className={styles.button} href={href}>View</a>
    </div>
  );
}
