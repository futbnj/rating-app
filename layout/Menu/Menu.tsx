import cn from "classnames";
import styles from './Menu.module.css';
import {useContext} from "react";
import {AppContext} from "../../context/app.context";
import {Ptag} from "../../components";

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    return (
        <div >
            {menu.map((menuItem) => <Ptag>{menuItem._id.secondCategory}</Ptag>)}
        </div>
    );
}