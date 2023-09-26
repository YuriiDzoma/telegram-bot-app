import React, {useEffect, useState} from "react";
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('');
    const {telegram} = useTelegram();

    useEffect(() => {
        telegram.MainButton.setParams({
            text: 'Відправити данні'
        })
    }, [])

    useEffect(() => {
        if(!country || !street) {
            telegram.MainButton.hide();
        } else {
            telegram.MainButton.show()
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }

    return (
        <div className={'form'}>
            <h3>Введіть ваші дані</h3>
            <input
                type="text"
                className={'input'}
                placeholder={'Країна'}
                onChange={onChangeCountry}
                value={country}
            />
            <input
                type="text"
                className={'input'}
                placeholder={'Вулиця'}
                onChange={onChangeStreet}
                value={street}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Фізична особа</option>
                <option value={'legal'}>Юридична особа</option>
            </select>
        </div>
    )
}

export default Form;