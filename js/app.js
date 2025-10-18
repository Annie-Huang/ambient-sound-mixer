// !!!! very important, all import needs to have .js in there, otherwise you will see error:
// app.js:2  GET http://localhost:3000/js/soundData net::ERR_ABORTED 404 (Not Found)
import { sounds, defaultPresets } from './soundData.js';
import { SoundManager } from './soundManager.js';

class AmbientMixer {
  // Initialize dependencies and default state
  constructor() {
    // console.log('Initializing state...');
    this.soundManager = new SoundManager();
    this.ui = null;
    this.presetManager = null;
    this.timer = null;
    this.currenctSoundState = {};
    this.isInitialized = false;
  }

  init() {
    try {
      // console.log('Initializing app...');
      this.soundManager.loadSound('rain', 'audio/rain.mp3');
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialze app: ', error);
    }
  }
}

// Initialize app when DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
  const app = new AmbientMixer();
  app.init();
});
