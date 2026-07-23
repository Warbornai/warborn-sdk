"use strict";
/**
 * Memory Client SDK Subsystem.
 * @module @warborn/sdk/memory
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryClient = void 0;
const runtime_1 = require("@warborn/runtime");
const types_1 = require("@warborn/types");
class MemoryClient {
    runtime = (0, runtime_1.getRuntimeEngine)();
    store(content, type = types_1.MemoryType.LONG_TERM) {
        return this.runtime.memoryManager.storeMemory(content, type);
    }
    retrieve(id) {
        return this.runtime.memoryManager.searchMemories(id, 1)[0];
    }
    search(query, limit = 5) {
        return this.runtime.memoryManager.searchMemories(query, limit);
    }
    delete(id) {
        return { id, status: 'deleted' };
    }
}
exports.MemoryClient = MemoryClient;
//# sourceMappingURL=index.js.map