import { Component } from 'react';
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Logo } from '../components/logo';

export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameFocused: false,
            passwordFocused: false,
            animatedUsername: new Animated.Value(0),
            animatedPassword: new Animated.Value(0),
        };
    }
    handleLogin() {
        const { username, password } = this.state;
        if (username === 'admin' && password === 'admin') {
            this.props.onLogin();
        }
    }

    handleFocus = (inputName) => {
        const isUsername = inputName === 'username';
        const animatedInput = isUsername ? this.state.animatedUsername : this.state.animatedPassword;
        const targetValue = isUsername ? 1 : 2;

        Animated.timing(animatedInput, {
            toValue: targetValue,
            duration: 200,
            useNativeDriver: false,
        }).start();

        this.setState({ [`${inputName}Focused`]: true });
    }

    handleBlur = (inputName) => {
        const isUsername = inputName === 'username';
        const animatedInput = isUsername ? this.state.animatedUsername : this.state.animatedPassword;
        const targetValue = isUsername ? 0 : 0;

        Animated.timing(animatedInput, {
            toValue: targetValue,
            duration: 200,
            useNativeDriver: false,
        }).start();

        this.setState({ [`${inputName}Focused`]: false });
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <View style={styles.inputContainer}>
                    <Animated.Text style={[styles.label, { color: this.state.labelColor }]}>Nome de usuário</Animated.Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu nome de usuário"
                        placeholderTextColor="#a0a0a0"
                        onChangeText={(text) => this.setState({ username: text })}
                    />
                    <Animated.View style={[styles.bar, { backgroundColor: this.state.barColor }]} />
                </View>
                <View style={styles.inputContainer}>
                    <Animated.Text style={[styles.label, { color: this.state.labelColor }]}>Senha</Animated.Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#a0a0a0"
                        onChangeText={(text) => this.setState({ password: text })}
                        secureTextEntry
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                    <Animated.View style={[styles.bar, { backgroundColor: this.state.barColor }]} />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleLogin}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        marginBottom: 50,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    inputContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        marginBottom: 20,
        width: '80%',
    },
    input: {
        height: 40,
        color: '#000',
        fontSize: 18,
    },
    button: {
        backgroundColor: '#3f51b5',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
