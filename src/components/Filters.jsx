export default function Filters({
  search,
  setSearch,
  location,
  setLocation,
  type,
  setType,
  sortAsc,
  setSortAsc
}) {
  return (
    <>
      {/* Search */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search jobs by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filters Row */}
      <div className="filters">
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
        </select>

        <div className="type-filter">
          {["All", "Internship", "Full-time"].map(t => (
            <button
              key={t}
              className={type === t ? "active" : ""}
              onClick={() => setType(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <button className="sort-btn" onClick={() => setSortAsc(!sortAsc)}>
          A → Z
        </button>
      </div>
    </>
  );
}