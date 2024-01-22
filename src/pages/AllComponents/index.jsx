import ButtonWithTracker from "../../components/Buttons";
import { Card } from "../../components/Card";

const Page = () => {
  return (
    <div>
      <div className="code__container">
        <Card
          title="hello"
          image="https://ilhomjon.dev/assets/me-IPe1xW0e.png"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nemo eum soluta tempora, ut, tempore illo aliquam sit laudantium adipisci, laboriosam explicabo? Distinctio magni, repudiandae consequatur unde sed et saepe."
          link="https://ilhomjon.dev"
        />
      </div>
      <div className="code__container">
        <ButtonWithTracker children="Hello" />
      </div>
    </div>
  );
};

export default Page;
