import css from "./ImageCard.module.css";
import { iImageCard } from "./ImageCard.types";

export default function ImageCard({ card, onImageClick }: iImageCard) {
  return (
    <div className={css.divCard}>
      <img
        className={css.imgCard}
        src={card.urls.small}
        alt={card.alt_description}
        onClick={onImageClick}
      />
      <ul className={css.descriptionUl}>
        <li>
          <p>Photo by {card.user.name}</p>
        </li>
        <li>
          <p>Likes: {card.likes}</p>
        </li>
      </ul>
    </div>
  );
}
