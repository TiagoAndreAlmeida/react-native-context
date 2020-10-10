import React from 'react';
import { View, Button } from 'react-native';


import {useAuth} from '../../contexts/auth';

const SignIn: React.FC = () => {
    const {signIn} = useAuth();

    function handlerSignIn() {
        signIn();
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <Button title="Logar" onPress={handlerSignIn} />
        </View>
    )
}

export default SignIn;