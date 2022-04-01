import {withLayout} from "../layout/Layout";


export const Search = () => {
    return (
        <>
            <input type="text" placeholder="search..."/>
        </>
    )
}

export default withLayout(Search);