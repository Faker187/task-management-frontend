import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

const CreateTaskScreen = ({ navigation }) => {

    const [form, setForm] = React.useState({
        title: '',
        description: '',
        limit_date: '',
        priority: ''
    });


    const onHandleCreateTask = async () => {
        const tasks = await fetch('http://10.0.2.2:3001/tasks',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });

        navigation.navigate('Tareas');

    }

    return (
        <SafeAreaView style={{ flex: 1, padding:27, backgroundColor: '#e8ecf4' }}>
            <View style={styles.input}>

                <TextInput
                    style={styles.inputControl}
                    placeholder='Nombre de Tarea'
                    value={form.title}
                    onChangeText={title => setForm({ ...form, title })}
                />
            </View>

            <View style={styles.input}>

                <TextInput
                    style={styles.inputControl}
                    placeholder='Descripción'
                    value={form.description}
                    onChangeText={description => setForm({ ...form, description })}
                />
            </View>

            <View style={styles.input}>

                <TextInput
                    style={styles.inputControl}
                    placeholder='Fecha limite'
                    value={form.limit_date}
                    onChangeText={limit_date => setForm({ ...form, limit_date })}
                />
            </View>

            <View style={styles.input}>

                <TextInput
                    style={styles.inputControl}
                    placeholder='Prioridad'
                    value={form.priority}
                    onChangeText={priority => setForm({ ...form, priority })}
                />
            </View>

            <View style={styles.formAction}>
            
                <Button
                    title='Guardar'
                    onPress={ onHandleCreateTask }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },

    input: {
        marginBottom: 17
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222'
    },
    inputControl: {
        marginTop: 17,
        width: 350,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222'
    }
});

export default CreateTaskScreen