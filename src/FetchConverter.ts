import { parseArrayBuffer as parseMidiBuffer } from 'midi-json-parser';
import type { IMidiFile } from 'midi-json-parser-worker';
import type { IMidiConverter, MeasureTimemap } from './IMidiConverter';
import pkg from '../package.json';
import { fetish } from './helpers';
import SaxonJS from './saxon-js/SaxonJS2.rt';

const XSL_TIMEMAP =
  'https://raw.githubusercontent.com/infojunkie/musicxml-midi/main/build/timemap.sef.json';

/**
 * Implementation of IMidiConverter that simply fetches given MIDI file and timemap JSON file URIs.
 *
 * The timemap JSON file can be generated using the script midi-timemap which is distributed with musicxml-midi
 * @see https://github.com/infojunkie/musicxml-midi/blob/main/src/js/midi-timemap.js
 * It assumes that the MIDI file is itself generated using musicxml-midi.
 *
 * The timemap JSON structure is simple enough to be generated by other tools as well.
 */
export class FetchConverter implements IMidiConverter {
  private _timemap: MeasureTimemap;
  private _midi: IMidiFile | null;

  constructor(
    private _midiOrUri: IMidiFile | string,
    private _timemapOrUri?: MeasureTimemap | string,
  ) {
    this._timemap = [];
    this._midi = null;
  }

  async initialize(musicXml: string): Promise<void> {
    this._midi =
      typeof this._midiOrUri === 'string'
        ? await parseMidiBuffer(
            await (await fetish(this._midiOrUri)).arrayBuffer(),
          )
        : this._midiOrUri;
    this._timemap =
      typeof this._timemapOrUri === 'undefined'
        ? await FetchConverter._parseTimemap(musicXml)
        : typeof this._timemapOrUri === 'string'
          ? <MeasureTimemap>await (await fetish(this._timemapOrUri)).json()
          : this._timemapOrUri;
  }

  get midi(): IMidiFile {
    if (!this._midi) throw 'TODO';
    return this._midi;
  }

  get timemap(): MeasureTimemap {
    return this._timemap;
  }

  get version(): string {
    return `${pkg.name} v${pkg.version}`;
  }

  /**
   * Parse a MusicXML score into a timemap.
   */
  private static async _parseTimemap(
    musicXml: string,
  ): Promise<MeasureTimemap> {
    try {
      const unroll = await SaxonJS.transform(
        {
          stylesheetLocation: XSL_TIMEMAP,
          sourceText: musicXml,
          destination: 'serialized',
          stylesheetParams: {
            useSef: true,
          },
        },
        'async',
      );
      return JSON.parse(unroll.principalResult);
    } catch (error) {
      console.warn(`[FetchConverter._parseTimemap] ${error}`);
    }
    return [];
  }
}
