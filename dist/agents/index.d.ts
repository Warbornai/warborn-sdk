/**
 * Agents Client SDK Subsystem.
 * @module @warborn/sdk/agents
 */
import { AgentConfig, AgentId } from '@warborn/types';
export declare class AgentsClient {
    private readonly runtime;
    create(config: AgentConfig): import("@warborn/types").AgentInstance;
    list(): readonly import("@warborn/types").AgentInstance[];
    get(id: AgentId): import("@warborn/types").AgentInstance | undefined;
    execute(agentId: AgentId, task: string): Promise<{
        agent: import("@warborn/types").AgentInstance | undefined;
        task: string;
        status: string;
        output: string;
    }>;
    stop(agentId: AgentId): Promise<{
        agentId: AgentId;
        status: string;
    }>;
    assignMission(agentId: AgentId, missionId: string): Promise<{
        agentId: AgentId;
        missionId: string;
        status: string;
    }>;
}
//# sourceMappingURL=index.d.ts.map