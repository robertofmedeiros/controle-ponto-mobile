import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Button, Header } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

export class HourPonto extends React.Component {

    constructor() {
        super();
        this.state = {
            date: new Date(),
            dateMax: new Date(),
            dateText: 'Pick a date'
        }
    };

    render() {
        return (
            <DatePicker
                style={{ width: 200 }}
                date={this.state.date}
                mode="time" //The enum of date, datetime and time
                placeholder="select hour"
                format="HH:mm"
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                placeholder="Informe a data da batida"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36,
                        borderRadius: 10
                    }
                }}
                onDateChange={(date) => { this.setState({ date: date }) }}
            />
        );
    }
}
