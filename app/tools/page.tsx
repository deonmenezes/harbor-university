"use client";
import { useState } from "react";

export default function Tools() {
  const [host, setHost] = useState("portal.harborU.example");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    const res = await fetch(`/api/ping?host=${encodeURIComponent(host)}`);
    setOut(await res.text());
    setLoading(false);
  }

  return (
    <>
      <h1>Help & Resources</h1>
      <p style={{ color: "#6b5757", fontStyle: "italic", maxWidth: 680 }}>
        Resources for students, faculty, staff, and alumni.
      </p>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Portal Reachability</h3>
        <p style={{ color: "#6b5757", fontSize: "0.95rem" }}>
          Verify that MyHarbor is reachable from your network.
        </p>
        <label>Hostname</label>
        <input value={host} onChange={(e) => setHost(e.target.value)} style={{ width: "70%", marginRight: "0.5rem" }} />
        <button onClick={run} disabled={loading}>{loading ? "Checking…" : "Check"}</button>
        {out && <pre style={{ marginTop: "1rem" }}>{out}</pre>}
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Contact Offices</h3>
        <table>
          <tbody>
                        <tr><th>Office of the Registrar</th><td>+1-617-555-0200 (Mon–Fri, 9am–5pm)</td></tr>
            <tr><th>Admissions Office</th><td>+1-617-555-0210</td></tr>
            <tr><th>IT Help Desk</th><td>+1-617-555-0240 (24/7)</td></tr>
            <tr><th>Email</th><td>help@harborU.example</td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
