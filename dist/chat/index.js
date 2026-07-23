"use strict";
/**
 * Chat Client SDK Subsystem.
 * @module @warborn/sdk/chat
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatClient = void 0;
const runtime_1 = require("@warborn/runtime");
class ChatClient {
    runtime = (0, runtime_1.getRuntimeEngine)();
    async complete(messages) {
        return this.runtime.brain.processReasoningRequest(messages);
    }
    async *stream(messages) {
        const response = await this.complete(messages);
        const content = response.message.content;
        const words = content.split(' ');
        for (const word of words) {
            yield word + ' ';
        }
    }
    tools() {
        return [
            { name: 'web_search', description: 'Search web resources' },
            { name: 'code_interpreter', description: 'Execute sandboxed code' },
        ];
    }
}
exports.ChatClient = ChatClient;
//# sourceMappingURL=index.js.map