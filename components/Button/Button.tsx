import {ButtonProps} from "./Button.props";
import Arrow from './arrow.svg';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {

    return (
        <>
            <button
                className={cn(className, styles.button, {
                    [styles.primary] : appearance === 'primary',
                    [styles.ghost] : appearance === 'ghost',
                })}
                {...props}
            >
                {children}
                {arrow !== 'none' && <span className={cn(styles.arrow, {
                        [styles.down]: arrow === 'down',
                        [styles.right]: arrow === 'right',
                    }
                )}>
                    <Arrow />
                </span>}
            </button>
        </>
    )
}