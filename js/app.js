// !!!! very important, all import needs to have .js in there, otherwise you will see error:
// app.js:2  GET http://localhost:3000/js/soundData net::ERR_ABORTED 404 (Not Found)
import { sounds, defaultPresets } from './soundData.js';
import { SoundManager } from './soundManager.js';
import { UI } from './ui.js';

class AmbientMixer {
  // Initialize dependencies and default state
  constructor() {
    // console.log('Initializing state...');
    this.soundManager = new SoundManager();
    this.ui = new UI();
    this.presetManager = null;
    this.timer = null;
    this.currenctSoundState = {};
    this.isInitialized = false;
  }

  init() {
    try {
      // console.log('Initializing app...');

      // Initialize UI
      this.ui.init();

      // Render sound cards using our sound data
      this.ui.renderSoundCards(sounds);

      this.setupEventListeners();

      // this.soundManager.loadSound('rain', 'audio/rain.mp3');
      // Load all sound files
      this.loadAllSounds(); // can be check under devtool network tab, filter Media files

      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialze app: ', error);
    }
  }

  // Setup all event listeners
  setupEventListeners() {
    // Handle all clicks with event delegation
    document.addEventListener('click', (e) => {
      // Check if play button was clicked
      if (e.target.closest('.play-btn')) {
        const soundId = e.target.closest('.play-btn').dataset.sound;
        console.log(soundId);
      }
    });
  }

  // Load all sound files
  loadAllSounds() {
    sounds.forEach((sound) => {
      const audioUrl = `audio/${sound.file}`;
      const success = this.soundManager.loadSound(sound.id, audioUrl);
      if (!success) {
        console.warn(`Could not load sound: ${sound.name} from ${audioUrl}`);
      }
    });
  }
}

// Initialize app when DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
  const app = new AmbientMixer();
  app.init();

  // Make app available for testing in browser
  // In devtool console
  // app.soundManager.setVolume('rain', 10);
  // app.soundManager.playSound('rain');
  // app.soundManager.pauseSound('rain')
  window.app = app;
});
