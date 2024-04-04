import { StyleSheet } from "react-native";

export const reusable = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    rowWithSpace: (justifyContent) => ({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: justifyContent
    })
})