import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="est">Est. 1847 · Veritas in Perpetuum</div>
        <h1>A tradition of scholarship. A future of discovery.</h1>
        <p className="lead">
          Harbor University has educated generations of scholars, scientists, and civic leaders for more than 175 years. Rigorous inquiry remains our hallmark.
        </p>
        <div className="hero-actions">
          <Link href="/login" className="btn-primary">MyHarbor Login</Link>
          <Link href="/search" className="btn-ghost">Explore Academics</Link>
        </div>
      </section>

      <section className="stats">
                <div className="stat"><strong>28K</strong><span>Students enrolled</span></div>
        <div className="stat"><strong>112</strong><span>Degree programs</span></div>
        <div className="stat"><strong>4</strong><span>Campuses worldwide</span></div>
        <div className="stat"><strong>22</strong><span>Nobel laureates</span></div>
      </section>

      <div className="section-title">
        <h2>Schools & Colleges</h2>
        <div className="divider" />
        <p>Twelve schools and colleges, united in the pursuit of truth.</p>
      </div>

      <section className="features">
                <div className="feature">
          <div className="icon">A</div>
          <h3>Arts & Humanities</h3>
          <p>From classics to comparative literature, our humanities faculty shape the conversation.</p>
        </div>
        <div className="feature">
          <div className="icon">S</div>
          <h3>Sciences & Engineering</h3>
          <p>Research institutes in physics, computer science, and bioengineering.</p>
        </div>
        <div className="feature">
          <div className="icon">B</div>
          <h3>Harbor Business</h3>
          <p>Full-time MBA, executive MBA, and specialized masters programs.</p>
        </div>
        <div className="feature">
          <div className="icon">L</div>
          <h3>Harbor Law</h3>
          <p>One of the nation's oldest law schools, with clinics across six practice areas.</p>
        </div>
      </section>

      <div className="section-title">
        <h2>From Our Community</h2>
        <div className="divider" />
      </div>

      <section>
                <div className="testimonial">"Harbor doesn't just teach you to answer questions. It teaches you which questions are worth asking."<cite>Class of 2014, now a civil rights attorney</cite></div>
        <div className="testimonial">"The faculty pushed me harder than I've ever been pushed, and I'm a better scholar for it."<cite>PhD candidate, Physics</cite></div>
      </section>
    </>
  );
}
