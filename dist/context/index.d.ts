/**
 * Context Client SDK Subsystem.
 * @module @warborn/sdk/context
 */
export declare class ContextClient {
    private readonly runtime;
    build(query: string): Promise<readonly import("@warborn/types").ContextChunk[]>;
    expand(contextId: string): Promise<{
        contextId: string;
        expanded: boolean;
        additionalTokens: number;
    }>;
    summarize(text: string): Promise<{
        text: string;
        summary: string;
    }>;
}
//# sourceMappingURL=index.d.ts.map