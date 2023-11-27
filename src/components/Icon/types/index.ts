export enum IconsNames {
  RightArrow = "RIGHT_ARROW",
  DeleteIcon = "DELETE_ICON",
  MoonIcon = "MOON_ICON",
  SunIcon = "SUN_ICON",
}

export enum IconsSizes {
  Large = "LARGE",
  Small = "SMALL",
}

export interface IconProps {
  name: IconsNames;
  size?: IconsSizes;
}
