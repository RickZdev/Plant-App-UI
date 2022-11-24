import {View, Text} from 'react-native';
import React from 'react';
import NavButton from './NavButton';

const Header = () => {
  return (
    <View className="flex-row justify-between px-8 pt-4">
      <Text className="font-EinaSemiBold text-2xl text-black">
        Good Morning!{'\n'}Frederick
      </Text>
      <View className="flex-row space-x-2">
        <View>
          <NavButton icon={'bell'} number={7} />
        </View>
        <View>
          <NavButton icon={'trash'} number={2} />
        </View>
      </View>
    </View>
  );
};

export default Header;
