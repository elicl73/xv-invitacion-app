declare module 'use-sound' {
    interface UseSoundOptions {
      volume?: number;
      playbackRate?: number;
      loop?: boolean;
      soundEnabled?: boolean;
      sprite?: { [key: string]: [number, number] };
      onload?: () => void;
      onend?: () => void;
    }
  
    interface SoundControls {
      play: (options?: { id?: string }) => void;
      stop: () => void;
      pause: () => void;
      duration: number | null;
      sound: any;
    }
  
    export default function useSound(
      url: string,
      options?: UseSoundOptions
    ): [() => void, SoundControls];
  }
  