import type { ITrainer } from '../../data/MockTypes';
import TimeSlot from '../TimeSlot';
import styles from './TrainerCard.module.scss';

type ITrainerCardProps = {
    trainer: ITrainer;
    selectedSlot: string;
    setSelectedSlot: (id: string) => void;
}

const TrainerCard = ({ trainer, selectedSlot: selected, setSelectedSlot }: ITrainerCardProps) => (
    <div className={styles.trainerCard}>
        <div className={styles.trainerInfo}>
            <div className={styles.photo}>
                <img src={trainer.image} alt={`Photo of ${trainer.name}`} />
            </div>
            <div className={styles.trainerNameTitle}>
                <div className={styles.name}>{trainer.name}</div>
                <div className={styles.title}>{trainer.title}</div>
            </div>
        </div>
        <div className={styles.trainerAvailibility}>
            {trainer.availability.map((slot) => (
                <TimeSlot slot={slot} isSelected={selected === slot.id} onSelect={setSelectedSlot} />
            ))}
        </div>
    </div>
);

export default TrainerCard;