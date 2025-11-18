import styles from './Footer.module.scss';

// This component shows my preferred way of implementing something with configurable text.
// This is valuable because it allows for easy configuration in storybook and avoids hardcoded data at the component level, increasing reuse.
// Ideally I would implement every component this way, but for the sake of this demo it may not be implemented everywhere.

// Re: naming convention - After writing this, I realized "Footer" probably wasn't the best name to relfect functionality.
// If I had time to refactor a little, I'd probably call this "ContactSubmit" or something else.

type IFooterProps = {
    contactText: string;
    contactLinkLabel: string;
    contactLinkUrl: string;
    submitBtnLabel: string;
    isSubmitBtnDisabled: boolean;
    onSubmit: () => void;
}

const Footer = ({ contactLinkLabel, contactLinkUrl, contactText, submitBtnLabel, isSubmitBtnDisabled, onSubmit }: IFooterProps) => {
    
    return (
        <footer className={styles.footer}>
            <section className={styles.contact}>
                <span className={styles.contactText}>{contactText}</span>
                <span className={styles.contactUsLink}>
                    <a href={contactLinkUrl}>{contactLinkLabel}</a>
                </span>
            </section>
            { !isSubmitBtnDisabled && <div role="button" className='btn primary' onClick={() => onSubmit()}>
                {submitBtnLabel}
            </div> }
        </footer>
    );
}

export default Footer;