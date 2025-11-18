import { DismissCircleFilled } from '@fluentui/react-icons';
import type { IBookingData } from '../../data/MockTypes';
import styles from './BookedMenu.module.scss';

type IBookedMenuProps = {
    bookedData: IBookingData[] | null;
    removeBooking: (slotId: string) => void;
}

// TODO: Move this to a reusable module
const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(date);
}

const BookedMenu = ({ bookedData, removeBooking }: IBookedMenuProps) => {

    return (
        <section className={styles.bookedMenu}>
            <h2>Your Booked Appointments</h2>
            { !bookedData?.length && <div className={styles.noBookings}>You currently do not have any bookings.  Please book an appointment below.</div> }
            { !!bookedData?.length &&
                bookedData.map((item) => (
                    <div className={styles.bookedItem}>
                        {/* Ideally this should also include a confirmation dialog before removing the data, not implemented for simplicity */}
                        <DismissCircleFilled role='button' className={styles.removeIcon} onClick={() => removeBooking(item.slot.id)} />
                        50 min Zoom Visit with {item.trainer.name} at {item.slot.time} on {formatDate(item.slot.date)}
                    </div>
                ))
            }
        </section>
    );
}

export default BookedMenu;