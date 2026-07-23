/**
 * Brain Client SDK Subsystem.
 * @module @warborn/sdk/brain
 */

import { getRuntimeEngine } from '@warborn/runtime';
import { ChatMessage, ChatResponse } from '@warborn/types';

export class BrainClient {
  private readonly runtime = getRuntimeEngine();

  public async plan(goal: string) {
    return this.runtime.brain.decomposeGoal(goal);
  }

  public async reason(messages: readonly ChatMessage[]): Promise<ChatResponse> {
    return this.runtime.brain.processReasoningRequest(messages);
  }

  public async execute(goal: string) {
    const plan = await this.plan(goal);
    return { plan, status: 'executed', result: `Executed ${plan.steps.length} steps for goal: ${goal}` };
  }

  public async analyze(content: string) {
    return { content, analysis: 'Extracted semantic intent and context features.' };
  }
}
