import React from "react"
import { Pressable } from "react-native"

const ios = Platform.OS == 'ios';

const MyPressable = ({
  style,
  android_ripple = { color: "lightgrey" },
  touchOpacity = 0.4,
  children,
  ...restOfPRops
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        style,
        { opacity: ios && pressed ? touchOpacity : 1 }
      ]}
      android_ripple={android_ripple}
      {...restOfPRops}
    >
      {children}
    </Pressable>
  )
}

export default MyPressable
