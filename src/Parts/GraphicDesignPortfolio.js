import React from "react";
import { Fade } from "react-reveal";

export default function GraphicDesignPortfolio({ data }) {
  console.log(data);
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-2" key={index}>
            <div className="gdportfolio-container">
              <Fade bottom delay={100 * index}>
                <a
                  className="card border-0"
                  type="link"
                  href={item.linkToImg}
                  target="_blank"
                >
                  <img
                    className="designportfolio-img"
                    src={item.imageUrl}
                    alt={item.name1}
                  />
                </a>
              </Fade>
              <p className="designportfolio-name">{item.name1}</p>
              <p className="designportfolio-date">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
