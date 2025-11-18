import { useState } from 'react';
import type { ITrainer } from '../../data/MockTypes';
import Calendar from '../Calendar';
import styles from './Dashboard.module.scss';
import TrainerCard from '../TrainerCard';
import Footer from '../Footer';

type IDashboardProps = {
    headerText: string;
    descriptionText: string;
    trainerData: ITrainer[];
    submit: (selectedSlot: string, selectedDate: Date) => void;
}

const Dashboard = ({headerText, descriptionText, trainerData, submit}: IDashboardProps) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState<string>("");

    return (
        <form className={styles.dashboard}>
            <section className={styles.contentRow}>
                <section className={styles.calendarSection}>
                    <h1 className={styles.header}>{headerText}</h1>
                    <div className={styles.description}>{descriptionText}</div>
                    <Calendar selectedDate={selectedDate} onSelectedDate={setSelectedDate} />
                </section>
                <section className={styles.trainerSection}>
                    {
                        trainerData.map((trainer: ITrainer) => (
                            <TrainerCard key={trainer.id} trainer={trainer} selectedSlot={selectedSlot} setSelectedSlot={setSelectedSlot}  />
                        ))
                    }
                </section>
            </section>
            <section className={styles.footer}>
                <Footer 
                    contactLinkLabel='Contact us' 
                    contactLinkUrl='#' 
                    contactText='Need help scheduling?' 
                    submitBtnLabel='Book this visit' 
                    onSubmit={() => submit(selectedSlot, selectedDate)} 
                />
            </section>
        </form>
    );
}

export default Dashboard;