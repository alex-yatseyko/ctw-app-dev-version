import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const PrimaryBtn = (props) => {
    return (
        <TouchableOpacity 
            style={styles.primaryBtn}
            onPress={props.func}
        >
            <Text style={styles.btnText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primaryBtn: {
        backgroundColor: '#4BB244',
        paddingVertical: 12,
        borderRadius: 10,
        marginHorizontal: 25
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
    },
})
