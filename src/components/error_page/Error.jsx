import React from "react";
import './Error.css';

function Error() {
  return (
    <ErrorPage
      frame77='./frame-77.png'
      x404ErrorWithACuteAnimalCuate11='./404-error.png'
      title="Opps something went wrong!"
      weAreUnableToFin="We are unable to find the page you are looking for."
      place="Back"
    />
  );
}

export default Error;

function ErrorPage(props) {
  const { frame77, x404ErrorWithACuteAnimalCuate11, title, weAreUnableToFin, place } = props;

  return (
    <div className="error-pagescreen">
      <div className="group-1879">
        <img className="frame-77" src={require(frame77).default} />
      </div>
      <img className="x404-error-with-a-cute-animal-cuate-1-1" src={require(x404ErrorWithACuteAnimalCuate11).default} />
      <div className="group-1914">
        <h1 className="title">
          {title}
        </h1>
        <div className="we-are-unable-to-fin">
          {weAreUnableToFin}
        </div>
        <div className="place">
          {place}
        </div>
      </div>
    </div>
  );
}