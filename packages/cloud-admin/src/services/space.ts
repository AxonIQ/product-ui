import { fetchWrapper } from "./fetchWrapper";
import type { components, operations } from "./types/generated";

export type SpaceDTO = components["schemas"]["SpaceDTO"];
export type SpaceMemberDTO = components["schemas"]["SpaceMemberDTO"];
export type SpaceInviteDTO = components["schemas"]["SpaceInviteDTO"];

type CreateSpace = operations["create"];
export async function createSpace(
    body: CreateSpace["requestBody"]["content"]["application/json"]
): Promise<CreateSpace["responses"]["200"]> {
    return await fetchWrapper.post("/api/space", body);
}

type GetSpace = operations["findSpaceById"];
export async function getSpace(
    props: GetSpace["parameters"]["path"]
): Promise<GetSpace["responses"]["200"]["content"]["*/*"]> {
    const response = await fetchWrapper.get(`/api/space/${props.spaceId}`);
    return response.json();
}

type GetMember = operations["getCurrentMember"];
export async function getMember(
    props: GetMember["parameters"]["path"]
): Promise<GetMember["responses"]["200"]["content"]["*/*"]> {
    const response = await fetchWrapper.get(
        `/api/space/${props.spaceId}/member`
    );
    return response.json();
}

type GetAllSpaces = operations["spaces"];
export const getAllSpaces = async (
    query?: GetAllSpaces["parameters"]["query"]
): Promise<GetAllSpaces["responses"]["200"]["content"]["*/*"]> => {
    let url = "/api/admin/space/all";
    if (query?.name && query.name !== "") {
        url = `${url}?name=${query}`;
    }
    const response = await fetchWrapper.get(url);
    return await response.json();
};

type LeaveSpace = operations["dissociateCurrentAccountFromSpace"];
export async function leaveSpace(
    props: LeaveSpace["parameters"]["path"]
): Promise<LeaveSpace["responses"]["200"]> {
    return await fetchWrapper.remove(`/api/space/${props.spaceId}/member`);
}

type DeleteSpace = operations["deleteSpace"];
export async function deleteSpace(
    props: DeleteSpace["parameters"]["path"]
): Promise<DeleteSpace["responses"]["200"]> {
    return await fetchWrapper.remove(`/api/space/${props.spaceId}`);
}

type DeleteSpaceByAdmin = operations["deleteSpaceByAdmin"];
export async function deleteSpaceByAdmin(
    props: DeleteSpaceByAdmin["parameters"]["path"]
): Promise<DeleteSpaceByAdmin["responses"]["200"]> {
    return await fetchWrapper.remove(`/api/admin/space/${props.spaceId}`);
}

type AddUserToSpace = operations["associateAccountWithSpace"];
export async function addUserToSpace(
    props: AddUserToSpace["parameters"]["path"]
): Promise<AddUserToSpace["responses"]["200"]> {
    return await fetchWrapper.patch(
        `/api/admin/space/${props.spaceId}/member/${props.accountId}`
    );
}

type RemoveUserFromSpace = operations["dissociateAccountFromSpace"];
export async function removeUserFromSpace(
    props: RemoveUserFromSpace["parameters"]["path"]
): Promise<RemoveUserFromSpace["responses"]["200"]> {
    return await fetchWrapper.remove(
        `/api/admin/space/${props.spaceId}/member/${props.accountId}`
    );
}

type DisableMemberFromSpace = operations["disableUserInSpace"];
export async function disableMemberFromSpace(
    props: DisableMemberFromSpace["parameters"]["path"]
): Promise<DisableMemberFromSpace["responses"]["200"]> {
    return await fetchWrapper.patch(
        `/api/space/${props.spaceId}/member/${props.accountId}/disable`
    );
}

type TransferSpaceOnwership = operations["transferSpaceOwnership"];
export async function transferSpaceOwnership(
    props: TransferSpaceOnwership["parameters"]["path"]
): Promise<TransferSpaceOnwership["responses"]["200"]> {
    return await fetchWrapper.patch(
        `/api/space/${props.spaceId}/member/${props.accountId}/owner`
    );
}

type GenerateInviteToSpace = operations["generateInviteToSpace"];
export async function generateInviteToSpace(
    props: GenerateInviteToSpace["parameters"]["path"],
    body: GenerateInviteToSpace["requestBody"]["content"]["application/json"]
): Promise<GenerateInviteToSpace["responses"]["200"]["content"]["*/*"]> {
    const response = await fetchWrapper.post(
        `/api/space/${props.spaceId}/invite`,
        body
    );
    return await response.text();
}

type FindAllInvitesForSpace = operations["findAllInvitesForSpace"];
export async function findAllInvitesForSpace(
    props: FindAllInvitesForSpace["parameters"]["path"]
): Promise<FindAllInvitesForSpace["responses"]["200"]["content"]["*/*"]> {
    const response = await fetchWrapper.get(
        `/api/space/${props.spaceId}/invite/all`
    );
    return await response.json();
}

type AddMeToSpace = operations["acceptInviteForSpace"];
export async function addMeToSpace(
    props: AddMeToSpace["parameters"]["path"]
): Promise<AddMeToSpace["responses"]["200"]> {
    return await fetchWrapper.patch(
        `/api/space/${props.spaceId}/invite/${props.inviteId}`
    );
}

type DeactivateInviteForSpace = operations["deactivateInviteForSpace"];
export async function deactivateInviteForSpace(
    props: DeactivateInviteForSpace["parameters"]["path"]
): Promise<DeactivateInviteForSpace["responses"]["200"]> {
    return await fetchWrapper.remove(
        `/api/space/${props.spaceId}/invite/${props.inviteId}`
    );
}

type GetMembersFromSpace = operations["getMembersFromSpace"];
export async function getMembersFromSpace(
    props: GetMembersFromSpace["parameters"]["path"]
): Promise<GetMembersFromSpace["responses"]["200"]["content"]["*/*"]> {
    const response = await fetchWrapper.get(
        `/api/space/${props.spaceId}/member/all`
    );
    return response.json();
}

type ChangeUserRole = operations["grantPermissionForMemberInSpace"];
export async function changeUserRole(
    props: ChangeUserRole["parameters"]["path"]
): Promise<ChangeUserRole["responses"]["200"]> {
    return await fetchWrapper.patch(
        `/api/space/${props.spaceId}/member/${props.accountId}/grant-permission/${props.role}`
    );
}

type GetSpaceNameBySpaceId = operations["findSpaceName"];
export async function getSpaceNameBySpaceId(
    props: GetSpaceNameBySpaceId["parameters"]["path"]
): Promise<GetSpaceNameBySpaceId["responses"]["200"]["content"]["*/*"]> {
    const response = await fetchWrapper.get(`/api/space/${props.spaceId}/name`);
    return response.json();
}
