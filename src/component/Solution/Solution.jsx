import React from "react";
import "./solution.css";

const services = [
  {
    title: "Locally sourced hardware and software",
    description:
    "Track everything from anywhere, anytime.",
  },
  {
    title: "Fully customized solution",
    description: "Track everything from anywhere, anytime.",
  },
  {
    title: "Integrated GPS tracker",
    description: "Track everything from anywhere, anytime.",
  },
  {
    title: "Integrated GPS tracker",
    description: "Track everything from anywhere, anytime.",
  },
  {
    title: "Integrated GPS tracker",
    description: "Track everything from anywhere, anytime.",
  },
];

function Solution() {
  return (
    <div id="solution">
      <div className="container section">
        <div className="row">
          <div className="text-section col-md-12">
            <h2 className="section-head">Monit solution</h2>
            <p className="paragraph-text">
              Drive cost efficiency, improve customer experience, and promote
              sustainability <br /> with innovative IoT solutions tailored to
              your organization’s unique needs.
            </p>
          </div>

          {services.map((service, index) => (
            <div className="col-md-2" key={index}>
              <ServiceBox title={service.title} description={service.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ServiceBox = ({ title, description }) => (
  <div className="service-box">
    <i className="fas fa-anchor" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Solution;
