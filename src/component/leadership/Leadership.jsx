import React from "react";
import "./leadership.css";
import insideImg from "../../assets/heroimg.avif";

// Data for leaders
const leadersData = [
  { name: "mustafa jaffery", role: "co-founder & ce" },
  { name: "yahya jaffery", role: "co-founder & cio" },
  { name: "ali mehmood jaffery", role: "national sales manager" },
  { name: "nisar abbas", role: "co-founder & head of sales" },
  { name: "mehdi hassan haryani", role: "director" },
  { name: "zain sajjad", role: "cto" },
];

function Leadership() {
  return (
    <>
      <div className="header-text">
        <h2>Monit Leadership</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia dolor numquam nam soluta veniam. Eveniet cum
          voluptatem fugit quos magnam?
        </p>
      </div>

      <div className="container" id="leadership">
        {leadersData.map((leader, index) => (
          <div className="box" key={index}>
            <img src={insideImg} alt={`Portrait of ${leader.name}`} />
            <div className="text-data">
              <h4>{leader.name}</h4>
              <p>{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Leadership;

