import { useEffect, useState } from 'react';
import type { ITrainer } from '../../data/MockTypes';
import Calendar from '../Calendar';
import styles from './Dashboard.module.scss';
import TrainerCard from '../TrainerCard';
import Footer from '../Footer';
import { SearchBox } from '@fluentui/react-components';

type IDashboardProps = {
    headerText: string;
    descriptionText: string;
    trainerData: ITrainer[];
    submit: (selectedSlot: string) => void;
}

const Dashboard = ({headerText, descriptionText, trainerData, submit}: IDashboardProps) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState<string>("");
    const [filteredTrainers, setFilteredTrainers] = useState(trainerData);
    const [searchText, setSearchText] = useState("");

    // Runs when searchText is modified
    useEffect(() => {
        // Update filtered trainers
        setFilteredTrainers(trainerData?.filter(trainer => 
            trainer.name?.toLowerCase().includes(searchText.toLocaleLowerCase())
            || trainer.title?.toLocaleLowerCase().includes(searchText.toLowerCase())
         ));

        // If a hidden slot is selected, clear it
        // This prevents accidentally selecting a hidden slot
        if (selectedSlot && !filteredTrainers.find(trainer => trainer.id === selectedSlot.split('-')[0])) {
            setSelectedSlot("");
        }
    }, [searchText, trainerData]);

    return (
        <form className={styles.dashboard}>
            <section className={styles.contentRow}>
                <section className={styles.calendarSection}>
                    <h1 className={styles.header}>{headerText}</h1>
                    <div className={styles.description}>{descriptionText}</div>
                    <Calendar selectedDate={selectedDate} onSelectedDate={setSelectedDate} />
                </section>
                <section className={styles.trainerSection}>
                    <section className={styles.filterRow}>
                        <SearchBox 
                            className={styles.searchBox}
                            placeholder="Search for trainers" 
                            size="large"
                            onChange={(_ev, data) => setSearchText(data.value)} value={searchText} 
                        />
                    </section>
                    {
                        filteredTrainers.map((trainer: ITrainer) => (
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
                    isSubmitBtnDisabled={!selectedSlot}
                    onSubmit={() => { setSearchText(''); submit(selectedSlot); } }
                />
            </section>
        </form>
    );
}

export default Dashboard;