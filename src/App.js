// src/App.jsx

import { useState, useMemo } from "react";
import "./App.css";
import jobsData from "./data/jobs";
import JobCard from "./components/JobCard";
import Filters from "./components/Filters";

export default function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("All");
  const [sortAsc, setSortAsc] = useState(false);

  const filteredJobs = useMemo(() => {
    let filtered = jobsData.filter(job => {
      const matchSearch = job.title.toLowerCase().includes(search.toLowerCase());
      const matchLocation = location === "" || job.location === location;
      const matchType = type === "All" || job.type === type;

      return matchSearch && matchLocation && matchType;
    });

    if (sortAsc) {
      filtered = [...filtered].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return filtered;
  }, [search, location, type, sortAsc]);

  return (
    <div className="app">
      {/* Header */}
    <div className="header-wrapper">
  <div className="header">
    <div className="logo">💼</div>
    <div>
      <h1>JobBoard</h1>
      <p>Find your next opportunity</p>
    </div>
  </div>
</div>
<div className="content">
      <Filters
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
        sortAsc={sortAsc}
        setSortAsc={setSortAsc}
      />

      <p className="job-count">Showing {filteredJobs.length} jobs</p>

      <div className="job-grid">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      </div>
    </div>
  );
}