/**
 * Multimodal Vision Client SDK Subsystem.
 * @module @warborn/sdk/vision
 */
import { VisionFrame, BoundingBox, OCRResult } from '@warborn/types';
export declare class VisionClient {
    detect(frame: VisionFrame): Promise<readonly {
        label: string;
        bbox: BoundingBox;
        confidence: number;
    }[]>;
    ocr(frame: VisionFrame): Promise<readonly OCRResult[]>;
    describe(frame: VisionFrame): Promise<string>;
}
//# sourceMappingURL=index.d.ts.map