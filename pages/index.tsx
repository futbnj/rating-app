
import {Htag, Button} from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag="h1">Hello</Htag>
            <Button appearance="ghost" arrow="down">Купить</Button>
            <Button appearance="ghost">Купить</Button>
        </>
    )
}
