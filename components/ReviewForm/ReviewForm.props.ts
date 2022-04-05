import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export default interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    productId: string;
}