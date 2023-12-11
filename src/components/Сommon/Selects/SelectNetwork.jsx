import React from "react";
import styles from './Selects.module.scss'
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


const SelectNetwork = ({networkValue, setFieldValue, currentCoin, setNetworkValue, setNetworkType}) => {
    const setNetworks = (name, type) => {
        setNetworkValue(name);
        setNetworkType(type);
    }
    return (
        <div>
            <label className={styles.select__label} htmlFor={`network`}>Network selection</label>
            <FormControl className={styles.select__select} sx={{m: 1,}}>
                <Select
                    value={networkValue}
                    onChange={() => setFieldValue('network', networkValue)}
                    displayEmpty
                    id="network"
                    name="network"
                    inputProps={{'aria-label': 'Without label'}}
                    className={`${styles.inputBox__button} send-select network-select`}
                >
                    {currentCoin && currentCoin.network.map((network, index) =>
                        <MenuItem key={index} className='networkItem'
                                  value={network.network_name}
                                  onClick={() => setNetworks(network.network_name, network.network_type)}>
                            <div>
                                <p className='network-name'>{network.network_name} <span>({network.network_type})</span>
                                </p>
                                {/*<p className='network-text'>{network.network_commission}</p>*/}
                                {/*<p className='network-text'>{network.network_minAmount}</p>*/}
                            </div>
                        </MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectNetwork;