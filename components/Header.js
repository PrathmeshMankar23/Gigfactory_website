'use client'

import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#', active: true },
    { name: 'Case Studies', href: '#', active: false },
    { name: 'Our Expertise', href: '#', active: false },
    { name: 'Project', href: '#', active: false },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo with flags and tagline */}
          <div className="logo-container">
            <div className="logo-text">
              <div className="logo-main">
                <span className="logo-gig">Gig</span>
                <span className="logo-factory">factory</span>
                <div className="logo-flags">
                  {/* India Flag */}
                  <svg className="flag-icon" viewBox="0 0 24 16" fill="none">
                    <rect width="24" height="16" fill="#FF9933"/>
                    <rect y="5.33" width="24" height="5.33" fill="white"/>
                    <rect y="10.67" width="24" height="5.33" fill="#138808"/>
                    <circle cx="12" cy="8" r="2" fill="#000080"/>
                  </svg>
                  {/* UK Flag */}
                  <svg className="flag-icon" viewBox="0 0 24 16" fill="none">
                    <rect width="24" height="16" fill="#012169"/>
                    <path d="M0 0L24 16M24 0L0 16" stroke="white" strokeWidth="2.67"/>
                    <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.33"/>
                    <path d="M12 0V16M0 8H24" stroke="white" strokeWidth="4"/>
                    <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="2.67"/>
                  </svg>
                </div>
              </div>
              <div className="logo-tagline">
                TECHNOLOGY ENABLED PLATFORM
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-list">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${item.active ? 'active' : ''}`}
              >
                {item.name}
              </a>
            ))}
            <button className="login-btn">
              Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              style={{ width: '24px', height: '24px' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav-list">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`mobile-nav-link ${item.active ? 'active' : ''}`}
                >
                  {item.name}
                </a>
              ))}
              <a href="#" className="mobile-nav-link">
                <button className="login-btn" style={{ width: '100%' }}>
                  Login
                </button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
