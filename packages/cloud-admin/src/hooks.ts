import type { GetSession, Handle } from "@sveltejs/kit";
import { parse } from "cookie";
import jwt_decode from "jwt-decode";

export const handle: Handle = async ({event, resolve}) => {

  // Before any request

  const requestCookies = parse(event.request.headers.get('cookie') ?? '');
  if (requestCookies.token) {
    const payload: any = jwt_decode(requestCookies.token);

    event.locals.token = requestCookies.token;
    event.locals.payload = payload;
  }

  const response = await resolve(event);
  
  // After any request

  return response;
}

export const getSession: GetSession = async (request) => {
  if (request.locals.token) {
    return {
      token: request.locals.token,
      userId: request.locals.payload.sub,
      externalUserId: request.locals.payload.esub,
      email: request.locals.payload.email,
      roles: request.locals.payload.roles,
    };
  }
  
  return {}
}
