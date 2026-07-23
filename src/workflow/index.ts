/**
 * Workflow Client SDK Subsystem.
 * @module @warborn/sdk/workflow
 */

import { getRuntimeEngine } from '@warborn/runtime';
import { WorkflowStep, MissionId } from '@warborn/types';

export class WorkflowClient {
  private readonly runtime = getRuntimeEngine();

  public create(title: string, steps: readonly WorkflowStep[]) {
    return this.runtime.workflowEngine.createMission(title, steps);
  }

  public async run(missionId: MissionId) {
    const mission = this.runtime.workflowEngine.getMission(missionId);
    return { mission, status: 'running' };
  }

  public async pause(missionId: MissionId) {
    return { missionId, status: 'paused' };
  }

  public async resume(missionId: MissionId) {
    return { missionId, status: 'resumed' };
  }

  public async cancel(missionId: MissionId) {
    return { missionId, status: 'cancelled' };
  }
}
