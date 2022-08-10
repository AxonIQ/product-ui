import { fetchWrapper } from "./fetchWrapper";
import { sse } from "./sse";
import type { components, operations } from "./types/generated";

export type ClusterDTO = components["schemas"]["ClusterDTO"];
export type ClusterTypeDTO = components["schemas"]["ClusterTypeDTO"];
export type ClusterProviderDTO = components["schemas"]["ClusterProviderDTO"];
export type ClusterRegionDTO = components["schemas"]["ClusterRegionDTO"];
export type ClusterTypePrice =
    components["schemas"]["ClusterPriceCalculationResponseDTO"]["pricePerClusterType"];

type SubscribeToClusters = operations["updates_2"];
export async function subscribeToClusters(
    props: SubscribeToClusters["parameters"]["path"]
) {
    return await sse(`/api/space/${props}/cluster/updates`, {
        format: "json",
    });
}

type GetAllClusters = operations["clusters"];
export const getAllClusters = async (): Promise<
    GetAllClusters["responses"]["200"]["content"]["*/*"]
> => {
    const response = await fetchWrapper.get(`/api/admin/cluster/all`);
    return await response.json();
};
