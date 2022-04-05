import cn from "classnames";
import styles from './Input.module.css';
import InputProps from "./Input.props";
import {ForwardedRef, forwardRef} from "react";

export const Input = forwardRef(({error, className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(className, styles.wrapper)}>
            <input className={cn(styles.input, {
                [styles.error]: error
            })} ref={ref} {...props}/>
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});