import { sounds, defaultPresets } from './soundData';

class AmbientMixer {
  // Initialize dependencies and default state
  constructor() {
    console.log('Initializing state...');
    this.soundManager = null;
    this.ui = null;
    this.presetManager = null;
    this.timer = null;
    this.currenctSoundState = {};
    this.isInitialized = false;
  }

  init() {
    try {
      console.log('Initializing app...');
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialze app: ', error);
    }
  }
}
