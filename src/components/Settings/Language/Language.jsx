import React, {useState} from "react";
import styles from './Language.module.scss'
import {useSelector} from "react-redux";
import {getLanguage} from "../../../store/selectors";
import {setLanguage} from "../../../store/wallet-slice";
import {useAppDispatch} from "../../../hooks/redux";

const Language = () => {
    // const [currentLanguage, setCurrentLanguage] = useState('eng');
    const language = useSelector(getLanguage);
    const dispatch = useAppDispatch();
    const sendLanguage = (value) => {
        dispatch(setLanguage(value))
    }

    console.log(language);

    return (
        <div className={styles.languageWrapper}>
            <ul className={styles.languages}>
                <li className={language === 'eng' ? styles.active : ''}>
                    <button onClick={() => sendLanguage('eng')}>
                        English
                    </button>
                </li>
                <li className={language === 'kor' ? styles.active : ''}>
                    <button onClick={() => sendLanguage('kor')}>
                        Korean
                    </button>
                </li>
                <li className={language === 'spa' ? styles.active : ''}>
                    <button onClick={() => sendLanguage('spa')}>
                        Spanish
                    </button>
                </li>
                <li className={language === 'rus' ? styles.active : ''}>
                    <button onClick={() => sendLanguage('rus')}>
                        Russian
                    </button>
                </li>

            </ul>
        </div>
    )
}

export default Language;