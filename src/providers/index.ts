/**
 * Provider Client SDK Subsystem.
 * @module @warborn/sdk/providers
 */

import { getRuntimeEngine } from '@warborn/runtime';
import { ProviderType } from '@warborn/types';

export class ProvidersClient {
  private readonly runtime = getRuntimeEngine();

  public list() {
    return ['openai', 'anthropic', 'gemini', 'groq', 'mistral', 'ollama'];
  }

  public health(providerId: string) {
    return { providerId, status: 'healthy', latencyMs: 42 };
  }

  public models(providerId: string) {
    if (providerId === 'openai') return ['gpt-4o', 'gpt-4o-mini', 'o1-preview'];
    if (providerId === 'anthropic') return ['claude-3-5-sonnet-20241022', 'claude-3-opus-20240229'];
    return ['gemini-1.5-pro', 'llama-3.3-70b-versatile'];
  }

  public select(type: ProviderType) {
    return this.runtime.providerRegistry.getProvider(type);
  }
}
