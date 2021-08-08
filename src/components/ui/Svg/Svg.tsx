import React from "react";
import sprite from "../../../assets/img/sprite.svg";

type Props = {
  name: string;
} & React.HTMLAttributes<HTMLOrSVGElement>;

const Svg: React.FC<Props> = ({ name, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};

export default Svg;
