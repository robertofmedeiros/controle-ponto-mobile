import React from 'react';
import { DatePonto } from '../components/DatePonto';
import { HourPonto } from '../components/HourPonto';
import { Button, Header } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

export default function CadastroScreen() {
    return (
        <View style={styles.container}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Cadastro', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.option}><DatePonto placeholder="Informe a data de registro ponto" mode="date" formato="DD/MM/YYYY" label="Data:" /></View>
                <View style={styles.option}><DatePonto placeholder="Informe a hora do registro ponto" mode="time" formato="HH:mm" label="Hora:" /></View>
                <View style={styles.option}>
                    <TextInput
                        label='Email'
                        multiline={true}
                        numberOfLines={4}
                        selectionColor='#808080'
                        underlineColor='#808080'
                        />
                </View>
            </ScrollView>
        </View>
        );
}

CadastroScreen.navigationOptions = {
    title: 'Cadastro',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: 15,
        backgroundColor: '#fff',
    },
    optionsTitleText: {
        fontSize: 16,
        marginLeft: 15,
        marginTop: 9,
        marginBottom: 12,
    },
    optionIconContainer: {
        marginRight: 9,
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#EDEDED',
    },
    optionText: {
        fontSize: 15,
        marginTop: 1,
    },
});