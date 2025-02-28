import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

const Login = ({ navigation }) => {
    
    const [form, setForm] = useState({
        email: '',
        pass: ''
    });


    const onHandleLogin = async () => {
        
        const login = await fetch('http://10.0.2.2:3001/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        
        console.log( login )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>

            <View style={styles.container}>
                <Text style={styles.title}>Iniciar sesión</Text>
                <StatusBar style="auto" />


                <View style={styles.input}>
                    <Text style={styles.inputLabel}>Correo</Text>

                    <TextInput
                        style={styles.inputControl}
                        placeholder='BealRs@example.com'
                        value={form.email}
                        onChangeText={email => setForm({ ...form, email })}
                    />
                </View>

                <View style={styles.input}>
                    <Text style={styles.inputLabel}>Contraseña</Text>

                    <TextInput
                        secureTextEntry
                        placeholder='************'
                        style={styles.inputControl}
                        value={form.pass}
                        onChangeText={pass => setForm({ ...form, pass })}
                    />
                </View>

                <View style={styles.formAction}>

                    <Button
                        title='iniciar sesión'
                        onPress={onHandleLogin}
                    />
                </View>
            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    title: {
        fontSize: 27,
        fontWeight: '700',
        color: '#1e1e1e',
        marginBottom: 67,
        textAlign: 'center'
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
        width: 300,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222'
    }
});

export default Login