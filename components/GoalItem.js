import { StyleSheet, View, Text, Pressable } from 'react-native';


function GoalItem(props) {
    return (
        <Pressable android_ripple={{color: '#210644'}} onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}> {props.text} </Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        justifyContent: 'center',
        margin: 8,
        padding: 8,
        borderRadius: 4,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        backgroundColor: '#5e0acc',

    },
    goalText: {
        color: 'white'
    }
});
