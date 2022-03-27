import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import alert from 'react-native-web/dist/exports/Alert';
import RadioButton from './RadioButton';
import TextInput from './TextInput';
import { colors } from '../Constant/Colors';

export const RADIO_QUESTION = 'radio_question';
export const CHECK_QUESTION = 'check_question';
export const TEXT_QUESTION = 'text_question';
export const IMAGE_QUESTION = 'image_question';
export const SIMPLE_RADIO_QUESTION = 'simple_radio_question';
export const RADIO_TEXT_QUESTION = 'radio_text_question';
export const MULTI_CHECK_QUESTION = 'multi_check_question';
export const AMOUNT_QUESTION = 'amount_question';

const makeStyles = function(color) {
  return StyleSheet.create({
    containerRadioQuestion: {
      margin: 14,
      paddingVertical: 35,
      paddingHorizontal: 15,
      borderRadius: 15,
      borderColor: color.surface,
      borderWidth: 3,
    },
  });
};

export default function({ question, selected, index, onPress }) {
  const [select, setSelect] = useState(0);
  const [answer, setAnswer] = useState();
  const color = { ...colors };
  const style = makeStyles(color);

  const renderRadioQuestion = () => {
    return (
      <View style={style.containerRadioQuestion}>
        <Text style={{ textAlign: 'center' }}>{question.quest}</Text>
        <RadioButton
          selected={select}
          options={['Si', 'A veces', 'Aun no']}
          onChangeSelect={(opt, index) => {
            setAnswer(opt);
            setSelect(index);
          }}
          vertical
        />

        {/*<Button title={'Hola'} onPress={() => Alert.alert(answer)} />*/}
      </View>
    );
  };

  const renderCheckQuestion = () => {
    return (
      <View>
        <Text>CheckQuestion</Text>
      </View>
    );
  };

  const renderTextQuestion = () => {
    return (
      <View style={style.containerRadioQuestion}>
        <Text style={{ textAlign: 'center' }}>{question.quest}</Text>
        <TextInput placeholder={'Escribir'} multiline containerStyle={{ height: 150 }} />
      </View>
    );
  };

  const renderImageQuestion = () => {
    return (
      <View>
        <Text>ImageQuestion</Text>
      </View>
    );
  };

  const renderSimpleRadioQuestion = () => {
    return (
      <View>
        <Text>SimpleRadioQuestion</Text>
      </View>
    );
  };

  const renderRadioTextQuestion = () => {
    return (
      <View>
        <Text>RadioTextQuestion</Text>
      </View>
    );
  };

  const renderRadioTextAmountQuestion = () => {
    return (
      <View>
        <Text>RadioTextAmountQuestion</Text>
      </View>
    );
  };

  const renderMultiCheckQuestion = () => {
    return (
      <View>
        <Text>MultiCheckQuestion</Text>
      </View>
    );
  };

  switch (question.typeQuestion) {
    case RADIO_QUESTION:
      return renderRadioQuestion();

    case CHECK_QUESTION:
      return renderCheckQuestion();

    case TEXT_QUESTION:
      return renderTextQuestion();

    case IMAGE_QUESTION:
      return renderImageQuestion();

    case SIMPLE_RADIO_QUESTION:
      return renderSimpleRadioQuestion();

    case RADIO_TEXT_QUESTION:
      return renderRadioTextQuestion();

    case MULTI_CHECK_QUESTION:
      return renderMultiCheckQuestion();

    case AMOUNT_QUESTION:
      return renderRadioTextAmountQuestion();
  }
}
