import * as THREE from 'three'
import ThirdPersonCamera from '../ThirdPersonCamera.js'

// Simula si el dispositivo es móvil o no
jest.mock('../../Utils/Device.js', () => ({
  __esModule: true,
  default: jest.fn(() => false) // puedes cambiar a true para simular móviles
}))

describe('ThirdPersonCamera', () => {
  let mockExperience, mockCameraInstance, mockTarget

  beforeEach(() => {
    mockCameraInstance = {
      position: new THREE.Vector3(),
      lookAt: jest.fn()
    }

    mockExperience = {
      camera: {
        instance: mockCameraInstance
      }
    }

    mockTarget = {
      position: new THREE.Vector3(5, 0, 5),
      rotation: new THREE.Euler(0, Math.PI / 2, 0) // 90 grados en Y
    }
  })

  test('se inicializa con el offset correcto en escritorio', () => {
    const camera = new ThirdPersonCamera(mockExperience, mockTarget)
    expect(camera.offset).toEqual(new THREE.Vector3(0, 2.5, -5))
    expect(camera.fixedY).toBe(2.5)
  })

  test('update mueve la cámara hacia el objetivo', () => {
    const camera = new ThirdPersonCamera(mockExperience, mockTarget)

    camera.update()

    // Esperamos que la posición de la cámara se esté interpolando
    const pos = mockExperience.camera.instance.position
    expect(pos.x).not.toBe(0)
    expect(pos.z).not.toBe(0)

    // Esperamos que la cámara esté mirando al personaje
    expect(mockCameraInstance.lookAt).toHaveBeenCalled()
  })

  test('update no hace nada si no hay target', () => {
    const camera = new ThirdPersonCamera(mockExperience, null)
    const spy = jest.spyOn(mockCameraInstance.position, 'lerp')

    camera.update()

    expect(spy).not.toHaveBeenCalled()
    expect(mockCameraInstance.lookAt).not.toHaveBeenCalled()
  })
})
