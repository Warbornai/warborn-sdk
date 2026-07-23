/**
 * Chat Client SDK Subsystem.
 * @module @warborn/sdk/chat
 */
import { ChatMessage, ChatResponse } from '@warborn/types';
export declare class ChatClient {
    private readonly runtime;
    complete(messages: readonly ChatMessage[]): Promise<ChatResponse>;
    stream(messages: readonly ChatMessage[]): AsyncIterable<string>;
    tools(): {
        name: string;
        description: string;
    }[];
}
//# sourceMappingURL=index.d.ts.map