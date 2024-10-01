const FilterSidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FilterSidebar;
