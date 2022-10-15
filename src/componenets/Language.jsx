import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [showDesc, setShowDesc] = useState(true);
  // console.log(name, img, options);
  console.log(showDesc);
  return (
    <Container
      className="rounded-3 p-4 h-100 lang-card"
      style={{ background: "peachpuff" }}
      onClick={() => setShowDesc(!showDesc)}
      type="button"
    >
      {showDesc && (
        <Container>
          <Image className="lang-logo" src={img} width="70%"></Image>
          <h3 className="display-6 ">{name}</h3>
        </Container>
      )}
      {!showDesc && (
        <ul className="h-100">
          {options.map((item) => {
            return <li className="h5 text-start">{item}</li>;
          })}
        </ul>
      )}
    </Container>
  );
};

export default Language;
