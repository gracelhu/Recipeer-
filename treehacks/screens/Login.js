import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik'; 

function handleSubmit() {
    console.log("hi");
}

const Login = ({navigation, updateUser}) => {

    const handleLogin = (values) => {
        console.log(values.username);
        updateUser(values);
        navigation.navigate('upload');
    }

    const handleSignUpPress = () => {
        console.log("sign up pressed");
        navigation.navigate('signup');
    }

    return (
        <View style={styles.bodyPage}>
             <Image style={{width: 150, height: 150,}}
        source={require('./img/recipeer_icon.png')}
      />
            <Text style={styles.titleText}>Get Started</Text>
            <Formik initialValues={{username: '', password: '', ingredients: '', friends: '', recipes: ''}} 
             onSubmit={(values) => {
                handleLogin(values);
            }}>
                {({ values, handleSubmit, handleChange, isValid }) => {
                    return (
                        <>
                        <View style={{marginBottom: 50,}}>
                        <TextInput onChangeText={handleChange('username')} value={values.username} style={styles.input} placeholder={"Username"} />
                        <TextInput onChangeText={handleChange('password')} value={values.password} secureTextEntry={true} style={styles.input} placeholder={"Password"} />
                       </View>

                        <TouchableOpacity style={styles.buttonStyle} onPress={handleSubmit} disabled={!isValid}>
                            <Text style={styles.boldText}>Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSignUpPress}> 
                            <Text style={{paddingTop: 20,}}>
                                <Text style={styles.text}> Don't have an account? </Text>
                                <Text style={styles.boldText}> Sign up!</Text>
                            </Text>
                        </TouchableOpacity>
                        </>
                    )
            
                }}
           
            </Formik>
          
            
        </View>
    )
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 40,

    },
    bodyPage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    buttonStyle: {
        width: 250,
        backgroundColor: '#a8b956',
        paddingVertical: 25,
        paddingHorizontal: 32,
        borderRadius: 5,
        marginTop: 20,
        
    },
    boldText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
    },
    input: {
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        width: 250,
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 15,
    },

  });

export default Login;

