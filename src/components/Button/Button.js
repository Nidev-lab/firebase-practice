import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
			<View style={styles.button}>
				<Text>{title}</Text>
			</View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
		marginBottom: 10
  },
});

export default Button;
