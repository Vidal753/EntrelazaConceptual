import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ADD_CHOICE } from '../reducer/choice';
import Button from '../component/Button';
import RadioQuestion from './RadioQuestion';
import TextQuestion from './TextQuestion';
import ImageQuestion from './ImageQuestion';
import RadioTextQuestion from './RadioTextQuestion';

export const RADIO_QUESTION = 'radio-question';
export const TEXT_QUESTION = 'text-question';
export const IMAGE_QUESTION = 'image_question';
export const RADIO_TEXT_QUESTION = 'radio-text-question';

const QuestionScreen = ({ question }) => {
  const [choice, setChoice] = useState('');
  const dispatch = useDispatch();
  const [select, setSelect] = useState(0);

  const add_card = () => {
    dispatch({
      type: ADD_CHOICE,
      payload: { choice },
    });
  };

  switch (question.typeQuestion) {
    case RADIO_QUESTION:
      return (
        <View>
          <RadioQuestion
            question={question}
            selected={select}
            options={['Si', 'A veces', 'Aun no']}
            onChangeSelect={(opt, index) => {
              setChoice(opt);
              setSelect(index);
            }}
          />
        </View>
      );

    case TEXT_QUESTION:
      return <TextQuestion question={question} onChangeText={text => setChoice(text)} />;

    case IMAGE_QUESTION:
      return (
        <ImageQuestion
          question={question}
          selected={select}
          options={['Si', 'Aun no']}
          onChangeSelect={(opt, index) => {
            setChoice(opt);
            setSelect(index);
          }}
        />
      );

    case RADIO_TEXT_QUESTION:
      return (
        <RadioTextQuestion
          question={question}
          selected={select}
          options={['Si', 'No']}
          onChangeSelect={(opt, index) => {
            setChoice(opt);
            setSelect(index);
          }}
        />
      );

    case 'FINAL':
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button title={'Enviar'} onPress={add_card} />
        </View>
      );
  }
};
export default QuestionScreen;
