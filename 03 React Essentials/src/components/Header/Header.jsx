import reactImg from "../../assets/react-core-concepts.png"; // .. two dir up
import "./Header.css";

const reactDescription = ["Fundamental", "Core", "Crucial"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// React component
export default function Header() {
  const description = reactDescription[getRandomInt(2)];

  // JSX
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
