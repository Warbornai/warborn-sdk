/**
 * Brain Client SDK Subsystem.
 * @module @warborn/sdk/brain
 */
import { ChatMessage, ChatResponse } from '@warborn/types';
export declare class BrainClient {
    private readonly runtime;
    plan(goal: string): Promise<import("@warborn/runtime").BrainPlan>;
    reason(messages: readonly ChatMessage[]): Promise<ChatResponse>;
    execute(goal: string): Promise<{
        plan: import("@warborn/runtime").BrainPlan;
        status: string;
        result: string;
    }>;
    analyze(content: string): Promise<{
        content: string;
        analysis: string;
    }>;
}
//# sourceMappingURL=index.d.ts.map