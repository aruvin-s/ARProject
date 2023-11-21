import React from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroAmbientLight,
  ViroARPlane,
  Viro3DObject,
  ViroMaterials,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200} />

      <ViroARPlane minHeight={0.05} minWidth={0.05}>
        <Viro3DObject
          type="OBJ"
          source={require('.././assets/Koltuk.obj')}
          scale={[1, 1, 1]}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          materials={['someMaterialName']}
        />
      </ViroARPlane>
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
});

ViroMaterials.createMaterials({
  someMaterialName: {
    shininess: 2,
    lightingModel: 'Blinn',
    diffuseColor: '#F24822',
  },
});
