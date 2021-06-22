import type { InitializerData } from "../dataTypes";
import { rootUrl } from "./rootUrl";

export const getInitialData = async (): Promise<InitializerData> => {
    const response = await fetch(rootUrl);
    if (!response.ok) {
        throw new Error('Bad response');
    }
	return await response.json();
}
