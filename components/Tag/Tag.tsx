import cn from "classnames";
import styles from './Tag.module.css';
import TagProps from "./Tag.props";

export const Tag = ({ children, size = 'm', color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
    return (
        <div className={cn(className, styles.tag, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.ghost]: color === 'ghost',
            [styles.primary]: color === 'primary',
            [styles.grey]: color === 'grey',
            [styles.red]: color === 'red',
            [styles.green]: color === 'green',
        })}
             {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
}