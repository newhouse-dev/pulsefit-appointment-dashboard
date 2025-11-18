import { PersonFilled, CaretDownFilled, CaretUpFilled } from '@fluentui/react-icons';
import styles from './Header.module.scss';
import { useState } from 'react';
import BookedMenu from '../BookedMenu';
import type { IBookingData } from '../../data/MockTypes';

type IHeaderProps = {
    logo?: string;
    logoUrl?: string;
    user: string;
    bookedData: IBookingData[] | null;
}

const Header = ({ logo, logoUrl, user, bookedData }: IHeaderProps) => {
    const [openBooked, setOpenBooked] = useState(false);

    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <div role='banner' className={styles.logo}>
                    { logo && <a href={logoUrl}><img src={logo} alt='PulseFit Logo' /></a> }
                </div>
                <div role='button' className={styles.userDropdown} onClick={() => setOpenBooked(!openBooked)}>
                    <PersonFilled className={styles.userIcon} />
                    <div className={styles.userDisplayName}>{user}</div>
                    { openBooked
                        ? <CaretUpFilled className={styles.dropdownIcon} />
                        : <CaretDownFilled className={styles.dropdownIcon} /> 
                    }
                </div>
            </div>
            { openBooked && 
                <div className={styles.dropdownPanel} role="menu">
                    <BookedMenu bookedData={bookedData} />
                </div>
            } 
        </header>);
}

export default Header;