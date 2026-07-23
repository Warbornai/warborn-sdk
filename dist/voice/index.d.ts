/**
 * Real-Time Speech Client SDK Subsystem.
 * @module @warborn/sdk/voice
 */
import { AudioFrame, VoiceSynthesisRequest } from '@warborn/types';
export declare class VoiceClient {
    transcribe(audio: AudioFrame): Promise<string>;
    synthesize(request: VoiceSynthesisRequest): Promise<AudioFrame>;
    stream(request: VoiceSynthesisRequest): AsyncIterable<AudioFrame>;
}
//# sourceMappingURL=index.d.ts.map