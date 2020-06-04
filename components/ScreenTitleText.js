import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { MonoText } from '../components/StyledText';

export function ScreenTitleText(props) {
  return <Text {...props} style={[props.style, styles.primaryTitle]} />;
}

const styles = StyleSheet.create({
  primaryTitle: {
    color: '#4BB244',
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'ubuntu-bold',
    paddingHorizontal: 25,
  },
});