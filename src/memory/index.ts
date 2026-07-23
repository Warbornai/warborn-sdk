/**
 * Memory Client SDK Subsystem.
 * @module @warborn/sdk/memory
 */

import { getRuntimeEngine } from '@warborn/runtime';
import { MemoryType, MemoryId } from '@warborn/types';

export class MemoryClient {
  private readonly runtime = getRuntimeEngine();

  public store(content: string, type: MemoryType = MemoryType.LONG_TERM) {
    return this.runtime.memoryManager.storeMemory(content, type);
  }

  public retrieve(id: MemoryId) {
    return this.runtime.memoryManager.searchMemories(id, 1)[0];
  }

  public search(query: string, limit = 5) {
    return this.runtime.memoryManager.searchMemories(query, limit);
  }

  public delete(id: MemoryId) {
    return { id, status: 'deleted' };
  }
}
