import styles from './ErrorMessage.module.scss';

type IErrorMessageProps = {
    message: string;
}

const ErrorMessage = ({ message }: IErrorMessageProps) => {
    
    return (
        <div className={styles.error}>
            {message}
        </div>
    );
}

export default ErrorMessage;