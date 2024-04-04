import React from 'react'
// import { useMemo } from "react"
// import BottomSheet from "@gorhom/bottom-sheet"
import { StyleSheet, View, Text } from 'react-native'
// import { PricingCard, Icon } from 'react-native-elements'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/Ionicons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
function TestScreen() {
    const snapPoints = useMemo(() => ["25%", "50%", "70%"], [])

  return (
    <View style={styles.container}>
      {/* <BottomSheet index={1} snapPoints={snapPoints}> */}
        <View style={styles.contentContainer}>
          <Text style={styles.containerHeadline}>Awesome Bottom Sheet 🎉</Text>
        </View>
      {/* </BottomSheet> */}
    </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    contentContainer: {
      flex: 1,
      alignItems: "center"
    },
    containerHeadline: {
      fontSize: 24,
      fontWeight: "600",
      padding: 20
    }
})

export default TestScreen
