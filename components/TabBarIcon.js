import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { useEffect } from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <Ionicons
      name={props.name}
      size={props.size}
      style={{ marginBottom: -3 }}
      color={props.focused ? 'green' : Colors.tabIconDefault}
    />
  );
}
