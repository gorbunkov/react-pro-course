/* Core */
import {FC} from "react";

export const Day: FC<DayProps> = (props: DayProps) => {
    const styles = ["day", props.type];
    const weekdayName = new Intl.DateTimeFormat('ru-RU', { weekday: 'long'}).format(new Date(props.day));
    return (
        <div className={styles.join(" ")}>
            <p>{weekdayName}</p>
            <span>{props.temperature}</span>
        </div>
    );
}

interface DayProps {
    id: string,
    day: number,
    rainProbability: number,
    humidity: number,
    temperature: number,
    type: string,
}