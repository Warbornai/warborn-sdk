/**
 * Events Client SDK Subsystem.
 * @module @warborn/sdk/events
 */

import { getRuntimeEngine } from '@warborn/runtime';

export class EventsClient {
  private readonly runtime = getRuntimeEngine();

  public async publish(topic: string, payload: any) {
    return this.runtime.eventBus.publish(topic as any, payload);
  }

  public subscribe(topic: string, callback: (event: any) => void) {
    return this.runtime.eventBus.subscribe(topic as any, callback);
  }

  public unsubscribe(unsubscribeFn: () => void) {
    unsubscribeFn();
  }
}
