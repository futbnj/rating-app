import cn from "classnames";
import styles from './ReviewForm.module.css';
import ReviewFormProps from "./ReviewForm.props";
import {Rating} from "../Rating/Rating";
import {Input} from "../Input/Input";
import {Textarea} from "../Textarea/Textarea";
import {Button} from "../Button/Button";
import CloseIcon from "./close.svg";
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewSentResponse} from "./ReviewForm.interface";
import {API} from "../../helpers/api";
import axios from "axios";
import {useState} from "react";

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: {errors}, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data }  = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId })
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так')
            }
        } catch (e: any) {
            setError(e.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn(styles.form, className)}
             {...props}
        >
            <Input
                {...register('name', {required: { value: true, message: 'Заполните имя'}})}
                placeholder="Имя"
                error={errors.name}
            />
            <Input
                {...register('title', {required: { value: true, message: 'Заполните заголовок'}})}
                className={styles.title}
                placeholder="Заголовок отзыва"
                error={errors.title}
            />
            <div className={styles.rating}>
                <span>Оценка: </span>
                <Controller
                    control={control}
                    name='rating'
                    rules={{required: {value: true, message: 'Поставьте рейтинг'}}}
                    render={({ field }) => (
                        <Rating
                            isEditable
                            rating={field.value}
                            ref={field.ref}
                            setRating={field.onChange}
                            error={errors.rating}
                        />
                    )}
                />
            </div>
            <Textarea
                {...register('description', {required: {value: true, message: 'Заполните текст отзыва'}})}
                className={styles.textarea}
                placeholder="Текст отзыва"
                error={errors.description}
            />
            <div className={styles.submit}>
                <Button appearance="primary" className={styles.button}>Отправить</Button>
                <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
        </div>
        {isSuccess &&
        <div className={styles.success}>
            <div className={styles.successTitle}>Отзыв отправлен</div>
            <div>
                Спасибо! Ваш отзыв будет опубликован после проверки.
            </div>
            <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)}/>
        </div>}
        {error &&
        <div className={styles.error}>
            <div className={styles.errorTitle}>Что-то пошло не так</div>
            <div>
                Попробуйте обновить страницу
            </div>
            <CloseIcon className={styles.close} onClick={() => setError(undefined)}/>
        </div>
        }
        </form>
    );
}