// using Polyfill EventSource for browser that does not support SSE (IE, Edge) and for authorisation header
import { EventSourcePolyfill } from "event-source-polyfill";

export type SSECallbackMethod = (callbackData: any) => void;
export type SSEConnection = {
  subscribe: (
      type: "ADDED" | "UPDATED" | "REMOVED" | "update",
      callback: SSECallbackMethod
  ) => void;
  getSource: () => any;
  onError: (handler: any) => any;
  unsubscribe: (event: any) => any;
  close: () => any;
};

const defaultOptions = {
  headers: {},
};


export const setAuthorizationToken = (authToken: string) => {
  // Clean out any authorization headers, before setting this one
  // this.removeAuthorizationToken();
  defaultOptions.headers = {
    "Authorization": `Bearer ${authToken}`
  };
}

const formatters: any = {
    plain: (e: any) => e.data,
    json: (e: any) => JSON.parse(e.data),
};

export const sse = (url: string, cfg: any): Promise<SSEConnection> => {
    {
        // eslint-disable-line
        const config = Object.assign(
            {},
            {
                format: "json",
            },
            cfg
        );

        const source = new EventSourcePolyfill(url, {
            headers: defaultOptions.headers
        });

        return new Promise((resolve, reject) => {
            source.onerror = reject;

            source.onopen = () => {
                source.onerror = null;

                const subscribers: any = {};

                resolve({

                    getSource() {
                        return source;
                    },
                    onError(handler: any) {
                        source.onerror = handler;

                        return this;
                    },
                    subscribe(event: any, handler: any) {
                        const listener = (e: any) => {
                            let data;

                            try {
                                data = formatters[config.format](e);
                            } catch (err: any) {
                                if (typeof source.onerror === "function") {
                                    source.onerror(err);
                                }
                            }

                            handler(data);
                        };

                        if (!subscribers[event]) {
                            subscribers[event] = [];
                        }

                        subscribers[event].push(listener);

                        if (event === "") {
                            // Catches messages without any event specified
                            source.onmessage = listener;
                        } else {
                            source.addEventListener(event, listener);
                        }

                        return this;
                    },
                    unsubscribe(event: any) {
                        if (event === "") {
                            source.onmessage = null;

                            return this;
                        }

                        // Check if there are any subscribers for this event
                        if (!subscribers[event]) {
                            return this;
                        }

                        subscribers[event].forEach((listener: any) => {
                            source.removeEventListener(event, listener);
                        });

                        subscribers[event] = [];

                        return this;
                    },
                    close() {
                        source.close();

                        Object.keys(subscribers).forEach((event) => {
                            subscribers[event] = [];
                        });
                    },
                });
            };
        });
    }
};