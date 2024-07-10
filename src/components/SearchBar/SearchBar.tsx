import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";
import { iSearchBar } from "./SearchBar.types";

export default function SearchBar({ onSearch }: iSearchBar) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const query = form.elements.namedItem("searchImage") as HTMLInputElement;
    query.value.trim() === ""
      ? toast.error("Error! Field can not be empty!")
      : onSearch(query.value);
    form.reset();
  };

  return (
    <header className={css.header}>
      <Toaster position="top-left" />
      <form onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          name="searchImage"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          <IoSearchOutline className={css.searchIcon} />
        </button>
      </form>
    </header>
  );
}
