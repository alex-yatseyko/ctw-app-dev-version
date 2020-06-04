import { createContext } from 'react'
import { AsyncStorage } from 'react-native';

const token = AsyncStorage.getItem('token');

function noop() {}

export const AuthContext = createContext({
    token: token,
    login: noop,
    logout: noop,
    isAuthenticated: false
})