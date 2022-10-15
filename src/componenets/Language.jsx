import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [showDesc, setShowDesc] = useState(false);
  // console.log(name, img, options);
  console.log(showDesc);
  return (
    <Container>
      <Container
        className="rounded-3 p-4"
        style={{ background: "peachpuff" }}
        onClick={() => setShowDesc(!showDesc)}
      >
        <Image src={img} width="70%"></Image>
        <h3 className="display-6">{name}</h3>
      </Container>
    </Container>
  );
};

export default Language;
