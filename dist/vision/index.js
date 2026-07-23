"use strict";
/**
 * Multimodal Vision Client SDK Subsystem.
 * @module @warborn/sdk/vision
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionClient = void 0;
class VisionClient {
    async detect(frame) {
        return [
            { label: 'ui_button', bbox: { x: 10, y: 20, width: 100, height: 40 }, confidence: 0.98 }
        ];
    }
    async ocr(frame) {
        return [
            { text: 'WARBORN OS V1.0', boundingBox: { x: 0, y: 0, width: 200, height: 50 }, confidence: 0.99 }
        ];
    }
    async describe(frame) {
        return 'A modern glassmorphic dashboard depicting real-time multi-agent telemetry.';
    }
}
exports.VisionClient = VisionClient;
//# sourceMappingURL=index.js.map