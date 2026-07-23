"use strict";
/**
 * Provider Client SDK Subsystem.
 * @module @warborn/sdk/providers
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersClient = void 0;
const runtime_1 = require("@warborn/runtime");
class ProvidersClient {
    runtime = (0, runtime_1.getRuntimeEngine)();
    list() {
        return ['openai', 'anthropic', 'gemini', 'groq', 'mistral', 'ollama'];
    }
    health(providerId) {
        return { providerId, status: 'healthy', latencyMs: 42 };
    }
    models(providerId) {
        if (providerId === 'openai')
            return ['gpt-4o', 'gpt-4o-mini', 'o1-preview'];
        if (providerId === 'anthropic')
            return ['claude-3-5-sonnet-20241022', 'claude-3-opus-20240229'];
        return ['gemini-1.5-pro', 'llama-3.3-70b-versatile'];
    }
    select(type) {
        return this.runtime.providerRegistry.getProvider(type);
    }
}
exports.ProvidersClient = ProvidersClient;
//# sourceMappingURL=index.js.map