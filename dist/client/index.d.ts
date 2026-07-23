/**
 * Main WarbornSDK Developer Interface.
 * @module @warborn/sdk/client
 */
import { BrainClient } from '../brain';
import { AgentsClient } from '../agents';
import { WorkflowClient } from '../workflow';
import { ChatClient } from '../chat';
import { MemoryClient } from '../memory';
import { ContextClient } from '../context';
import { VisionClient } from '../vision';
import { VoiceClient } from '../voice';
import { ProvidersClient } from '../providers';
import { EventsClient } from '../events';
import { ToolsClient, PluginsClient } from '../tools';
import { PlatformConfig } from '@warborn/config';
import { WarbornRuntimeEngine } from '@warborn/runtime';
export declare class WarbornSDK {
    readonly brain: BrainClient;
    readonly agents: AgentsClient;
    readonly workflow: WorkflowClient;
    readonly chat: ChatClient;
    readonly memory: MemoryClient;
    readonly context: ContextClient;
    readonly vision: VisionClient;
    readonly voice: VoiceClient;
    readonly providers: ProvidersClient;
    readonly events: EventsClient;
    readonly tools: ToolsClient;
    readonly plugins: PluginsClient;
    readonly config: PlatformConfig;
    readonly runtime: WarbornRuntimeEngine;
    constructor(config?: PlatformConfig);
    /** Initialize the SDK and start the underlying runtime engine */
    initialize(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map