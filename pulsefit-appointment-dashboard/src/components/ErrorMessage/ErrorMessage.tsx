import styles from './ErrorMessage.module.scss';

type IErrorMessageProps = {
    message: string;
}

const ErrorMessage = ({ message }: IErrorMessageProps) => {
    
    return (
        <div role='alert' className={styles.error}>
            {message}
        </div>
    );
}

export default ErrorMessage;