import { DismissCircleFilled } from '@fluentui/react-icons';
import type { IBookingData } from '../../data/MockTypes';
import styles from './BookedMenu.module.scss';

type IBookedMenuProps = {
    bookedData: IBookingData[] | null;
}

// TODO: Move this to a reusable module
const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(date);
}

const BookedMenu = ({ bookedData }: IBookedMenuProps) => {

    return (
        <section className={styles.bookedMenu}>
            <h2>Your Booked Appointments</h2>
            { !bookedData && <div className={styles.noBookings}>No bookings selected.</div> }
            { bookedData &&
                bookedData.map((item) => (
                    <div className={styles.bookedItem}>
                        <DismissCircleFilled role='button' className={styles.removeIcon} />
                        50 min Zoom Visit with {item.trainer.name} at {item.slot.time} on {formatDate(item.date)}
                    </div>
                ))
            }
        </section>
    );
}

export default BookedMenu;