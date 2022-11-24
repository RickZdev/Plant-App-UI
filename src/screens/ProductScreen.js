import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

import NavButton from '../components/NavButton';
import COLORS from '../constants/COLORS';

const ProductScreen = ({route, navigation}) => {
  const data = route.params;
  const {height} = Dimensions.get('window');
  return (
    <View className="flex-1 bg-white ">
      {/* header */}
      <View className="flex-row justify-between items-center px-8 pt-4">
        <NavButton
          icon={'arrow-left'}
          number={2}
          onPress={() => navigation.goBack()}
        />
        <NavButton icon={'trash'} number={2} />
      </View>

      {/* picture */}
      <View className="flex-1 z-50">
        <Image
          source={data.plantImage}
          resizeMode={'contain'}
          className="w-full h-full top-10"
        />
      </View>

      {/*  */}
      <View
        className=" bg-primary rounded-t-3xl pt-2"
        style={{height: height / 2}}>
        <View className="flex-1 py-6">
          {/* heart */}
          <View className="self-end pr-10">
            <Fontisto name="heart-alt" color={COLORS.white} size={22} />
          </View>

          {/* plant description */}
          <View className="justify-center items-center ">
            <Text className="font-EinaSemiBold text-white text-4xl">
              {data.plantName}
            </Text>
            <Text className="font-EinaRegular text-base text-white">
              Artificial potted plant, in/outdoor
            </Text>
          </View>
        </View>
        {/* plant details */}
        <View className="flex-1 px-8 justify-center space-y-2">
          <View className="flex-row justify-between items-center">
            <Text className="font-EinaRegular text-base text-white">
              Product details
            </Text>
            <Feather name="chevron-right" size={20} color={COLORS.white} />
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="font-EinaRegular text-base text-white">
              Measurements
            </Text>
            <Feather name="chevron-right" size={20} color={COLORS.white} />
          </View>
        </View>

        {/* size */}
        <View className=" flex-1 flex-row px-8 items-center justify-center">
          <View className="flex-1 flex-row space-x-3">
            <TouchableOpacity className="border-white border-2 rounded-2xl px-4 py-1">
              <Text className="text-white font-EinaSemiBold text-base">
                19-23cm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="border-white border-2 rounded-2xl px-4 py-1">
              <Text className="text-white font-EinaSemiBold text-base">
                19-23cm
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="font-EinaSemiBold text-3xl text-white">
            {data.price}
          </Text>
        </View>

        <View className="px-8 justify-center pb-5">
          <TouchableOpacity
            className="bg-[#475A19] py-4 rounded-2xl"
            style={{elevation: 10}}>
            <Text className="text-center font-EinaSemiBold text-base text-white">
              Add to Card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;
