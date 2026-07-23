/**
 * Tools & Plugins Client SDK Subsystem.
 * @module @warborn/sdk/tools
 */

export class ToolsClient {
  private readonly registry = new Map<string, Function>();

  public register(name: string, fn: Function) {
    this.registry.set(name, fn);
  }

  public async execute(name: string, args: any) {
    const fn = this.registry.get(name);
    if (!fn) throw new Error(`Tool "${name}" is not registered.`);
    return fn(args);
  }

  public list() {
    return Array.from(this.registry.keys());
  }
}

export class PluginsClient {
  private readonly plugins = new Set<string>();

  public async install(pluginName: string) {
    this.plugins.add(pluginName);
    return { pluginName, status: 'installed' };
  }

  public async enable(pluginName: string) {
    return { pluginName, enabled: true };
  }

  public async disable(pluginName: string) {
    return { pluginName, enabled: false };
  }

  public list() {
    return Array.from(this.plugins.values());
  }
}
