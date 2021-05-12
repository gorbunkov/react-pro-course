/* Core */
import {FC} from "react";

export const Head: FC = () => {
    return (
        <div className="head">
            <div className="icon cloudy"></div>
            <div className="current-date">
                <p>Пятница</p>
                <span>29 ноября</span>
            </div>
        </div>
    )
}