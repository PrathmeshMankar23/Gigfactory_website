'use client'

import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#', active: true },
    { name: 'Case Studies', href: '#case-studies', active: false },
    { name: 'Our Expertise', href: '#expertise', active: false },
    { name: 'Projects', href: '#projects', active: false },
    { name: 'Login', href: '#login', active: false },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo Section */}
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
                TECHNOLOGY ENABLE PLATFORM
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div style={{display: 'flex', alignItems: 'center', marginLeft: '40px', gap: '20px'}}>
            <a href="#" style={{padding: '8px 16px', border: '2px solid black', background: 'white', textDecoration: 'none', color: 'black'}}>Home</a>
            <a href="#case-studies" style={{padding: '8px 16px', border: '2px solid black', background: 'white', textDecoration: 'none', color: 'black'}}>Case Studies</a>
            <a href="#expertise" style={{padding: '8px 16px', border: '2px solid black', background: 'white', textDecoration: 'none', color: 'black'}}>Our Expertise</a>
            <a href="#projects" style={{padding: '8px 16px', border: '2px solid black', background: 'white', textDecoration: 'none', color: 'black'}}>Projects</a>
            <a href="#login" style={{padding: '8px 16px', border: '2px solid black', background: 'white', textDecoration: 'none', color: 'black'}}>Login</a>
          </div>

          {/* DEBUG: Simple test navigation */}
          <div style={{display: 'flex', gap: '20px', marginLeft: '40px'}}>
            <button style={{padding: '8px 16px', border: '2px solid black', background: 'white'}}>Test 1</button>
            <button style={{padding: '8px 16px', border: '2px solid black', background: 'white'}}>Test 2</button>
            <button style={{padding: '8px 16px', border: '2px solid black', background: 'white'}}>Test 3</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
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
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
