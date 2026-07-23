/**
 * Provider Client SDK Subsystem.
 * @module @warborn/sdk/providers
 */
import { ProviderType } from '@warborn/types';
export declare class ProvidersClient {
    private readonly runtime;
    list(): string[];
    health(providerId: string): {
        providerId: string;
        status: string;
        latencyMs: number;
    };
    models(providerId: string): string[];
    select(type: ProviderType): import("@warborn/types").ProviderConfig | undefined;
}
//# sourceMappingURL=index.d.ts.map