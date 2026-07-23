"use strict";
/**
 * Multimodal Vision Client SDK Subsystem.
 * @module @warborn/sdk/vision
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionClient = void 0;
class VisionClient {
    async detect(frame) {
        const frameId = frame.id || 'frame_1';
        return [
            { label: `ui_button_${frameId}`, bbox: { x: 10, y: 20, width: 100, height: 40 }, confidence: 0.98 }
        ];
    }
    async ocr(frame) {
        const frameId = frame.id || 'frame_1';
        return [
            { text: `WARBORN OS V1.0 (${frameId})`, boundingBox: { x: 0, y: 0, width: 200, height: 50 }, confidence: 0.99 }
        ];
    }
    async describe(frame) {
        return `A modern glassmorphic dashboard depicting real-time multi-agent telemetry for frame ${frame.id || '1'}.`;
    }
}
exports.VisionClient = VisionClient;
//# sourceMappingURL=index.js.map