import { iImage } from "../App/App.types";

export interface iImageGallery {
  onImageClick: (src: string, alt: string) => void;
  cards: iImage[];
}
