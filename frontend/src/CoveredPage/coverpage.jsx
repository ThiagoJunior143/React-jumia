import Carcel from "./Carcel";
import "./coverpage.css";
import FlashPage from "./Flash";
import { Sliding } from "./Sliding";

const Cover = () => {
  return (
    <section className="covered">
      <Carcel />
      <Sliding />
      <FlashPage />
    </section>
  );
};

export default Cover;
