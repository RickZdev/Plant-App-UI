import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

import DATA from '../constants/DATA';
import COLORS from '../constants/COLORS';

const Product = () => {
  return (
    <FlatList
      data={DATA.product}
      keyExtractor={item => item.id}
      numColumns={2}
      className="px-6"
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => <Card data={item} index={index} />}
    />
  );
};

const Card = ({data, index}) => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductScreen', data)}
      className="mt-16 ml-2 bg-white rounded-xl px-2 py-1 h-36 overflow-visible justify-between mb-5"
      style={{
        width: width / 2 - 50,
        marginRight: index % 2 === 0 ? 25 : 8,
        elevation: 6,
      }}>
      <View className="justify-center items-center">
        <Image
          source={data.plantImage}
          resizeMode="contain"
          className="w-40 h-40 absolute"
        />
      </View>
      <View className="">
        <View className="self-end">
          {data.like === true ? (
            <Fontisto name="heart" color={COLORS.primary} size={18} />
          ) : (
            <Fontisto name="heart-alt" color={COLORS.primary} size={18} />
          )}
        </View>
        <Text
          className="font-EinaSemiBold text-base text-black"
          numberOfLines={1}>
          {data.plantName}
        </Text>
        <View className="flex-row justify-between items-center">
          <Text className="font-EinaSemiBold text-xs text-primary">
            {data.size}
          </Text>
          <Text className="font-EinaSemiBold text-base text-black">
            {data.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
