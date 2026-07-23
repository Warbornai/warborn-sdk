"use strict";
/**
 * Brain Client SDK Subsystem.
 * @module @warborn/sdk/brain
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrainClient = void 0;
const runtime_1 = require("@warborn/runtime");
class BrainClient {
    runtime = (0, runtime_1.getRuntimeEngine)();
    async plan(goal) {
        return this.runtime.brain.decomposeGoal(goal);
    }
    async reason(messages) {
        return this.runtime.brain.processReasoningRequest(messages);
    }
    async execute(goal) {
        const plan = await this.plan(goal);
        return { plan, status: 'executed', result: `Executed ${plan.steps.length} steps for goal: ${goal}` };
    }
    async analyze(content) {
        return { content, analysis: 'Extracted semantic intent and context features.' };
    }
}
exports.BrainClient = BrainClient;
//# sourceMappingURL=index.js.map