import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Harbor University — Est. 1847",
  description: "Harbor University"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="announce">Veritas in Perpetuum · A Private Research University · Founded 1847</div>
        <header className="top">
          <Link href="/" className="brand">
            <span className="crest">HU</span>
            <span>
              Harbor University
              <span className="brand-sub">Est. 1847</span>
            </span>
          </Link>
          <nav>
            <Link href="/search">Academics</Link>
            <Link href="/comments">Student Life</Link>
            <Link href="/tools">Resources</Link>
            <Link href="/login" className="cta">MyHarbor</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer-inner">
            <div>
              <h4>Harbor University</h4>
              <p style={{ margin: 0, color: "#6b5757", fontSize: "0.85rem" }}>
                Serving clients since 1847.
              </p>
            </div>
            <div>
              <h4>Academics</h4>
              <Link href="/search">Overview</Link>
              <Link href="/search">Products</Link>
              <Link href="/search">Pricing</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link href="/comments">Student Life</Link>
              <Link href="/tools">Resources</Link>
              <Link href="/bounty">Security</Link>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="/.well-known/security.txt">security.txt</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="legal">
            <span>© {new Date().getFullYear()} Harbor University. All rights reserved.</span>
            <span>Est. 1847.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
