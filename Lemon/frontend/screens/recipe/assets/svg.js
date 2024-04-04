import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';
import COLORS from '../../../constants/colors';

const { width, height } = Dimensions.get('window');
export const Easy = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width/16} // Adjust the width as needed
      height={height/16} // Adjust the height as needed
    >
      {/* Leftmost Bar */}
      <Rect
        x={96}
        y={224}
        width={80}
        height={192}
        rx={20}
        ry={20}
        fill={COLORS.black} // Fill color for the leftmost bar
      />
      {/* Outline for Bar 2 */}
      <Rect
        x={240}
        y={176}
        width={80}
        height={240}
        rx={20}
        ry={20}
        fill="none" // Transparent fill for outline
        stroke={COLORS.black} // Stroke color for outline
        strokeWidth={20} // Stroke width for outline
      />
      {/* Outline for Bar 3 */}
      <Rect
        x={383.64}
        y={112}
        width={80}
        height={304}
        rx={20}
        ry={20}
        fill="none" // Transparent fill for outline
        stroke={COLORS.black} // Stroke color for outline
        strokeWidth={20} // Stroke width for outline
      />
    </Svg>
  );
};


export const Medium = () => {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={width/16} // Adjust the width as needed
        height={height/16} // Adjust the height as needed
      >
        {/* Leftmost Bar */}
        <Rect
          x={96}
          y={224}
          width={80}
          height={192}
          rx={20}
          ry={20}
          fill={COLORS.black} // Fill color for the leftmost bar
        />
        {/* Outline for Bar 2 */}
        <Rect
          x={240}
          y={176}
          width={80}
          height={240}
          rx={20}
          ry={20}
          fill={COLORS.black} // Transparent fill for outline
        />
        {/* Outline for Bar 3 */}
        <Rect
          x={383.64}
          y={112}
          width={80}
          height={304}
          rx={20}
          ry={20}
          fill="none" // Transparent fill for outline
          stroke={COLORS.black} // Stroke color for outline
          strokeWidth={20} // Stroke width for outline
        />
      </Svg>
    );
  };

  export const Hard = () => {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={width/16} // Adjust the width as needed
        height={height/16} // Adjust the height as needed
      >
        {/* Leftmost Bar */}
        <Rect
          x={96}
          y={224}
          width={80}
          height={192}
          rx={20}
          ry={20}
          fill={COLORS.black} // Fill color for the leftmost bar
        />
        {/* Outline for Bar 2 */}
        <Rect
          x={240}
          y={176}
          width={80}
          height={240}
          rx={20}
          ry={20}
          fill={COLORS.black} // Transparent fill for outline
        />
        {/* Outline for Bar 3 */}
        <Rect
          x={383.64}
          y={112}
          width={80}
          height={304}
          rx={20}
          ry={20}
          fill={COLORS.black}
        />
      </Svg>
    );
  };

export const People = () => {
    return (
        <View>
            <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={width/16} // Adjust the width as needed
            height={height/16} // Adjust the height as needed
            >
            <Path
                d="M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zM467.83 432H204.18a27.71 27.71 0 01-22-10.67 30.22 30.22 0 01-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 01-5.32 25.78A27.68 27.68 0 01467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zM212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 004.79 23.36A25.32 25.32 0 0041.72 400h111a8 8 0 007.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 00-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z"
                fill={COLORS.black}
                // stroke={COLORS.black}
                // strokeWidth={20}
            />
            </Svg>
        </View>
    );
};

export const Timer = () => {
    return (
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={width/16} // Adjust the width as needed
                height={width/16} // Adjust the height as needed
            >
                {/* First Path */}
                <Path
                d="M112.91 128A191.85 191.85 0 0064 254c-1.18 106.35 85.65 193.8 192 194 106.2.2 192-85.83 192-192 0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 00-4.5 4.37V152"
                fill="none"
                stroke={COLORS.black}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                />
                {/* Second Path */}
                <Path
                d="M233.38 278.63l-79-113a8.13 8.13 0 0111.32-11.32l113 79a32.5 32.5 0 01-37.25 53.26 33.21 33.21 0 01-8.07-7.94z"
                fill="none"
                stroke={COLORS.black}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                />
            </Svg>
    )
}


export const TwoDollarSign = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 624 512"
            width={width/16} // Adjust the width as needed
            height={width/36}>
          <Path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"/>
          <Path d="M320 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C279.4 279.3 244.4 270 218.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C183.7 116 212.3 91.2 244.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" transform="translate(192)"/>
        </Svg>
    );
  };

  export const Calories = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <Path d="M14.265 1.627c0 3.545 1.869 5.327 3.479 7.021 1.54 1.62 3.006 3.163 3.006 6.102 0 4.812-3.753 8.25-8.565 8.25-4.813 0-8.935-3.421-8.935-8.25 0-2.039.962-4.011 2.509-4.899.305-.175.672.007.803.334C7.563 12.684 8.797 12.64 9.437 12c.388-.387.47-1.116-.004-2.062-2.405-4.812 1.863-8.279 4.2-8.854.336-.082.615.198.632.543ZM12.185 21.5c4.059 0 7.065-2.84 7.065-6.75 0-2.337-1.093-3.489-2.678-5.158l-.021-.023c-1.44-1.517-3.139-3.351-3.649-6.557a6.148 6.148 0 0 0-1.911 1.76c-.787 1.144-1.147 2.633-.216 4.495.603 1.205.777 2.74-.277 3.794-.657.657-1.762 1.1-2.956.586-.752-.324-1.353-.955-1.838-1.79-.567.706-.954 1.74-.954 2.893 0 3.847 3.288 6.75 7.435 6.75Z"/>
        </Svg>
    )
  }


export const Star = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="24" height="24" >
            <Path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"/>
        </Svg>
    )
}


const styles = StyleSheet.create({
    svg: {
        width: width,
        height: height/16,
    }
})
