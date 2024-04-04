import React, {FC} from 'react'
// import { useMemo } from "react"
// import BottomSheet from '@gorhom/bottom-sheet'
import { Dimensions, Image, Platform, Text, View} from 'react-native';
import { ScrollView } from 'react-native';
import RecipeFoodCard from '../components/RecipeFoodCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../../../constants/colors';
import { Calories, Easy, People, Timer, TwoDollarSign, Star} from '../assets/svg';

const ios = Platform.OS === 'ios';
const { width, height } = Dimensions.get('window');

interface Item {
    dish_name: string;
    author: string;
    stars: number;
    difficulty: string;
    servings: number;
    calories: number;
    prepTime: string;
    cookTime: string;
    totalTimeNeeded: string;
    price: number;
    ingredients: string[];
    ingredientCount: number[];
    image: any;
}

const item: Item = {
    dish_name: 'Nikko',
    author: 'Lyna Jiang',
    stars: 4.5,
    difficulty: 'easy',
    servings: 3,
    calories: 120,
    prepTime: '20 min',
    cookTime: '40 min',
    totalTimeNeeded: '1 hr',
    price: 9.99,
    ingredients: ["egg", "tortilla"],
    ingredientCount: [1, 3],
    image: require('../../../assets/images/nikko.png'),
}

const RecipeScreen: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.dishName}>{item.dish_name}</Text>
                <View style={styles.columnForStar}>
                    <View style={styles.authorDetail}>
                        <Text style={styles.authorBy}>by </Text>
                        <TouchableOpacity>
                            <Text style={styles.authorName}>
                                {item.author}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Star />
                        <View style={styles.highlightGap} />
                        <Text>{item.stars}</Text>
                        <View style={styles.highlightGap} />
                    </View>
                </View>

                <View style={styles.defails}>
                    <View style={styles.highlight}>
                        <Easy />
                        <View style={styles.highlightGap} />
                        <Text>{item.difficulty}</Text>
                    </View>

                    <View style={styles.highlight}>
                        <People />
                        <View style={styles.highlightGap} />
                        <Text>{item.servings}</Text>
                    </View>

                    <View style={styles.highlight}>
                        <Timer />
                        <View style={styles.highlightGap} />
                        <Text>{item.totalTimeNeeded}</Text>
                    </View>

                    <View style={styles.highlight}>
                        <Calories />
                        <View style={styles.highlightGap} />
                        <Text>{item.calories}</Text>
                    </View>

                    <View style={styles.highlight}>
                        <TwoDollarSign />
                        <View style={styles.highlightGap} />
                        <Text>{item.price}</Text>
                    </View>

                </View>

                <View style={{marginBottom:8}} />

                <View style={styles.descriptionBox}>
                    <Text style={styles.categoryTitle}>Description</Text>
                    <Text style={{marginBottom:8}}>Sushi is the best food. I love it so much. I would like to go visit Japan to try it myself. Eventually, I shall go. Perhaps in the summer and that would be the soonest.</Text>
                </View>
                <Text></Text>
                <Text style={styles.categoryTitle}>Ingredients</Text>

                {/* <View style={styles.ingredients}>
                    {item.ingredients.map((ingredient, index) => (
                        <Text key={index}>{item.ingredientCount[index]} {ingredient}</Text>
                    ))}
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        height: height/8*3,
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    infoContainer: {
        paddingTop: height * 0.4,
        paddingHorizontal: 20,
    },
    dishName: {
        color: COLORS.black,
        fontSize: 28,
        marginBottom: 4,
    },

    columnForStar: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    authorDetail: {
        flexDirection: 'row',
        marginRight: 2,
        alignItems: "center",
    },

    authorBy: {
        fontSize: 18,
    },


    authorName: {
        color: COLORS.orange,
        fontSize: 18,
    },

    defails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        marginBottom: 10,
    },

    highlight: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    highlightGap: {
        marginLeft: 8,
    },

    descriptionBox: {

    },

    categoryTitle: {
        fontSize: 22,
        marginBottom: 8,
    },

    ingredients: {
        fontSize: 24,
    },
})

export default RecipeScreen;

