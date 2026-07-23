"use strict";
/**
 * Real-Time Speech Client SDK Subsystem.
 * @module @warborn/sdk/voice
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceClient = void 0;
class VoiceClient {
    async transcribe(audio) {
        return 'Transcribed voice command: Execute system status check.';
    }
    async synthesize(request) {
        return {
            frameId: `audio_${Date.now()}`,
            data: 'AQIDBAUGBwgJCgsMDQ4PEBESExQ=',
            sampleRate: 24000,
            channels: 1,
            encoding: 'pcm_s16le',
            timestamp: new Date().toISOString(),
        };
    }
    async *stream(request) {
        yield await this.synthesize(request);
    }
}
exports.VoiceClient = VoiceClient;
//# sourceMappingURL=index.js.map