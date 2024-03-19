import React, { useState } from "react"
import { features } from "src/constants"

const Features = () => {
  return (
    <section className="features">
      <h2 className="features-title">Features</h2>
      <ul className="features-list">
        {features.map((feature, index) => {
          const positionLeft = index % 2 === 0
          return (
            <div key={feature.id} className="feature-img-item">
              {positionLeft ? (
                <img src={feature.img} alt="" className="feature-img" />
              ) : (
                ""
              )}
              <li className="hover-group feature-item">
                {React.createElement(feature.icon, {
                  className: "feature-icon",
                })}
                {/* <img src={feature.icon} alt="" className="feature-icon" /> */}
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-content">{feature.content}</p>
              </li>
              {!positionLeft ? (
                <img src={feature.img} alt="" className="feature-img" />
              ) : (
                ""
              )}
            </div>
          )
        })}
      </ul>
    </section>
  )
}

export default Features
