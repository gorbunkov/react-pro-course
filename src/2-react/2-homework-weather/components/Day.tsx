/* Core */
import {FC} from "react";

export const Day: FC<DayProps> = (props: DayProps) => {
    const styles = ["day"]
    if (props.sunny) styles.push('sunny')
    if (props.rainy) styles.push('rainy')
    if (props.cloudy) styles.push('cloudy')
    return (
        <div className={styles.join(" ")}>
            <p>{props.name}</p>
            <span>{props.temperature}</span>
        </div>
    )
}

interface DayProps {
    sunny?: boolean,
    rainy?: boolean,
    cloudy?: boolean,
    name: string,
    temperature: number
}