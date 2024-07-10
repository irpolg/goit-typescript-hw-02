import css from "./LoadMoreBtn.module.css";
import { iLoadMoreBtn } from "./LoadMoreBtn.types";

export default function LoadMoreBtn({ onClick }: iLoadMoreBtn) {
  return (
    <button className={css.loadMore} type="button" onClick={onClick}>
      Load more...
    </button>
  );
}
