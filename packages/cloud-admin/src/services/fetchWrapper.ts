
const defaultHeaders = new Headers();
defaultHeaders.append("Content-Type", "application/json");

const defaultOptions: RequestInit = {
    cache: "no-cache",
    credentials: "same-origin",
    headers: defaultHeaders,
};

let fetchToUse: (info: RequestInfo, init?: RequestInit | undefined) => Promise<Response>;

type ResponseInterceptor = (response: Response) => Response;

async function handleRequest(
    url: string,
    options: RequestInit,
    responseInterceptor: ResponseInterceptor
) {
    const fetchToExecute = fetchToUse ?? fetch;
    const response = await fetchToExecute(`https://console.dev.axoniq.net${url}`, options);
    responseInterceptor(response);

    if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            const errorObject = await response.json();
            errorObject.statusCode = response.status;
            throw errorObject;
        } else {
            const error = {
                message: await response.text(),
                statusCode: response.status,
            };
            throw error;
        }
    }

    return response;
}

export const fetchWrapper = {
    responseInterceptor(response: Response) {
        return response;
    },

    setAuthorizationToken(authToken: string) {
        // Clean out any authorization headers, before setting this one
        this.removeAuthorizationToken();
        defaultHeaders.append("Authorization", `Bearer ${authToken}`);
    },
    removeAuthorizationToken() {
        defaultHeaders.delete("Authorization");
    },
    setFetchToUse(fetchMethod: (info: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) {
        fetchToUse = fetchMethod;
    },

    async get(url: string, customOptions?: RequestInit) {
        const options = {
            ...defaultOptions,
            method: "GET",
            ...customOptions,
        };
        return handleRequest(url, options, this.responseInterceptor);
    },
    async post(url: string, body?: any, customOptions?: RequestInit) {
        const options: RequestInit = {
            ...defaultOptions,
            method: "POST",
            body: JSON.stringify(body),
            ...customOptions,
        };
        return handleRequest(url, options, this.responseInterceptor);
    },

    async put(url: string, body?: any, customOptions?: RequestInit) {
        const options = {
            ...defaultOptions,
            method: "PUT",
            body: JSON.stringify(body),
            ...customOptions,
        };
        return handleRequest(url, options, this.responseInterceptor);
    },

    async patch(url: string, body?: any, customOptions?: RequestInit) {
        const options = {
            ...defaultOptions,
            method: "PATCH",
            body: JSON.stringify(body),
            ...customOptions,
        };
        return handleRequest(url, options, this.responseInterceptor);
    },

    // We use this because `delete` is a reserved word.
    async remove(url: string, customOptions?: RequestInit) {
        const options = {
            ...defaultOptions,
            method: "DELETE",
            ...customOptions,
        };
        return handleRequest(url, options, this.responseInterceptor);
    },
};
