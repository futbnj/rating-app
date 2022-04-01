import cn from "classnames";
import styles from './Search.module.css';
import SearchProps from "./Search.props";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {KeyboardEventHandler, useState} from "react";
import SearchIcon from './search.svg';
import {useRouter} from "next/router";

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>();

    const router = useRouter()

    const redirectToSearchPage = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };
    
    const handleSubmitByEnter = (event: KeyboardEvent) => {
        if (event.key == 'Enter'){
            redirectToSearchPage();
        }
    }

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                // @ts-ignore
                onKeyDown={handleSubmitByEnter}
            />
            <Button
                appearance="primary"
                className={styles.button}
                onClick={redirectToSearchPage}
            >
                <SearchIcon />
            </Button>
        </div>
    );
}