import { fetchWrapper } from "./fetchWrapper";
import type { components, operations } from "./types/generated";

export type ContextDTO = components["schemas"]["ContextDTO"];
export type ContextOverviewDTO = components["schemas"]["ContextOverviewDTO"];
export type ContextTypeDTO = components["schemas"]["ContextTypeDTO"];
export type ContextPriceCalculationResponseDTO =
    components["schemas"]["ContextPriceCalculationResponseDTO"];
export type ContextCloudProviderDTO =
    components["schemas"]["ContextCloudProviderDTO"];

type GetUserContext = operations["findContextsOfCurrentSpace"];
export async function getUserContexts(
    props: GetUserContext["parameters"]["path"],
    query?: GetUserContext["parameters"]["query"]
): Promise<GetUserContext["responses"]["200"]["content"]["*/*"]> {
    const response = await fetchWrapper.get(
        `/api/space/${props.spaceId}/context${
            query?.provisionedOnly
                ? `?provisionedOnly=${query.provisionedOnly}`
                : ""
        }`
    );

    return await response.json();
}

type GetAllContexts = operations["contexts"];
export const getAllContexts = async (): Promise<
    GetAllContexts["responses"]["200"]["content"]["*/*"]
> => {
    const response = await fetchWrapper.get(`/api/admin/context/all`);
    return await response.json();
};

type GetAllContextTypes = operations["findContextTypes"];
export async function getContextTypes(): Promise<
    GetAllContextTypes["responses"]["200"]["content"]["*/*"]
> {
    const response = await fetchWrapper.get(
        "/api/options/context/context-types"
    );
    return response.json();
}

type GetContextCloudProviders = operations["findContextCloudProviders"];
export async function getContextCloudProviders(): Promise<
    GetContextCloudProviders["responses"]["200"]["content"]["*/*"]
> {
    const response = await fetchWrapper.get(
        "/api/options/context/context-cloud-providers"
    );
    return await response.json();
}

type CreateContext = operations["createContext"];
export async function createContext(
    props: CreateContext["parameters"]["path"],
    body: CreateContext["requestBody"]["content"]["application/json"]
): Promise<CreateContext["responses"]["200"]> {
    return await fetchWrapper.post(`/api/space/${props.spaceId}/context`, body);
}

type RemoveContext = operations["deleteContext"];
export async function removeContext(
    props: RemoveContext["parameters"]["path"]
): Promise<RemoveContext["responses"]["200"]> {
    return await fetchWrapper.remove(
        `/api/space/${props.spaceId}/context/${props.contextId}`
    );
}

export function getClusterSelection(): ContextCloudProviderDTO[] {
    return [
        { name: "Shared Cluster", code: "0" },
        { name: "Private Cluster", code: "1" },
        { name: "Custom Cluster", code: "2" },
    ];
}
