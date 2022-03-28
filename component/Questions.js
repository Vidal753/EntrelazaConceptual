import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import RadioButton from './RadioButton';
import TextInput from './TextInput';
import { colors } from '../Constant/Colors';
import { ADD_CHOICE } from '../reducer/choice';
import Button from '../component/Button';

export const RADIO_QUESTION = 'radio-question';
export const TEXT_QUESTION = 'text-question';
export const IMAGE_QUESTION = 'image_question';
export const RADIO_TEXT_QUESTION = 'radio-text-question';

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
    text: {
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
  });
};

const QuestionScreen = ({ question }) => {
  const [choice, setChoice] = useState('');
  const dispatch = useDispatch();
  const [select, setSelect] = useState(0);
  const color = { ...colors };
  const style = makeStyles(color);

  const add_card = () => {
    dispatch({
      type: ADD_CHOICE,
      payload: { choice },
    });
  };

  const renderRadioQuestion = () => {
    return (
      <View style={style.containerRadioQuestion}>
        <Text style={{ textAlign: 'center' }}>{question.quest}</Text>
        <RadioButton
          selected={select}
          options={['Si', 'A veces', 'Aun no']}
          onChangeSelect={(opt, index) => {
            setChoice(opt);
            setSelect(index);
          }}
          vertical
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button title={'Enviar'} onPress={add_card} />
        </View>
      </View>
    );
  };

  const renderTextQuestion = () => {
    return (
      <View style={style.containerRadioQuestion}>
        <Text style={{ textAlign: 'center' }}>{question.quest}</Text>
        <TextInput
          placeholder={'Escribir'}
          multiline
          containerStyle={{ height: 150 }}
          onChangeText={text => setChoice(text)}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button title={'Enviar'} onPress={add_card} />
        </View>
      </View>
    );
  };

  const renderImageQuestion = () => {
    return (
      <View style={style.containerRadioQuestion}>
        <Text style={{ textAlign: 'center' }}>{question.quest}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Image source={require('../assets/icon.png')} style={{ width: '40%', height: '100%' }} />
          <RadioButton
            selected={select}
            options={['Si', 'Aun no']}
            onChangeSelect={(opt, index) => {
              setChoice(opt);
              setSelect(index);
            }}
            vertical
            verticalPosition
          />
        </View>
      </View>
    );
  };

  const renderRadioTextQuestion = () => {
    return (
      <View>
        <View style={style.containerRadioQuestion}>
          <Text style={{ textAlign: 'left' }}>
            {question.num}.{question.quest}
          </Text>
          <RadioButton
            containerStyle={style.text}
            selected={select}
            options={['Si', 'No']}
            onChangeSelect={(opt, index) => {
              setChoice(opt);
              setSelect(index);
            }}
            vertical
          />
          <TextInput
            placeholder={'Si contesta "No", explique...'}
            containerStyle={{ borderRadius: 25 }}
          />
        </View>
      </View>
    );
  };

  switch (question.typeQuestion) {
    case RADIO_QUESTION:
      return renderRadioQuestion();

    case TEXT_QUESTION:
      return renderTextQuestion();

    case IMAGE_QUESTION:
      return renderImageQuestion();

    case RADIO_TEXT_QUESTION:
      return renderRadioTextQuestion();

    case 'FINAL':
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button title={'Enviar'} onPress={add_card} />
        </View>
      );
  }
};
export default QuestionScreen;
