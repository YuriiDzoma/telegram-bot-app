import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    profileId: null,
    balance: {
        token_name: '',
        user_balance: '',
    },
    currency: [
        {
            id: 1,
            token_name: 'USDT',
            token_code: 'USDT',
            change: ['TRX', 'ETH', 'BTC', 'USDC', 'LTC', 'BNB'],
            network: [
                {
                    id: 1,
                    network_name: 'Tether USD trc20',
                    network_type: 'trc20',
                    network_commission: '1.00 USDT (≈ $0.999999)',
                    network_minAmount: '10 USDT',
                },
                {
                    id: 2,
                    network_name: 'Tether USD erc20',
                    network_type: 'erc20',
                    network_commission: '0.29 USDT (≈ $0.28999)',
                    network_minAmount: '6 USDT',
                }
            ]
        },
        {
            id: 2,
            token_name: 'USDC',
            token_code: 'USDC',
            change: ['USDT', 'TRX', 'ETH', 'BTC'],
            network: []
        },
        {
            id: 3,
            token_name: 'BTC',
            token_code: 'BTC',
            change: ['USDT', 'ETH', 'USDC', 'LTC'],
            network: []
        },
        {
            id: 4,
            token_name: 'ETH',
            token_code: 'ETH',
            change: ['USDT', 'BTC', 'USDC'],
            network: []
        },
        {
            id: 5,
            token_name: 'LTC',
            token_code: 'LTC',
            change: ['USDT', 'BTC'],
            network: []
        },
        {
            id: 6,
            token_name: 'BNB',
            token_code: 'BNB',
            change: ['USDT'],
            network: []
        },
        {
            id: 7,
            token_name: 'TRX',
            token_code: 'TRX',
            change: ['USDT', 'USDC'],
            network: [],
        },
    ],
    replenish: [],
    networks: [
        {name: 'Tron (TRC20)', commission: '1.00 USDT (≈ $0.999999)', minAmount: '10 USDT'},
        {name: 'BNB Smart Chain (BEP20)', commission: '0.29 USDT (≈ $0.28999)', minAmount: '6 USDT'},
    ],
    cards: [
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
    ],
    cryptocurrency: [],
    transactionHistory: []
};

export const walletSlice = createSlice({
    name: 'walletPage',
    initialState,
    reducers: {
        setProfileId(state, action) {
            state.profileId = action.payload
        },
        setBalance(state, action) {
            state.balance.user_balance = action.payload;
        },
        setTokenName(state, action) {
            state.balance.token_name = action.payload;
        },
        setCryptocurrency(state, action) {
            state.cryptocurrency = [...action.payload];
        },
        setTransactionHistory(state, action) {
            state.transactionHistory = [...action.payload];
        },
        setReplenish(state, action) {
            state.replenish = action.payload;
        }
    }
})

export default walletSlice.reducer;

export const {
    setProfileId,
    setBalance,
    setTokenName,
    setCryptocurrency,
    setTransactionHistory,
    setReplenish,
} = walletSlice.actions;