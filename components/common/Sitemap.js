const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Services", url: "/services" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Trust", url: "/trust" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Construction Management", url: "/services/construction" },
        { name: "Project Planning", url: "/services/planning" },
        { name: "BIM Integration", url: "/services/bim" },
        { name: "Quality Assurance", url: "/services/quality" },
        { name: "Risk Management", url: "/services/risk" },
        { name: "Cost Control", url: "/services/cost" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", url: "/blog" },
        { name: "Documentation", url: "/docs" },
        { name: "Support", url: "/support" },
        { name: "Contact", url: "/contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Our Story", url: "/about/story" },
        { name: "Team", url: "/about/team" },
        { name: "Careers", url: "/careers" },
        { name: "Partners", url: "/partners" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" },
        { name: "Cookie Policy", url: "/cookies" }
      ]
    }
  ]

  return (
    <section className="sitemap-section">
      <div className="container">
        <div className="sitemap-header">
          <h2 className="sitemap-title">Site Map</h2>
          <p className="sitemap-subtitle">
            Complete overview of website structure and navigation
          </p>
        </div>

        <div className="sitemap-grid">
          {sitemapSections.map((section, index) => (
            <div key={index} className="sitemap-column">
              <h3 className="sitemap-section-title">{section.title}</h3>
              <ul className="sitemap-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="sitemap-link">
                    <a href={link.url} className="sitemap-anchor">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="sitemap-footer">
          <p className="sitemap-footer-text">
            © 2024 Gigfactory. All rights reserved.
          </p>
          <div className="sitemap-footer-links">
            <a href="/privacy" className="footer-link">Privacy Policy</a>
            <span className="footer-separator">•</span>
            <a href="/terms" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sitemap
