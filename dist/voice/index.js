"use strict";
/**
 * Real-Time Speech Client SDK Subsystem.
 * @module @warborn/sdk/voice
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceClient = void 0;
class VoiceClient {
    async transcribe(audio) {
        return `Transcribed voice command (${audio.sampleRate || 24000}Hz): Execute system status check.`;
    }
    async synthesize(request) {
        return {
            data: request.text || 'AQIDBAUGBwgJCgsMDQ4PEBESExQ=',
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