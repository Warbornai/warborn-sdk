"use strict";
/**
 * Events Client SDK Subsystem.
 * @module @warborn/sdk/events
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsClient = void 0;
const runtime_1 = require("@warborn/runtime");
class EventsClient {
    runtime = (0, runtime_1.getRuntimeEngine)();
    async publish(topic, payload) {
        return this.runtime.eventBus.publish(topic, payload);
    }
    subscribe(topic, callback) {
        return this.runtime.eventBus.subscribe(topic, callback);
    }
    unsubscribe(unsubscribeFn) {
        unsubscribeFn();
    }
}
exports.EventsClient = EventsClient;
//# sourceMappingURL=index.js.map