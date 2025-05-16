import * as THREE from 'three';
import { jest } from '@jest/globals';
import ThirdPersonCamera from '../ThirdPersonCamera.js';

jest.mock('../../Utils/Device.js', () => ({
  __esModule: true,
  default: () => false,
}));

describe('ThirdPersonCamera', () => {
  const mockExperience = {
    camera: {
      instance: {
        position: {
          lerp: jest.fn(),
        },
        lookAt: jest.fn(),
      },
    },
  };

  const mockTarget = {
    position: new THREE.Vector3(1, 0, 1),
    rotation: new THREE.Euler(0, 0, 0),
  };

  it('debe posicionar la cámara correctamente en desktop', () => {
    const cameraSystem = new ThirdPersonCamera(mockExperience, mockTarget);
    cameraSystem.update();

    expect(mockExperience.camera.instance.position.lerp).toHaveBeenCalled();
    expect(mockExperience.camera.instance.lookAt).toHaveBeenCalled();
  });
});
