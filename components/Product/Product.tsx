import cn from "classnames";
import styles from './Product.module.css';
import ProductProps from "./Product.props";
import {Card} from "../Card/Card";
import {Rating} from "../Rating/Rating";
import {Tag} from "../Tag/Tag";
import {Button} from "../Button/Button";
import {declinationOfNum, priceRu} from "../../helpers/helpers";
import {Divider} from "../Divider/Divider";
import Link from "next/link";
import Image from 'next/image';
import {useRef, useState} from "react";
import {Review} from "../Review/Review";
import {ReviewForm} from "../ReviewForm/ReviewForm";

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

    const reviewRef = useRef<HTMLDivElement>(null);

    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    };

    return (
        <div className={className} {...props}>
        <Card className={styles.product}>
            <div className={styles.logo}>
                    <Image
                        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
            </div>
            <div className={styles.title}> {product.title} </div>
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice && <Tag className={styles.oldPrice} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={styles.credit}> {priceRu(product.credit)}<span className={styles.month}>/мес</span> </div>
            <div className={styles.rating}> <Rating rating={product.reviewAvg ?? product.initialRating}/> </div>
            <div className={styles.tags}>
                {product.categories.map(c => <Tag className={styles.category} color="ghost" key={c}>{c}</Tag>)}
            </div>
            <div className={styles.priceTitle}> цена </div>
            <div className={styles.creditTitle}> кредит </div>
            <div className={styles.reviewsAmount}>
                <a href="#ref" onClick={scrollToReview}>
                    {product.reviewCount} {declinationOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                </a>
            </div>

            <Divider className={styles.hr} />

            <div className={styles.description}> {product.description} </div>
            <div className={styles.features}>
                {product.characteristics.map(c => (
                    <div className={styles.characteristic} key={c.name}>
                            <span className={styles.chName}>{c.name}</span>
                            <span className={styles.chDots}> </span>
                            <span className={styles.chValue}>{c.value}</span>
                    </div>
                ))}
            </div>
            <div className={styles.advBlock}>
                { product.advantages && <div className={styles.advantages}>
                    <div>Преимущества</div>
                    <div> {product.advantages} </div>
                </div>}
                {product.disadvantages && <div className={styles.disadvantages}>
                    <div>Недостатки</div>
                    <div> {product.disadvantages} </div>
                </div>}
            </div>

            <Divider className={cn(styles.hr, styles.hr2)} />

            <div className={styles.actions}>
                <Button appearance="primary"><Link  href={product.link}><a>Узнать подробнее</a></Link></Button>
                <Button
                    appearance="ghost"
                    arrow={isReviewOpened ? 'down' : 'right'}
                    className={styles.readButton}
                    onClick={() => setIsReviewOpened(!isReviewOpened)}
                >Читать отзывы
                </Button>
            </div>
        </Card>
        <Card color="blue" className={cn(styles.review, {
                [styles.opened]: isReviewOpened,
                [styles.closed]: !isReviewOpened,
        })} ref={reviewRef}>
            {product.reviews.map((r) => (
                <Review key={r._id} review={r} />
            ))}
            <ReviewForm productId={product._id} />
        </Card>
        </div>
    );
}