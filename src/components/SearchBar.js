import {View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import COLORS from '../constants/COLORS';

const SearchBar = () => {
  const size = 20;
  return (
    <View className="px-8 pt-7">
      <View>
        <TextInput
          placeholder="Search"
          placeholderTextColor={COLORS.primary}
          className="border-2 border-primary pl-10 py-1 rounded-xl font-EinaRegular text-base z-50"
        />

        <View className="absolute w-full h-full justify-center pl-4">
          <Feather name="search" size={size} color={COLORS.primary} />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
