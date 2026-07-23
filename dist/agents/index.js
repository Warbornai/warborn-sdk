"use strict";
/**
 * Agents Client SDK Subsystem.
 * @module @warborn/sdk/agents
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentsClient = void 0;
const runtime_1 = require("@warborn/runtime");
class AgentsClient {
    runtime = (0, runtime_1.getRuntimeEngine)();
    create(config) {
        return this.runtime.agentRegistry.registerAgent(config);
    }
    list() {
        return this.runtime.agentRegistry.listAgents();
    }
    get(id) {
        return this.runtime.agentRegistry.getAgent(id);
    }
    async execute(agentId, task) {
        const agent = this.get(agentId);
        return { agent, task, status: 'completed', output: `Task "${task}" executed by agent ${agentId}.` };
    }
    async stop(agentId) {
        return { agentId, status: 'stopped' };
    }
    async assignMission(agentId, missionId) {
        return { agentId, missionId, status: 'assigned' };
    }
}
exports.AgentsClient = AgentsClient;
//# sourceMappingURL=index.js.map