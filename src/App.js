import React from 'react';
import CustomerList from './components/CustomerList'
import {View} from 'react-native-web'

const title = 'Customer List';

const App = () => {
    return (
        <>
            <h8k-navbar header={title}/>
            <View className="app-container" style={{flex: 1}}>
                <CustomerList/>
            </View>
        </>
    )
        ;
};

export default App;
