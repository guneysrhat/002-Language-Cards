import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Language from "./Language";
import { data } from "../helpers/data";

const Card = () => {
  console.log(data);
  return (
    <Container className="rounded-4 mt-4" style={{ background: "#F48B29" }}>
      <h1>Language</h1>
      <Row>
        {data.map((lang, index) => {
          return (
            <Col>
              <Language {...lang} key={index} />
              {/* return <Language lang={lang} />; */}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
