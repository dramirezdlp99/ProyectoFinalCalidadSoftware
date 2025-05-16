const THREE = require('three')

// Mock manual para isMobileDevice
jest.mock('../../Utils/Device.js', () => ({
  __esModule: true,
  default: jest.fn(() => false) // Cambia a true si quieres simular móvil
}))

// Importa la clase después del mock
const ThirdPersonCamera = require('../../ThirdPersonCamera.js').default

describe('ThirdPersonCamera', () => {
  const mockExperience = {
    camera: {
      instance: {
        position: new THREE.Vector3(),
        lookAt: jest.fn()
      }
    }
  }

  const mockTarget = {
    position: new THREE.Vector3(1, 0, 1),
    rotation: new THREE.Euler(0, 0, 0)
  }

  it('debe posicionar la cámara correctamente en desktop', () => {
    const cameraSystem = new ThirdPersonCamera(mockExperience, mockTarget)
    cameraSystem.update()

    // Verificamos que la cámara se mueva hacia la posición esperada (aproximadamente)
    expect(mockExperience.camera.instance.position.z).toBeLessThan(1) // porque z = target.z + offset.z (-5)
    expect(mockExperience.camera.instance.lookAt).toHaveBeenCalled()
  })
})
