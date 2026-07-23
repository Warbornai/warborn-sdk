/**
 * Agents Client SDK Subsystem.
 * @module @warborn/sdk/agents
 */

import { getRuntimeEngine } from '@warborn/runtime';
import { AgentConfig, AgentId } from '@warborn/types';

export class AgentsClient {
  private readonly runtime = getRuntimeEngine();

  public create(config: AgentConfig) {
    return this.runtime.agentRegistry.registerAgent(config);
  }

  public list() {
    return this.runtime.agentRegistry.listAgents();
  }

  public get(id: AgentId) {
    return this.runtime.agentRegistry.getAgent(id);
  }

  public async execute(agentId: AgentId, task: string) {
    const agent = this.get(agentId);
    return { agent, task, status: 'completed', output: `Task "${task}" executed by agent ${agentId}.` };
  }

  public async stop(agentId: AgentId) {
    return { agentId, status: 'stopped' };
  }

  public async assignMission(agentId: AgentId, missionId: string) {
    return { agentId, missionId, status: 'assigned' };
  }
}
