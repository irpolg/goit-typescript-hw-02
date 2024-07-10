import { iImage } from "../App/App.types";

export interface iImageCard {
  onImageClick: () => void;
  card: iImage;
}
