const Services = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'BIM Modeling',
      description: 'Comprehensive Building Information Modeling services for accurate project visualization and planning.'
    },
    {
      icon: '📐',
      title: 'Architectural Design',
      description: 'Innovative architectural solutions combining aesthetics with functionality and sustainability.'
    },
    {
      icon: '🔧',
      title: 'Engineering Services',
      description: 'Structural, MEP, and civil engineering solutions for complex construction projects.'
    },
    {
      icon: '📊',
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery within budget and quality standards.'
    },
    {
      icon: '🏢',
      title: 'Construction Planning',
      description: 'Strategic construction planning with advanced scheduling and resource optimization.'
    },
    {
      icon: '💻',
      title: 'Digital Solutions',
      description: 'Cutting-edge digital tools and platforms for modern construction management.'
    }
  ]

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Services We Deliver</h2>
          <p className="services-description">
            Our comprehensive range of services covers every aspect of construction and design, 
            ensuring your project is handled with expertise from conception to completion.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span className="service-icon-emoji">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <a href="#contact" className="services-cta-button">
            <span>Have a project in mind? Let's talk →</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
