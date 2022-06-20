import { fetchWrapper } from "./fetchWrapper";
import type { components, operations } from "./types/generated";

export type ApplicationDTO = components["schemas"]["ApplicationDTO"];
export type LoadBalanceStrategyDTO =
    components["schemas"]["LoadBalanceStrategyDTO"];
export type ClientApplicationDTO =
    components["schemas"]["ClientApplicationDTO"];

type GetUserApplications = operations["findSpaceApplicationsOfCurrentUser"];
export async function getUserApplications(
    props: GetUserApplications["parameters"]["path"]
): Promise<GetUserApplications["responses"]["200"]["content"]["*/*"]> {
    const response = await fetchWrapper.get(
        `/api/space/${props.spaceId}/application`
    );
    return await response.json();
}

type GetLoadBalanceStrategies = operations["getLoadBalanceStrategies"];
export const getLoadBalanceStrategies = async (): Promise<
    GetLoadBalanceStrategies["responses"]["200"]["content"]["*/*"]
> => {
    const response = await fetchWrapper.get(
        "/api/options/loadbalance/strategies"
    );
    return await response.json();
};

type GetAllApplications = operations["applications"];
export const getAllApplications = async (): Promise<
    GetAllApplications["responses"]["200"]["content"]["*/*"]
> => {
    const response = await fetchWrapper.get(`/api/admin/space/application/all`);
    return await response.json();
};

type GetApplicationConfigProperties = operations["getUserApplicationConfig"];
export const getApplicationConfigProperties = async (): Promise<
    GetApplicationConfigProperties["responses"]["200"]["content"]["*/*"]
> => {
    const response = await fetchWrapper.get("/api/properties/user-app");
    return await response.json();
};

type CreateApplication = operations["create_1"];
export const createApplication = async (
    props: CreateApplication["parameters"]["path"],
    body: CreateApplication["requestBody"]["content"]["application/json"]
): Promise<CreateApplication["responses"]["200"]["content"]["*/*"]> => {
    const response = await fetchWrapper.post(
        `/api/space/${props.spaceId}/application`,
        body
    );
    return await response.json();
};

type UpdateApplication = operations["bindContextsToApplication"];
export const updateApplication = async (
    props: UpdateApplication["parameters"]["path"],
    body: UpdateApplication["requestBody"]["content"]["application/json"]
): Promise<UpdateApplication["responses"]["200"]> => {
    return await fetchWrapper.patch(
        `/api/space/${props.spaceId}/application/${props.id}/contexts`,
        body
    );
};

type DeleteApplication = operations["delete"];
export const deleteApplication = async (
    props: DeleteApplication["parameters"]["path"]
): Promise<DeleteApplication["responses"]["200"]> => {
    return await fetchWrapper.remove(
        `/api/space/${props.spaceId}/application/${props.id}`
    );
};
