import type { InitializerData } from "../dataTypes";
import { rootUrl } from "./rootUrl";

export const getInitialData = async (): Promise<InitializerData> => {
    const options = {
        headers: new Headers({'Accept': 'application/vnd.initializr.v2.2+json'}),
    };
    const response = await fetch(rootUrl, options);
    if (!response.ok) {
        throw new Error('Bad response');
    }
	return await response.json();
}
