import { CheckmarkCircleFilled } from '@fluentui/react-icons';
import styles from './SubmitConfirmation.module.scss';
import type { IBookingData } from '../../data/MockTypes';

type ISubmitConfirmationProps = {
    onClose: () => void;
    text: string;
    bookedData: IBookingData;
}

// TODO: Move this to a reusable module
const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(date);
}


const SubmitConfirmation = ({ text, bookedData, onClose }: ISubmitConfirmationProps) => {
    
    return (
        <div role="status" aria-live="polite" className={styles.submitConfirmation}>
            <CheckmarkCircleFilled className={styles.checkmark} />
            <h1>{text}</h1>
            {/* The below component is very similar to TrainerCard, but different enough to warrant rendering separately. 
                As an area for improvement I may ask design if this component is intentionally styled different or if it can be consolidated.
            */}
            <div className={styles.trainerConfirmCard}>
                <div className={styles.trainerInfo}>
                    <div className={styles.photo}>
                        <img src={bookedData.trainer.image} alt={`Photo of ${bookedData.trainer.name}`} />
                    </div>
                    <div className={styles.name}>{bookedData.trainer.name}</div>
                    <div className={styles.title}>{bookedData.trainer.title}</div>
                    <div className={styles.details}>
                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Date: </span>
                            <span className={styles.detailValue}>{formatDate(bookedData.date)}</span>
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Time: </span>
                            <span className={styles.detailValue}>{bookedData.slot.time} (PT)</span> {/* Timezones assumed out of scope for this demo */}
                        </div>

                        <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Duration: </span>
                            <span className={styles.detailValue}>50 min Zoom Visit</span> {/* Assumed out of scope for this demo */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.navigation}>
                <div className='btn primary' onClick={() => onClose()}>Back to Dashboard</div>
                <div className='btn secondary'>Add to Calendar</div> {/* Does nothing - assumed out of scope for this demo */}
            </div>
        </div>
    );
}

export default SubmitConfirmation;