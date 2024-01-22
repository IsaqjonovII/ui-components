import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import "./style.css";

export function Card({ title, image, description, link }) {
  return (
    <CardContainer className="card-container">
      <CardBody className="card-body">
        <CardItem translateZ={50} translateX={10} translateY={10}>
          <h1 style={{ display: "inline" }}>{title}</h1>
        </CardItem>
        <CardItem translateZ={20} translateX={10} translateY={10}>
          <img width="100%" height="200px" src={image} alt={title} />
        </CardItem>
        <CardItem translateZ={50} translateX={10} translateY={10}>
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
