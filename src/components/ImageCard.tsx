import Image from "next/image";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({ image }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className="card"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <Image src={image} alt="" height={500} width={500} />
    </animated.div>
  );
}

export default Card;
