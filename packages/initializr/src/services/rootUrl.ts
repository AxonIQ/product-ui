const rootMap = {
    'local': 'http://localhost:8080/',
    'dev': 'https://start.dev.axoniq.net/',
    'prod': '/',
};

export const rootUrl = rootMap[globalThis.currentEnv]