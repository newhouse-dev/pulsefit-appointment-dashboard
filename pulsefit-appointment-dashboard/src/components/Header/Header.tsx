import { PersonFilled, CaretDownFilled } from '@fluentui/react-icons';
import styles from './Header.module.scss';

type IHeaderProps = {
    logo?: string;
    logoUrl?: string;
    user: string;
}

const Header = ({ logo, logoUrl, user }: IHeaderProps) => (
    <div className={styles.header}>
        <div className={styles.logo}>
            { logo && <a href={logoUrl}><img src={logo} alt='PulseFit Logo' /></a> }
        </div>
        <div className={styles.userDropdown}>
            <PersonFilled className={styles.userIcon} />
            <div className={styles.userDisplayName}>{user}</div>
            <CaretDownFilled className={styles.dropdownIcon} />
        </div>
    </div>
);

export default Header;