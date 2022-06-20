import { fetchWrapper } from "./fetchWrapper";
import type { components, operations } from "./types/generated";

export type ReplicationGroupDTO = components["schemas"]["ReplicationGroupDTO"];

type GetAllReplicationGroups = operations["replicationGroups"];
export const getAllReplicationGroups = async (): Promise<
    GetAllReplicationGroups["responses"]["200"]["content"]["*/*"]
> => {
    const response = await fetchWrapper.get(`/api/admin/replication-group/all`);
    return await response.json();
};
