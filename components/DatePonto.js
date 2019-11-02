import React from 'react';
import {
    TouchableOpacity,
    View,
    Keyboard,
} from 'react-native';
import { Input, Icon } from 'react-native-elements';
//import { DatePicker } from 'react-native-woodpicker';
import DateTimePicker from "react-native-modal-datetime-picker";
import Moment from 'moment';

Keyboard.dismiss();

export class DatePonto extends React.Component {

    constructor() {
        super();
        this.state = {
            date: null,
            dateMax: new Date(),
            dateText: 'Pick a date',
            pickedDate: '',
            isDateTimePickerVisible: false,
            placeholder: this.placeholder,
            mode: this.mode,
            formato: this.formato,
            label: this.label,
        }
    };

    state = {
        pickedDate: null
    };

    showDateTimePicker = () => {
        console.log("Teste");
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", Moment(date, true).format());
        this.setState({ date: Moment(date, true).format(this.props.formato) })
        this.hideDateTimePicker();
    };

    render() {
        return (

            <View>
                <TouchableOpacity onPress={this.showDateTimePicker} >
                    <View pointerEvents="none">
                        <Input
                            placeholder={this.props.placeholder}
                            onClick={this.showDateTimePicker}
                            onTouchStart={this.showDateTimePicker}
                            value={this.state.date}
                            label={this.props.label}
                            leftIcon={
                                <Icon
                                    name='date-range'
                                    size={24}
                                    color='gray'
                                />
                            }
                            //enablesReturnKeyAutomatically={true}
                            //editable={false}
                            />
                    </View>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    maximumDate={this.state.dateMax}
                    //minimumDate="01-01-2016"
                    mode={this.props.mode}
                    />
            </View>
            /*
            <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
            />
            */
            /*
            <DatePicker
                onDateChange={(pickedDate) => { this.setState({ pickedDate: pickedDate }) }}
                value={this.state.pickedDate}
                title="Date Picker"
                placeholder={this.handlePlaceholder()}
                data={this.state.pickedDate}
                maxDate={this.state.dateMax}
                //iosPickerMode="date"
                //androidPickerMode="spinner"
                //locale="fr"
                //isNullable
                />
            
            <DatePicker
                style={{ width: 200 }}
                date={this.state.date} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2016"
                maxDate={this.state.dateMax}
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
            */
        );
    }
}
