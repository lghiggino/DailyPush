import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';


import { styles } from './styles';
import { ChatTeardropDots } from 'phosphor-react-native';
import { theme } from '../../theme';
import { Options } from '../Options';
import { Form } from '../Form';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { Success } from '../Success';

export type FeedbackType = keyof typeof feedbackTypes


function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false)

  const bottomSheetRef = useRef<BottomSheet>(null)

  function handleOpen() {
    bottomSheetRef.current?.expand()
  }

  function handleFeedbackRestart(){
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  function handleFeedbackSent(){
    setFeedbackSent(true)
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOpen}
      >
        <ChatTeardropDots
          size={24}
          weight={'bold'}
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {
          feedbackSent ?
            <Success onSendAnotherFeedback={handleFeedbackRestart} />
            :
            <>
              {feedbackType ?
                <Form feedbackType={feedbackType} onFeedbackCanceled={handleFeedbackRestart} onFeedbackSent={handleFeedbackSent} />
                :
                <Options onFeedbackTypeChanged={setFeedbackType} />
              }
            </>
        }
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
