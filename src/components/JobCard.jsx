export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="card-header">
        <h3>{job.title}</h3>
        <span className={`badge ${job.type === "Internship" ? "intern" : "full"}`}>
          {job.type}
        </span>
      </div>

      <p className="company">🏢 {job.company}</p>
      <p className="location">📍 {job.location}</p>
    </div>
  );
}