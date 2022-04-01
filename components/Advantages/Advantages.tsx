import cn from "classnames";
import { Htag } from "../Htag/Htag";
import styles from './Advantages.module.css';
import {AdvantagesProps} from "./Advantages.props";
import Check from './check.svg';
import {Ptag} from "../Ptag/Ptag";

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages?.map(a => (
                <div key={a._id} className={styles.advantages}>
                    {/*<div className={styles.title}>*/}
                        <Check />
                        <Htag tag="h3">
                            {a.title}
                        </Htag>
                    {/*</div>*/}
                    {/*<div className={styles.description}>*/}
                        <hr className={styles.line}/>
                        <Ptag size="l">
                            {a.description}
                        </Ptag>
                    {/*</div>*/}
                </div>
            ))}
        </>
    );
}