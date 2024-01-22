import { useRef, useState } from "react";
import { node, string } from "prop-types";
import "./style.css";

const ButtonWithTracker = ({ children }) => {
  const btnRef = useRef(null);
  const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });
  const getMousePosition = (e) => {
    const { top, left } = btnRef.current.getBoundingClientRect();
    setmousePosition({
      y: e.clientY - top,
      x: e.clientX - left,
    });
  };
  return (
    <button
      className="btn-wrp"
      ref={btnRef}
      onMouseMove={getMousePosition}
      style={{ "--y": mousePosition.y + "px", "--x": mousePosition.x + "px" }}
    >
      <span className="btn-text">{children}</span>
    </button>
  );
};
export default ButtonWithTracker;
ButtonWithTracker.propTypes = {
  children: node.isRequired || string.isRequired,
};
