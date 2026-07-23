/**
 * Events Client SDK Subsystem.
 * @module @warborn/sdk/events
 */
export declare class EventsClient {
    private readonly runtime;
    publish(topic: string, payload: any): Promise<import("@warborn/types").EventEnvelope<any>>;
    subscribe(topic: string, callback: (event: any) => void): () => void;
    unsubscribe(unsubscribeFn: () => void): void;
}
//# sourceMappingURL=index.d.ts.map