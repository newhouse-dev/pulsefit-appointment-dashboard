import { useState } from 'react';
import styles from './Calendar.module.scss';
import { DayPicker } from 'react-day-picker';

type ICalendarProps = {
    selectedDate: Date;
    onSelectedDate: (date: Date) => void;
}

const Calendar = ({ selectedDate, onSelectedDate }: ICalendarProps) => {
    const [month, setMonth] = useState(new Date());

    return (
        <div className={styles.calendarWrapper}>
            <DayPicker
                mode="single"
                month={month}
                onMonthChange={setMonth}
                fixedWeeks
                showOutsideDays
                selected={selectedDate}
                onSelect={(date: Date | null | undefined) => onSelectedDate(date || new Date())}
                className={styles.calendar}
            />
        </div>
    );
}

export default Calendar;