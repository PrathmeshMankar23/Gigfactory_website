'use client'

import { useState } from 'react'

const Advantages = () => {
  const [activeWord, setActiveWord] = useState(null)

  const handleClick = (word) => {
    setActiveWord(word)
    console.log(word + ' clicked')
  }

  return (
    <section className="advantages-section">
      <div className="container">

        {/* Header */}
        <div className="advantages-header">
          <h2 className="advantages-title">
            Advantages of Working With Gigfactory
          </h2>
          <div className="underline"></div>
          <p className="advantages-subtitle">
            We don't just support projects — we improve performance across time, cost,
            coordination, and lifecycle value.
          </p>
        </div>

        {/* Word Cloud */}
        <div className="word-cloud">

          <span className="tag active">KPI Visualization</span>
          <span className="tag active">Proactive maintenance</span>
          <span className="tag active">Delay Analysis</span>

          <span className="tag active large">Design Clarity</span>
          <span className="tag active medium">Clash-Free Execution</span>
          <span className="tag active large">Integrated Coordination</span>
          <span className="tag active medium">Smart Collaboration</span>
          <span className="tag active">Model-based discussions</span>
          <span className="tag active medium">Structured workflows</span>
          <span className="tag active">Clear construction intent</span>
          <span className="tag active small">Reduced design conflicts</span>
          <span className="tag active large">Better interdisciplinary coordination</span>
          <span className="tag active medium">Efficient sequencing</span>
          <span className="tag active">Real-time coordination</span>
          <span className="tag active large">Improved site productivity</span>
          <span className="tag active medium">Reduced bottlenecks</span>
          <span className="tag active">Faster decision cycles</span>
          <span className="tag active small">Safer execution</span>
          <span className="tag active medium">Reduced delays</span>
          <span className="tag active">Improved compliance</span>
          <span className="tag active large">Risk mitigation strategies</span>
          <span className="tag active medium">Data-driven operations</span>
          <span className="tag active">Long-term cost savings</span>
          <span className="tag active small">Asset performance tracking</span>
          <span className="tag active large">Lifecycle optimization</span>
          <span className="tag active medium">Digital continuity</span>
          <span className="tag active small">Accurate BOQ</span>
          <span className="tag active medium">Reduced cost overruns</span>
          <span className="tag active">Quantity validation</span>
          <span className="tag active large">Procurement optimization</span>
          <span className="tag active medium">Waste reduction</span>
          <span className="tag active small">Cost forecasting</span>
          <span className="tag active">Budget tracking</span>
          <span className="tag highlight" onClick={() => handleClick('Intelligence')}>
            Intelligence
          </span>
          <span className="tag active small">Resource</span>
          <span className="tag active">Risk Reduction</span>

          <span className="tag active">Better decision-making</span>

          <span className="tag active small">Reduced design conflicts</span>
          <span className="tag active small">Accelerated delivery</span>
          <span className="tag highlight" onClick={() => handleClick('Optimize Cost')}>
            Optimize Cost
          </span>
        </div>

        {/* CTA Button */}
        <div className="advantages-cta">
          <button className="advantages-button">
            <span>Looking for smarter construction solutions? Let's Talk →</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Advantages