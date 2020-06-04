import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.value}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;