import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, Platform, StyleSheet } from 'react-native';
import { themeColors } from '../../../theme';
import { useNavigation } from '@react-navigation/native';
// import { StarIcon, PlusIcon } from 'react-native-heroicons';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';

const RecipeFoodCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            {/* <StarIcon size={15} color="white" /> */}
            <Text style={styles.ratingText}>{item.stars}</Text>
          </View>
          <View style={styles.distanceContainer}>
            <Text style={styles.distanceLabel}>Miles</Text>
            <Text style={styles.distanceText}>{item.miles}</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ {item.price}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Product', { ...item })}
            style={styles.addButton}
          >
            {/* <PlusIcon size={25} strokeWidth={2} color={themeColors.bgDark} /> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    backgroundColor: themeColors.bgDark,
    height: ios ? height * 0.4 : height * 0.50,
    width: width * 0.65,
  },
  imageContainer: {
    shadowColor: 'black',
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 0.8,
    marginTop: ios ? -(height * 0.08) : 15,
  
  },
  image: {
    height: 100,
    width: 100,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: ios ? 5 : 0,
  },
  infoContainer: {
    spaceY: 3,
    marginTop: 3,
  },
  name: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    zIndex: 10,
  },
  ratingContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
    paddingVertical: 1,
    paddingHorizontal: 2,
    width: 16,
    zIndex: 10,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  distanceLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.6,
  },
  distanceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  priceContainer: {
    backgroundColor: ios ? themeColors.bgDark : 'transparent',
    shadowColor: themeColors.bgDark,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    shadowColor: 'black',
    shadowRadius: 40,
    shadowOffset: { width: -20, height: -10 },
    shadowOpacity: 1,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 25,
  },
});

export default RecipeFoodCard;
