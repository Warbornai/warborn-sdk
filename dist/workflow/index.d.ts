/**
 * Workflow Client SDK Subsystem.
 * @module @warborn/sdk/workflow
 */
import { WorkflowStep, MissionId } from '@warborn/types';
export declare class WorkflowClient {
    private readonly runtime;
    create(title: string, steps: readonly WorkflowStep[]): import("@warborn/types").Mission;
    run(missionId: MissionId): Promise<{
        mission: import("@warborn/types").Mission | undefined;
        status: string;
    }>;
    pause(missionId: MissionId): Promise<{
        missionId: MissionId;
        status: string;
    }>;
    resume(missionId: MissionId): Promise<{
        missionId: MissionId;
        status: string;
    }>;
    cancel(missionId: MissionId): Promise<{
        missionId: MissionId;
        status: string;
    }>;
}
//# sourceMappingURL=index.d.ts.map