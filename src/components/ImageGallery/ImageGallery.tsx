import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { iImageGallery } from "./ImageGallery.types";

export default function ImageGallery({ cards, onImageClick }: iImageGallery) {
  return (
    <ul className={css.gallery}>
      {cards.map((card) => (
        <li key={card.id}>
          <ImageCard
            card={card}
            onImageClick={() =>
              onImageClick(card.urls.regular, card.alt_description)
            }
          />
        </li>
      ))}
    </ul>
  );
}
