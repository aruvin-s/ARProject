import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  ViroARScene,
  ViroAmbientLight,
  ViroARPlane,
  Viro3DObject,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const onDrag = (dragToPos, source) => {
    // dragtoPos[0]: x position // dragtoPos[1]: y position // dragtoPos[2]: z position
  };

  const [initialRotation, setInitialRotation] = useState([0, 0, 0]);
  const [currentRotation, setCurrentRotation] = useState([0, 0, 0]);
  const [objectPosition, setObjectPosition] = useState([0, -1, -3]);

  const onRotate = (rotateState, rotationFactor, source) => {
    if (rotateState === 3) {
      // Gesture started, save the initial rotation and position
      setInitialRotation([...currentRotation]);
    } else if (rotateState === 2) {
      // Gesture ongoing, update the rotation dynamically
      const newRotation = [
        initialRotation[0],
        initialRotation[1] + rotationFactor,
        initialRotation[2],
      ];
  
      setCurrentRotation(newRotation);
    }
  };
  

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
      <ViroARPlane
        minHeight={0.05}
        minWidth={0.05}
        minDistance={4}
        maxDistance={10}
        onAnchorFound={() => {
          console.log('AR plane found!');
          // Update the position when the anchor is found
          setObjectPosition([0, -1, -3]); // Adjust the position as needed
        }}
      >
        <Viro3DObject
          type="GLB"
          source={require('.././assets/glbchair/gaming.glb')}
          //resources={[require('.././assets/Chair/couchPoofyPillows.mtl')]}
          scale={[0.1, 0.1, 0.1]}
          position={objectPosition}
          rotation={currentRotation}
          onRotate={onRotate}
          onDrag={onDrag}
        />
      </ViroARPlane>
    </ViroARScene>
  );
};

const ARScene = () => {

  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        style={styles.f1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  f1: {
    flex: 1,
  }
});

export default ARScene;