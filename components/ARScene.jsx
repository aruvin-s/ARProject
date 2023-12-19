import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import {
  ViroARScene,
  ViroAmbientLight,
  ViroARPlane,
  Viro3DObject,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = ({ handleRotateRight, handleRotateLeft, rotation }) => {
  const onDrag = (dragToPos, source) => {
    if (rotation && rotation.length === 3 && source.dragStartPosition) {
      const deltaY = dragToPos[1] - (source.dragStartPosition[1] || 0);
      setRotation([0, (rotation[1] || 0) + deltaY, 0]);
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
        }}
      >
        <Viro3DObject
          type="OBJ"
          source={require('.././assets/Chair/couchPoofyPillows.obj')}
          resources={[require('.././assets/Chair/couchPoofyPillows.mtl')]}
          scale={[1, 1, 1]}
          position={[0, -1, -3]}
          rotation={rotation}
          onDrag={onDrag}
        />
      </ViroARPlane>
    </ViroARScene>
  );
};

const ARScene = () => {
  const [rotation, setRotation] = useState([0, 0, 0]);

  const handleRotateRight = () => {
    setRotation([rotation[0], (rotation[1] || 0) + 45, rotation[2]]);
  };

  const handleRotateLeft = () => {
    setRotation([rotation[0], (rotation[1] || 0) - 45, rotation[2]]);
  };

  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{ scene: HelloWorldSceneAR, handleRotateRight, handleRotateLeft, rotation }}
        style={styles.f1}
      />
      {/* Rotate Right Button */}
      <TouchableOpacity style={[styles.rotateButton, { right: 20 }]} onPress={handleRotateRight}>
        <Text style={styles.buttonText}>Rotate Right</Text>
      </TouchableOpacity>

      {/* Rotate Left Button */}
      <TouchableOpacity style={[styles.rotateButton, { right: 120 }]} onPress={handleRotateLeft}>
        <Text style={styles.buttonText}>Rotate Left</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  f1: {
    flex: 1,
  },
  rotateButton: {
    position: 'absolute',
    bottom: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ARScene;