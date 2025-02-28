import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler';

const TaskList = () => {

    const [tasks, setTasks] = React.useState([]);

    useEffect(() => {
        loadTaks();
    }, [])

    const loadTaks = async () => {

        const tasks = await fetch('http://10.0.2.2:3001/tasks');
        const data = await tasks.json();
        setTasks(data);
    }

    return (
        <View style={{flex: 1, backgroundColor: '#e8ecf4'}}>
            <FlatList
                style={ styles.container }
                data={tasks}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <Text style={ styles.itemTitle }> { item.title } </Text>
                        <Text style={ styles.itemDesc }> { item.description } </Text>
                    </View>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 24,
        width: 400
    },
    taskItem: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 20,
        marginVertical: 8,
        backgroundColor: '#f7f7f7'
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemDesc: {
        fontSize: 16,
        marginTop: 10
    }
});

export default TaskList