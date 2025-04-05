import { AudioContext } from 'standardized-audio-context';
import type { IMidiFile, IMidiNoteOnEvent, IMidiNoteOffEvent } from 'midi-json-parser-worker';
import type { IMidiOutput } from 'midi-player';
interface SoundfontInstrument {
    play(note: string, when: number, options: {
        gain: number;
    }): () => void;
}
type InstrumentMap = Record<number, {
    instrument?: SoundfontInstrument;
    programNumber: number;
    name: string;
}>;
type Note = {
    channel: number;
    pitch: number;
    velocity: number;
    timestamp: number;
    stop: () => void;
};
export declare class SoundFontOutput implements IMidiOutput {
    protected _audioContext: AudioContext;
    protected _instruments: InstrumentMap;
    protected _activeNotes: Array<Note>;
    constructor(midiJson: IMidiFile);
    initialize(): Promise<void>;
    clear(): void;
    send(data: number[] | Uint8Array, timestamp: number): void;
    protected _noteOn(event: IMidiNoteOnEvent, timestamp: number): void;
    protected _noteOff(event: IMidiNoteOffEvent, timestamp: number): void;
}
export {};
//# sourceMappingURL=SoundFontOutput.d.ts.map