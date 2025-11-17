import { useState } from 'react';
import type { ITrainer } from '../../data/MockTypes';
import Calendar from '../Calendar';
import styles from './Dashboard.module.scss';
import TrainerCard from '../TrainerCard';

type IDashboardProps = {
    headerText: string;
    descriptionText: string;
    trainerData: ITrainer[];
}

const Dashboard = ({headerText, descriptionText, trainerData}: IDashboardProps) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    console.log({selectedDate});

    return (
        <div className={styles.dashboard}>
            <div className={styles.calendarSection}>
                <h1 className={styles.header}>{headerText}</h1>
                <div className={styles.description}>{descriptionText}</div>
                <Calendar selectedDate={selectedDate} onSelectedDate={setSelectedDate} />
            </div>
            <div className={styles.trainerSection}>
                {
                    trainerData.map((trainer: ITrainer) => (
                        <TrainerCard trainer={trainer} />
                    ))
                }
            </div>
        </div>
    );
}

export default Dashboard;