import { useState, useCallback, useEffect } from 'react'
import { AsyncStorage } from 'react-native';

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [refreshToken, setRefreshToken] = useState(null)
    const [ready, setReady] = useState([])

    const login = useCallback((jwtToken) => {
        setToken(jwtToken)
        AsyncStorage.setItem('token', jwtToken);
    }, [])

    const logout = useCallback(() => {
        setToken( null )
        AsyncStorage.removeItem('token');
    }, [])

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');

        console.log(token)

        if ( token ) {
            login(token)
        }
        setReady(true)
    }

    useEffect(() => {
        checkToken()
    }, [ login ])

    return { login, logout, token, refreshToken }
}