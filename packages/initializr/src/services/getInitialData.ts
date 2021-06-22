import type { InitializerData } from "../dataTypes";

export const getInitialData = async (): Promise<InitializerData> => {
    const rootUrl = {
        'local': 'http://localhost:8080/',
        'dev': 'https://start.dev.axoniq.net/',
        'prod': 'https://start.axoniq.net/',
    }
    const response = await fetch(rootUrl[globalThis.currentEnv]);
    if (!response.ok) {
        throw new Error('Bad response');
    }
	return await response.json();
}
