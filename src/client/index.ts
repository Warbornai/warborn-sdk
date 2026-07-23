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
import { PlatformConfig, getPlatformConfig } from '@warborn/config';
import { getRuntimeEngine, WarbornRuntimeEngine } from '@warborn/runtime';

export class WarbornSDK {
  public readonly brain = new BrainClient();
  public readonly agents = new AgentsClient();
  public readonly workflow = new WorkflowClient();
  public readonly chat = new ChatClient();
  public readonly memory = new MemoryClient();
  public readonly context = new ContextClient();
  public readonly vision = new VisionClient();
  public readonly voice = new VoiceClient();
  public readonly providers = new ProvidersClient();
  public readonly events = new EventsClient();
  public readonly tools = new ToolsClient();
  public readonly plugins = new PluginsClient();

  public readonly config: PlatformConfig;
  public readonly runtime: WarbornRuntimeEngine;

  constructor(config?: PlatformConfig) {
    this.config = config || getPlatformConfig();
    this.runtime = getRuntimeEngine();
  }

  /** Initialize the SDK and start the underlying runtime engine */
  public async initialize(): Promise<void> {
    await this.runtime.start();
  }
}
