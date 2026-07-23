/**
 * Chat Client SDK Subsystem.
 * @module @warborn/sdk/chat
 */

import { getRuntimeEngine } from '@warborn/runtime';
import { ChatMessage, ChatResponse } from '@warborn/types';

export class ChatClient {
  private readonly runtime = getRuntimeEngine();

  public async complete(messages: readonly ChatMessage[]): Promise<ChatResponse> {
    return this.runtime.brain.processReasoningRequest(messages);
  }

  public async *stream(messages: readonly ChatMessage[]): AsyncIterable<string> {
    const response = await this.complete(messages);
    const content = response.message.content;
    const words = content.split(' ');
    for (const word of words) {
      yield word + ' ';
    }
  }

  public tools() {
    return [
      { name: 'web_search', description: 'Search web resources' },
      { name: 'code_interpreter', description: 'Execute sandboxed code' },
    ];
  }
}
