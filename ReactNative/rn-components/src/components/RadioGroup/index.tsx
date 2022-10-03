import React, { useState } from 'react';
import RadioGroup, { RadioButton, RadioButtonProps } from 'react-native-radio-buttons-group';
import { View } from 'react-native';

const radioButtonsData: RadioButtonProps[] = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Option 1',
    value: 'option1'
}, {
    id: '2',
    label: 'Option 2',
    value: 'option2'
},
{
    id: '3',
    label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore beatae laborum perferendis assumenda doloremque quae debitis quisquam a eveniet.',
    value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore beatae laborum perferendis assumenda doloremque quae debitis quisquam a eveniet.',
    disabled: true
}]

export function RadioGroupRN() {

    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsData)

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons(radioButtonsArray);
        console.log(radioButtonsArray)
    }

    return (
        <>
            <RadioGroup
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
                containerStyle={
                    {
                        backgroundColor: 'red',
                        alignItems: 'center'
                    }}
            />
        </>
    );

}