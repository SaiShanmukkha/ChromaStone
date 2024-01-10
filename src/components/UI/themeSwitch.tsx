import styles from "@styles/ThemeSwitcher.module.css";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

export default function ThemeSwitcher(){
    return (
        <>
            <input type="checkbox" className={styles.checkboxInput} id="checkboxInput" />
            <label htmlFor="checkboxInput" className={styles.toggleSwitch}>
                <div className={styles.lightTheme}>
                    <FaMoon />
                </div>
                <div className={styles.darkTheme}>
                    <MdOutlineWbSunny />
                </div>
            </label>
        </>
    );
}