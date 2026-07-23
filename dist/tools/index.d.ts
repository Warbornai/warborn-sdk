/**
 * Tools & Plugins Client SDK Subsystem.
 * @module @warborn/sdk/tools
 */
export declare class ToolsClient {
    private readonly registry;
    register(name: string, fn: Function): void;
    execute(name: string, args: any): Promise<any>;
    list(): string[];
}
export declare class PluginsClient {
    private readonly plugins;
    install(pluginName: string): Promise<{
        pluginName: string;
        status: string;
    }>;
    enable(pluginName: string): Promise<{
        pluginName: string;
        enabled: boolean;
    }>;
    disable(pluginName: string): Promise<{
        pluginName: string;
        enabled: boolean;
    }>;
    list(): string[];
}
//# sourceMappingURL=index.d.ts.map