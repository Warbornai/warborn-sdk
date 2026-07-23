"use strict";
/**
 * Context Client SDK Subsystem.
 * @module @warborn/sdk/context
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextClient = void 0;
const runtime_1 = require("@warborn/runtime");
class ContextClient {
    runtime = (0, runtime_1.getRuntimeEngine)();
    async build(query) {
        return this.runtime.contextEngine.assembleContext(query);
    }
    async expand(contextId) {
        return { contextId, expanded: true, additionalTokens: 512 };
    }
    async summarize(text) {
        return { text, summary: `Summary (${text.length} chars): ${text.slice(0, 100)}...` };
    }
}
exports.ContextClient = ContextClient;
//# sourceMappingURL=index.js.map