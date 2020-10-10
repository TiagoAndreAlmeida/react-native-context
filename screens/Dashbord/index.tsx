import React, {useContext} from 'react';
import { View, Button } from 'react-native';


import {useAuth} from '../../contexts/auth';

const Dashboard: React.FC = () => {
    const {logout} = useAuth();

    function handlerLogout() {
        logout();
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <Button title="Sair" onPress={handlerLogout} />
        </View>
    )
}

export default Dashboard;