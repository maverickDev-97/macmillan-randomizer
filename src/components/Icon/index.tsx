import { FC } from "react";
import RightArrowIcon from "./assets/RightArrowIcon";
import DeleteIcon from "./assets/DeleteIcon";
import { IconProps, IconsNames, IconsSizes } from "./types";

const Icon: FC<IconProps> = ({ name, size = IconsSizes.Small }) => {
  switch (name) {
    case IconsNames.RightArrow:
      return RightArrowIcon(size);
    case IconsNames.DeleteIcon:
      return DeleteIcon(size);
    default:
      return <></>;
  }
};

export default Icon;
