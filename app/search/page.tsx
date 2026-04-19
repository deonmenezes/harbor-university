export default function Search({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q ?? "";
  const products = [
        { name: "Harbor College (Undergraduate)", desc: "A four-year liberal arts curriculum with 52 majors and 3,500 undergraduates per class." },
    { name: "Graduate School of Arts & Sciences", desc: "48 PhD programs and 21 terminal master's programs in humanities and sciences." },
    { name: "Harbor Business School", desc: "Full-time MBA, EMBA, and specialized masters programs with renowned case-method teaching." },
    { name: "Harbor Law School", desc: "JD, LLM, and SJD degrees with concentrations from constitutional law to international finance." },
    { name: "Harbor School of Medicine", desc: "MD, MD-PhD, and professional health masters programs affiliated with Harbor Hospital." },
    { name: "Summer & Executive Programs", desc: "Non-degree offerings for working professionals, including online and on-campus." }
  ];
  const filtered = q ? products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.desc.toLowerCase().includes(q.toLowerCase())) : products;

  return (
    <>
      <h1>Programs of Study</h1>
      <p style={{ color: "#6b5757", fontStyle: "italic", maxWidth: 680 }}>
        Over 112 degree programs across Harbor's twelve schools and colleges.
      </p>

      <form method="get" style={{ margin: "2rem 0" }}>
        <input name="q" defaultValue={q} placeholder="Search programs, departments, and faculty..." style={{ width: "70%", marginRight: "0.5rem" }} />
        <button type="submit">Search</button>
      </form>

      {q && (
        <div className="card" style={{ background: "#f3ecd6", borderTop: "3px solid #d4a017" }}>
          <p style={{ margin: 0, color: "#6b5757" }}>
            Showing results for: <strong><span dangerouslySetInnerHTML={{ __html: q }} /></strong>
          </p>
        </div>
      )}

      <div>
        {filtered.map((p) => (
          <div key={p.name} className="card">
            <h3 style={{ margin: "0 0 0.5rem" }}>{p.name}</h3>
            <p style={{ margin: 0, color: "#6b5757" }}>{p.desc}</p>
            <p style={{ marginTop: "0.75rem", marginBottom: 0 }}>
              <a href="#">Learn more →</a>
            </p>
          </div>
        ))}
        {filtered.length === 0 && <p style={{ color: "#6b5757", fontStyle: "italic" }}>No results matched your search.</p>}
      </div>
    </>
  );
}
