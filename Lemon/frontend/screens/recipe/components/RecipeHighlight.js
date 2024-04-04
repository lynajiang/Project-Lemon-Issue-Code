import React from 'react'
import { StyleSheet } from 'react-native'
import COLORS from '../../../constants/colors'

function RecipeHighlight() {
    const item = {
        time_spent: '35',
        servings: 3,
        calories: 120,
        difficulty: 'easy',
    }
    return (
        <View styles={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 40,
        // backgroundColor: COLORS
    },
    
    smallContainer: {

    }
})

export default RecipeHighlight
