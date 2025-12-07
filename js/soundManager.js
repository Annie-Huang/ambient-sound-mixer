export class SoundManager {
  constructor() {
    this.audioElements = new Map();
    this.isPlaying = false;
    // console.log('Soundmanager created');
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

      // Add sound to audio elements map
      this.audioElements.set(soundId, audio);
    } catch (error) {
      console.error(`Failed to load sound ${error}`);
      return false;
    }
  }

  // Play a specific sound
  async playSound(soundId) {
    const audio = this.audioElements.get(soundId);

    if (audio) {
      try {
        await audio.play();
        // console.log(`Playing: ${soundId}`);
        return true;
      } catch (error) {
        console.error(`Failed to play ${soundId}`, error);
        return false;
      }
    }
  }

  // Pause a sepecific sound
  pauseSound(soundId) {
    const audio = this.audioElements.get(soundId);

    if (audio && !audio.paused) {
      audio.pause();
      // console.log(`Paused ${soundId}`);
    }
  }

  // Set volume for a specific sound (0-100)
  setVolume(soundId, volume) {
    const audio = this.audioElements.get(soundId);

    if (!audio) {
      console.error(`Sound ${soundId} not found`);
      return false;
    }

    // Convert 0-100. to 0-1
    audio.volume = volume / 100;
    console.log(`Volumne for ${soundId}: ${volume}`);
    return true;
  }

  // Play all sounds
  playAll() {
    for (const [soundId, audio] of this.audioElements) {
      if (audio.paused) {
        audio.play();
      }
    }
    this.isPlaying = true;
  }
}
