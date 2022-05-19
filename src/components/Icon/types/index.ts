export enum IconsNames {
    RightArrow = "RIGHT_ARROW",
};

export enum IconsSizes {
    Large = "LARGE",
    Small = "SMALL",
};

export interface IconProps {
    name: IconsNames;
    size?: IconsSizes;
};