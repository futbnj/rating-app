import cn from "classnames";
import styles from './HhData.module.css';
import {Card} from "../Card/Card";
import Star from './star.svg';
import {priceRu} from "../../helpers/helpers";
import {HhDataProps} from "./hhData.props";

export const HhData = ({count, juniorSalary, middleSalary, seniorSalary}: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>
            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{juniorSalary && priceRu(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <Star className={styles.filled}/>
                        <Star/>
                        <Star/>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{middleSalary && priceRu(middleSalary)}</div>
                    <div className={styles.rate}>
                        <Star className={styles.filled}/>
                        <Star className={styles.filled}/>
                        <Star/>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Продвинутый</div>
                    <div className={styles.salaryValue}>{seniorSalary && priceRu(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <Star className={styles.filled}/>
                        <Star className={styles.filled}/>
                        <Star className={styles.filled}/>
                    </div>
                </div>
            </Card>
        </div>

    );
}