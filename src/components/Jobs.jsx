import React, { useState, useEffect } from 'react';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Fetch job data
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch('./data.json');
      const data = await res.json();
      setJobs(data);
      setFilteredJobs(data);
    };

    fetchJobs();
  }, []);

  // Handle filter click event
  const handleFilter = (type) => {
    if (!filters.includes(type)) {
      setFilters((prevFilters) => [...prevFilters, type]);
    }
  };

  // Remove filter
  const removeFilter = (type) => {
    setFilters((prevFilters) => prevFilters.filter((filter) => filter !== type));
  };

  // Update filtered jobs based on active filters
  useEffect(() => {
    if (filters.length === 0) {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter((job) =>
        filters.every((filter) => job.role === filter || job.level === filter || job.languages.includes(filter) || job.tools.includes(filter))
      );
      setFilteredJobs(filtered);
    }
  }, [filters, jobs]);

  return (
    <div className="jobs">
      {/* Filter section */}
      {filters.length > 0 && (
        <div className="filter-sub">
          {filters.map((filter, index) => (
            <div key={index} className="filter-item">
              <p>{filter}</p>
              <button onClick={() => removeFilter(filter)}>
                <img src="assets/icon-remove.svg" alt="remove" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Job Listings */}
      <div className="job-list">
        {filteredJobs.map((job) => (
          <div key={job.id} className={`container ${job.featured ? 'featured' : ''}`}>
            <img src={job.logo} alt={job.company} />
            <div className="head">
              <div className="wrapper">
                <div className="top">
                  <h2>{job.company}</h2>
                  <div className="stat">
                    {job.new && <span className="new">New!</span>}
                    {job.featured && <span className="featured">Featured</span>}
                  </div>
                </div>
                <a href="#">{job.position}</a>
                <ul className="availability">
                  <li>{job.postedAt}</li>
                  <li>{job.contract}</li>
                  <li>{job.location}</li>
                </ul>
              </div>
              <hr />
              <div className="tags">
                <button onClick={() => handleFilter(job.role)}>{job.role}</button>
                <button onClick={() => handleFilter(job.level)}>{job.level}</button>
                {job.languages.map((lang, index) => (
                  <button key={index} onClick={() => handleFilter(lang)}>{lang}</button>
                ))}
                {job.tools.map((tool, index) => (
                  <button key={index} onClick={() => handleFilter(tool)}>{tool}</button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clear Filters Button */}
      {filters.length > 0 && (
        <button className="clear" onClick={() => setFilters([])}>
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default Jobs;
