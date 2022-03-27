import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList } from 'react-native';
import Questions, {
  RADIO_QUESTION,
  CHECK_QUESTION,
  IMAGE_QUESTION,
  TEXT_QUESTION,
} from '../component/Questions';

export default function() {
  const data = [
    {
      typeQuestion: RADIO_QUESTION,
      quest:
        'Si quiere algo que no alcanza, busca su nino una silla o una caja para subirse encima ya alcanzarlo' +
        '(por ejemplo, para agarrar un jueguete en el mostrador de la cocina o para ayudarle ne la cocina)?',
    },
    {
      typeQuestion: TEXT_QUESTION,
      quest:
        ' alcanzarlo' +
        '(por ejemplo, para agarrar un jueguete en el mostrador de la cocina o para ayudarle ne la cocina)?',
    },
  ];

  return (
    <View>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="light" />
      <FlatList
        keyExtractor={(item, index) => 'Question-' + index}
        data={data}
        renderItem={({ item, index }) => <Questions question={item} seleteted={index} />}
      />
    </View>
  );
}
