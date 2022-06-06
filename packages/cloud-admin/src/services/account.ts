import { fetchWrapper } from "./fetchWrapper";
import type { components, operations } from "./types/generated";

export type AccountDTO = components["schemas"]["AccountDTO"];
export type AccountData = components["schemas"]["AccountData"];

type GetUserAccount = operations["getCurrentAccount"];
export async function getUserAccount(): Promise<
    GetUserAccount["responses"]["200"]["content"]["*/*"]
> {
    const response = await fetchWrapper.get(`/api/account`);
    return await response.json();
}

type GetAllAccounts = operations["getAllAccounts"];
export const getAllAccounts = async (
    query?: string
): Promise<GetAllAccounts["responses"]["200"]["content"]["*/*"]> => {
    let url = "/api/admin/account/all";
    if (query && query !== "") {
        url = `${url}?queryParameter=${query}`;
    }

    const response = await fetchWrapper.get(url);
    return await response.json();
};

type Register = operations["register"];
export async function register(
    body: Register["requestBody"]["content"]["application/json"]
) {
    return fetchWrapper.post("/api/account/register", body);
}

type UpdateAccount = operations["updateAccountData"];
export async function updateAccount(
    body: UpdateAccount["requestBody"]["content"]["application/json"]
) {
    return fetchWrapper.put("/api/account", body);
}

export async function removeAccount() {
    return fetchWrapper.remove("/api/account");
}
