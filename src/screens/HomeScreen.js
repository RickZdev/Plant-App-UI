import {ScrollView, View} from 'react-native';

import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Product from '../components/Product';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
      {/* header */}
      <Header />

      {/* search bar */}
      <SearchBar />

      {/* categories */}
      <Categories />
      <View className="justify-center items-center">
        <View
          className="w-0 h-0 bg-green-400"
          style={{
            elevation: 10,
            borderStyle: 'solid',
            borderLeftWidth: 60,
            borderRightWidth: 60,
            borderBottomWidth: 120,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'red',
            transform: [{rotate: '180deg'}],
          }}
        />
      </View>
      {/* products */}
      <ScrollView horizontal>
        <Product />
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;
