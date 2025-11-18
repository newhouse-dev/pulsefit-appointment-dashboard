import type { ITimeSlot } from '../../data/MockTypes';
import styles from './TimeSlot.module.scss';

type ITimeSlotProps = {
    slot: ITimeSlot;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

const TimeSlot = ({ slot, isSelected, onSelect }: ITimeSlotProps) => (
    <div 
        role='button' 
        aria-pressed={isSelected} 
        className={[
            styles.timeSlot, 
            isSelected ? styles.selected : '',
            slot.isAvailable ? '' : styles.disabled].join(' ')} 
        onClick={() => slot.isAvailable && onSelect(slot.id)}
    >
        {slot.time}
    </div>
);

export default TimeSlot;