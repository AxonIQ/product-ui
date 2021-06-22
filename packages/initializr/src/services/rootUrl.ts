const rootMap = {
    'local': 'http://localhost:8080/',
    'dev': 'https://start.dev.axoniq.net/',
    'prod': 'https://start.axoniq.net/',
};

export const rootUrl = rootMap[globalThis.currentEnv]