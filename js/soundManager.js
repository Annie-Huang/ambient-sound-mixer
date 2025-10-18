export class SoundManager {
  constructor() {
    this.audioElements = new Map();
    this.isPlaying = false;
    console.log('Soundmanager created');
  }

  // Load a sound file
  loadSound(soundId, filePath) {
    // console.log(`Loading sound ${soundId} from ${filePath}`);
    // return true;

    try {
      const audio = new Audio();
      audio.src = filePath;
      audio.loop = true;

      // if you do 'auto', you will need to make sure it preloads all the audio before anything.
      // But in mobile, it doesn't work because it takes longer to load, so we load the metadata first.
      audio.preload = 'metadata';
    } catch (error) {
      console.error(`Failed to load sound ${error}`);
      return false;
    }
  }
}
