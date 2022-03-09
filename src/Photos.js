import React from "react";
import "./Photos.css";

export default function Photo(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div classname="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <img src={photo.src.landscape} className="img-fluid" />;
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
