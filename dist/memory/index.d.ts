/**
 * Memory Client SDK Subsystem.
 * @module @warborn/sdk/memory
 */
import { MemoryType, MemoryId } from '@warborn/types';
export declare class MemoryClient {
    private readonly runtime;
    store(content: string, type?: MemoryType): import("@warborn/types").MemoryRecord;
    retrieve(id: MemoryId): import("@warborn/types").MemoryRecord;
    search(query: string, limit?: number): readonly import("@warborn/types").MemoryRecord[];
    delete(id: MemoryId): {
        id: MemoryId;
        status: string;
    };
}
//# sourceMappingURL=index.d.ts.map