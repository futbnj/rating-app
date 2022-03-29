import {Htag, Button, Ptag, Tag, Rating} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(3)

    return (
        <>
            <Htag tag="h1">Hello</Htag>
            <Button appearance="ghost" arrow="down">Купить</Button>
            <Button appearance="primary" arrow="right">Купить</Button>
            <Ptag size="s">Привет</Ptag>
            <Ptag size="l">Привет</Ptag>
            <Ptag>Привет</Ptag>
            <Tag size="s" color="green" href="github.com">Привет</Tag>
            <Tag size="m" color="primary">Привет</Tag>
            <Tag size="m" color="red">Привет</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
        </>
    )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
}

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number
}
