import React, {useState} from "react";
import styles from '../Info.module.scss'
import {useFormik} from "formik";
import Notification from "../../Send/Notification";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useSelector} from "react-redux";
import {getNetworks} from "../../../store/selectors";

const FeeSection = () => {
    const [networkValue, setNetworkValue] = useState('');

    const networks = useSelector(getNetworks);

    const {handleSubmit, handleChange, values, setFieldValue} = useFormik({
        initialValues: {
            coin: '',
            network: '',
        },
    });
    return (
        <div className={styles.infoWrapper}>
            <form className={styles.send} onSubmit={handleSubmit}>
                <label className={styles.send__label} htmlFor={`coin`}>Select a coin</label>
                <FormControl className={styles.send__select} sx={{m: 1, minWidth: 120}}>
                    <Select
                        value={values.coin}
                        onChange={handleChange}
                        displayEmpty
                        id="coin"
                        name="coin"
                        inputProps={{'aria-label': 'Without label'}}
                        className={`${styles.inputBox__button} send-select`}
                    >
                        <MenuItem value={'USDT'}>USDT</MenuItem>
                        <MenuItem value={'BTC'}>BTC</MenuItem>
                        <MenuItem value={'EU'}>EU</MenuItem>

                    </Select>
                </FormControl>

                <label className={styles.send__label} htmlFor={`network`}>Network selection</label>
                <FormControl className={styles.send__select} sx={{m: 1,}}>
                    <Select
                        value={networkValue}
                        onChange={() => setFieldValue('network', networkValue)}
                        displayEmpty
                        id="network"
                        name="network"
                        inputProps={{'aria-label': 'Without label'}}
                        className={`${styles.inputBox__button} send-select network-select`}
                        placeholder={'Select a network'}
                    >
                        {networks.map((network, index) =>
                            <MenuItem key={index} className='networkItem'
                                      value={network.name} onClick={() => setNetworkValue(network.name)}><div>
                                <p className='network-name'>{network.name}</p>
                                <p className='network-text'>{network.commission}</p>
                                <p className='network-text'>{network.minAmount}</p>
                            </div></MenuItem>)}
                    </Select>
                </FormControl>
            </form>
        </div>
    )
}

export default FeeSection;