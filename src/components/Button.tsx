import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setTheme } from "../redux/reducers/themeReducer";

export const Button = () => {
    const {theme} = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (theme === "light") {
            dispatch(setTheme("dark"));
        } else {
            dispatch(setTheme("light"));
        }
    }

    return (
        <button onClick={handleClick}>
            {theme === "light" ? "Dark" : "Light"}
        </button>
    );
}