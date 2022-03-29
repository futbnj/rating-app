import cn from "classnames";
import styles from './Ptag.module.css';
import PtagProps from "./Ptag.props";

export const Ptag = ({children, size = 'm'}: PtagProps): JSX.Element => {
    return (
        <p className={cn(styles.pTag, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.l]: size === 'l',
        })}>
            {children}
        </p>
    );
}