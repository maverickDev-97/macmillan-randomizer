import { IconsSizes } from "../../types";

const RightArrowIcon = (size: IconsSizes) => {
    switch (size) {
        case IconsSizes.Large:
            return (
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="inherit" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            );
        default:
            return (
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="inherit" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            );
    };
};

export default RightArrowIcon;