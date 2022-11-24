import {View, Text, Dimensions, FlatList} from 'react-native';
import DATA from '../constants/DATA';

const Categories = () => {
  return (
    <FlatList
      data={DATA.categories}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal
      className="px-8 mt-4 mb-5"
      renderItem={({item, index}) => <Card data={item} index={index} />}
    />
  );
};

const Card = ({data}) => {
  const {width} = Dimensions.get('window');
  return (
    <View
      className="mr-2 border-2 border-primary rounded-md h-7 justify-center items-center"
      style={{width: width / 4 - 22}}>
      <Text className="font-EinaRegular text-sm text-primary">
        {data.category}
      </Text>
    </View>
  );
};

export default Categories;
