import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const warningObj = {
    duration: 2000,
    style: { border: "1px solid #713200", padding: "16px", color: "#713200" },
    icon: "⚠️",
    className: "",
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value;
    if (query.trim() === "") {
      toast("Please enter search term!", warningObj);
      return;
    }
    onSubmit(query);
    form.reset();
  };

  return (
    <header>
      <div></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
