import React, {useState} from 'react';
import {TextInput, View, StyleSheet, FlatList, Text, SafeAreaView} from 'react-native-web';
import Button from "./base/Button";
import Styles from '../styles'

export default function CustomerList() {
    const [data, setdata] = React.useState([]);
    const [element, setElement] = React.useState('');

    const addData = (t) =>
    {
        setdata(data => [...data,t]);
        setElement('')
        console.log(t)
    }
    return (
        <>
            <SafeAreaView style={{flex: 1, marginBottom: 56}}>
                <FlatList
                    testID="customer-list"
                    data={data}
                    renderItem={({item, index}) => (
                           <View style={[styles.card, styles.item, Styles.slide_up_fade_in]}
                              testID={`list-item${index}`}>
                            <Text style={styles.title}>{data[index]}</Text>
                           </View>
                        )}
                    keyExtractor={item => item}
                />
            </SafeAreaView>
            <View style={[Styles.card, styles.inputBox]}>
                <View style={{flex: 2}}>
                    <TextInput
                        style={[Styles.input_large, styles.input]}
                        placeholder="Add Customer"
                        testID="app-input"
                        onChangeText={setElement}
                        value={element}
                    />
                </View>
                <Button style={[Styles.button_small]}
                    onPress={() => addData(element)}
                    testID="submit-button">
                    Add
                </Button>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 4,
        flexDirection: 'row',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 56
    },
    input: {
        paddingHorizontal: 12,
        height: 46
    },
    item: {
        paddingHorizontal: 16,
        paddingTop: 12,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4',
        height: 44,
        lineHeight: 44,
        backgroundColor: 'white',
        color: '#303030'
    }
})

//export default CustomerList;
