import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import COLORS from '../constants/COLORS';

const NavButton = ({icon, number, onPress}) => {
  const size = 26;
  const padding = 10;
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white border-2 border-primary justify-center items-center rounded-xl">
      {icon !== 'arrow-left' && (
        <View className="absolute bg-white rounded-full border-2 border-primary -top-2 -right-2 w-6 h-6 justify-center items-center">
          <Text className="text-sm font-EinaSemiBold text-primary">
            {number}
          </Text>
        </View>
      )}
      {(icon === 'bell' && (
        <SimpleLineIcons
          name="bell"
          color={COLORS.primary}
          size={size}
          style={{padding: padding}}
        />
      )) ||
        (icon === 'trash' && (
          <Feather
            name="shopping-cart"
            color={COLORS.primary}
            size={size}
            style={{padding: padding}}
          />
        )) ||
        (icon === 'arrow-left' && (
          <Entypo
            name="chevron-thin-left"
            color={COLORS.primary}
            size={24}
            style={{padding: padding}}
          />
        ))}
    </TouchableOpacity>
  );
};

export default NavButton;
