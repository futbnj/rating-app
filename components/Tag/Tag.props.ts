import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export default interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode;
    size?: 's' | 'm' ;
    color?: 'ghost' | 'green' | 'grey' | 'red' | 'primary';
    href?: string;
}