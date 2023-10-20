import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    networks: [
        {name: 'Tron (TRC20)', commission: '1.00 USDT (≈ $0.999999)', minAmount: '10 USDT'},
        {name: 'BNB Smart Chain (BEP20)', commission: '0.29 USDT (≈ $0.28999)', minAmount: '6 USDT'},
    ],
    cards:[
        {
            cardValue: 4356,
            cardNumber: '4356 3224 3554 5435',
            cardCode: 234,
            cardDate: '12/2023',
            cardType: 'mastercard',
        },
        {
            cardValue: 345,
            cardNumber: '1144 5839 8967 0098',
            cardCode: 333,
            cardDate: '12/2023',
            cardType: 'mastercard',
        },
        {
            cardValue: 0,
            cardNumber: '4957 3646 9908 6667',
            cardCode: 112,
            cardDate: '11/2024',
            cardType: 'mastercard',
        }
    ]
};

export const walletSlice = createSlice({
    name:'walletPage',
    initialState,
    reducers: {}
})

export default walletSlice.reducer;

export const {} = walletSlice.actions;