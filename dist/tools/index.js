"use strict";
/**
 * Tools & Plugins Client SDK Subsystem.
 * @module @warborn/sdk/tools
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsClient = exports.ToolsClient = void 0;
class ToolsClient {
    registry = new Map();
    register(name, fn) {
        this.registry.set(name, fn);
    }
    async execute(name, args) {
        const fn = this.registry.get(name);
        if (!fn)
            throw new Error(`Tool "${name}" is not registered.`);
        return fn(args);
    }
    list() {
        return Array.from(this.registry.keys());
    }
}
exports.ToolsClient = ToolsClient;
class PluginsClient {
    plugins = new Set();
    async install(pluginName) {
        this.plugins.add(pluginName);
        return { pluginName, status: 'installed' };
    }
    async enable(pluginName) {
        return { pluginName, enabled: true };
    }
    async disable(pluginName) {
        return { pluginName, enabled: false };
    }
    list() {
        return Array.from(this.plugins.values());
    }
}
exports.PluginsClient = PluginsClient;
//# sourceMappingURL=index.js.map