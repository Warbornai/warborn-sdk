"use strict";
/**
 * Workflow Client SDK Subsystem.
 * @module @warborn/sdk/workflow
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowClient = void 0;
const runtime_1 = require("@warborn/runtime");
class WorkflowClient {
    runtime = (0, runtime_1.getRuntimeEngine)();
    create(title, steps) {
        return this.runtime.workflowEngine.createMission(title, steps);
    }
    async run(missionId) {
        const mission = this.runtime.workflowEngine.getMission(missionId);
        return { mission, status: 'running' };
    }
    async pause(missionId) {
        return { missionId, status: 'paused' };
    }
    async resume(missionId) {
        return { missionId, status: 'resumed' };
    }
    async cancel(missionId) {
        return { missionId, status: 'cancelled' };
    }
}
exports.WorkflowClient = WorkflowClient;
//# sourceMappingURL=index.js.map