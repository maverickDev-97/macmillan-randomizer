import { FC } from "react";
import RightArrowIcon from "./assets/RightArrowIcon";
import { IconProps, IconsNames, IconsSizes } from "./types";

const Icon: FC<IconProps> = ({ name, size = IconsSizes.Small }) => {
    switch (name) {
        case IconsNames.RightArrow:
            return RightArrowIcon(size)
        default:
            return (
                <>
                </>
            )
    }
}

export default Icon;