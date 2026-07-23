"use strict";
/**
 * Main WarbornSDK Developer Interface.
 * @module @warborn/sdk/client
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarbornSDK = void 0;
const brain_1 = require("../brain");
const agents_1 = require("../agents");
const workflow_1 = require("../workflow");
const chat_1 = require("../chat");
const memory_1 = require("../memory");
const context_1 = require("../context");
const vision_1 = require("../vision");
const voice_1 = require("../voice");
const providers_1 = require("../providers");
const events_1 = require("../events");
const tools_1 = require("../tools");
const config_1 = require("@warborn/config");
const runtime_1 = require("@warborn/runtime");
class WarbornSDK {
    brain = new brain_1.BrainClient();
    agents = new agents_1.AgentsClient();
    workflow = new workflow_1.WorkflowClient();
    chat = new chat_1.ChatClient();
    memory = new memory_1.MemoryClient();
    context = new context_1.ContextClient();
    vision = new vision_1.VisionClient();
    voice = new voice_1.VoiceClient();
    providers = new providers_1.ProvidersClient();
    events = new events_1.EventsClient();
    tools = new tools_1.ToolsClient();
    plugins = new tools_1.PluginsClient();
    config;
    runtime;
    constructor(config) {
        this.config = config || (0, config_1.getPlatformConfig)();
        this.runtime = (0, runtime_1.getRuntimeEngine)();
    }
    /** Initialize the SDK and start the underlying runtime engine */
    async initialize() {
        await this.runtime.start();
    }
}
exports.WarbornSDK = WarbornSDK;
//# sourceMappingURL=index.js.map