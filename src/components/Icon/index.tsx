import { FC } from "react";
import RightArrowIcon from "./assets/RightArrowIcon";
import DeleteIcon from "./assets/DeleteIcon";
import { IconProps, IconsNames, IconsSizes } from "./types";
import { MoonIcon } from "./assets/MoonIcon";
import { SunIcon } from "./assets/SunIcon";

const Icon: FC<IconProps> = ({ name, size = IconsSizes.Small }) => {
  switch (name) {
    case IconsNames.RightArrow:
      return RightArrowIcon(size);
    case IconsNames.DeleteIcon:
      return DeleteIcon(size);
    case IconsNames.MoonIcon:
      return MoonIcon(size);
    case IconsNames.SunIcon:
      return SunIcon(size);
    default:
      return <></>;
  }
};

export default Icon;
