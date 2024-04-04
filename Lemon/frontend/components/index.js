import { TouchableOpacity, StyleSheet, Image, Text,  View, Dimensions } from "react-native"
import COLORS from "../constants/colors"
import TEXT from "../constants/text"
import Icon from "react-native-vector-icons/Ionicons"

import { ArrowLeftIcon } from "react-native-heroicons/solid"
import LinearGradient from "react-native-linear-gradient"

const {width, height} = Dimensions.get('window');
export const Reusable = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View>

            </View>
        </TouchableOpacity>
    )
}



export const ReusableText = ({text, family, size, color}) => {
    return (
        <Text style={styles.textStyle(family, size, color)}> {text} </Text>
    )
}


export const ReusableBtn = ({ 
    onPress, 
    btnText,
    btnTextFont,
    btnFontSize,
    btnTextColor,
    width,
    backgroundColor,
    borderWidth,
    borderColor,
    borderRadius,
    height
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor, borderRadius, height)}>
            <Text style={styles.btnText(btnTextFont, btnFontSize, btnTextColor)}>
                {btnText}
            </Text>
        </TouchableOpacity>
    )
}


// Example: <HeightSpacer height={40 />}
export const HeightSpacer = ({height}) => {
    return (
        <View style={{height:height}}>

        </View>
    )
}

export const WidthSpacer = ({width}) => {
    return (
        <View style={{width:width}}>

        </View>
    )
}


export const NetworkImage = ({source, width, height, radius}) => {
    return (
        <Image
            source={{uri: source}}
            style={styles.image(width, height, radius)}
        />
    )
}


export const AppBar = ({title, color, color1, onPress, onPress1}) => {
    return (

            <View style={styles.overlay}>
            <View style={styles.rowWithSpace('space-between')}>
                <TouchableOpacity 
                style={styles.box(color)}
                onPress={onPress}>
                    <ArrowLeftIcon
                        color={COLORS.black}
                        size={26}
                    />
                </TouchableOpacity>

                <ReusableText
                    text={title}
                    family={"medium"}
                    size={TEXT.medium}
                    color={COLORS.black}
                />

                <TouchableOpacity 
                style={styles.box1(color1)}
                onPress={onPress1}>
                    <Icon
                        name="settings-outline"
                        size={26}
                    />
                </TouchableOpacity>
            </View>
        </View>

        
    )
}

export const DescriptionText = ({numLines, text, fontSize}) => {
    return (
        <Text numberOfLines={numLines} style={styles.description(fontSize)}> {text}

        </Text>
    )
}



const styles = StyleSheet.create({
    textStyle: (family, size, color) => ({
        fontFamily: family,
        fontSize: size,
        color: color
    }),
    btnText: (btnTextFont, btnFontSize, btnTextColor) => ({
        fontFamily: btnTextFont,
        fontSize: btnFontSize,
        color: btnTextColor
    }),
    btnStyle: (width, backgroundColor, borderWidth, borderColor, borderRadius, height) => ({
        width: width,
        backgroundColor: backgroundColor,
        borderWidth: borderWidth,
        borderColor: borderColor,

        alignItems: "center",
        justifyContent: "center",
        borderRadius: borderRadius,
        height: height,
    }),

    image: (width, height, radius) => ({
        width: width,
        height: height,
        borderRadius: radius,
        resizeMode: "cover"
    }),

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        justifyContent: "center"
    },
    box: (color) => ({
        backgroundColor: color,
        width: 30,
        height: 30,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",

    }),
    box1: (color1) => ({
        backgroundColor: color1,
        width: 30,
        height: 30,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",

    }),
    rowWithSpace: (justifyContent) => ({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: justifyContent
    }),

    description: (fontSize) => ({
        paddingVertical: 10,
        fontFamily: "regular",
        textAlign: "justify",
        fontSize: fontSize
    })
})