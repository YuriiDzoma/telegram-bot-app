import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from "./Selects.module.scss"


const SelectCoin = ({handleChange, coin, currency, setCurrentCoin}) => {
    return (
        <div>
            <label className={styles.select__label} htmlFor={`coin`}>Select a coin</label>
            <FormControl className={styles.select__select} sx={{m: 1, minWidth: 120}}>
                <Select
                    value={coin}
                    onChange={handleChange}
                    displayEmpty
                    id="coin"
                    name="coin"
                    inputProps={{'aria-label': 'Without label'}}
                    className={`${styles.inputBox__button} send-select`}
                >
                    {currency.map((item, index) =>
                        <MenuItem onClick={() => setCurrentCoin(item)} key={index}
                                  value={item.token_name}>{item.token_name}</MenuItem>
                    )}

                </Select>
            </FormControl>
        </div>
    )
}

export default SelectCoin;