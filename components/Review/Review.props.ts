import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {ReviewModel} from "../../interfaces/product.interface";

export default interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    review: ReviewModel;
}