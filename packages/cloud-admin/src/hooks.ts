import type { Handle } from "@sveltejs/kit";
import { parse } from "cookie";

export const handle: Handle = async ({event, resolve}) => {

  // Before any request

  const requestCookies = parse(event.request.headers.get('cookie') ?? '');
  if (requestCookies.token) {
    event.locals.token = requestCookies.token;
  }

  const response = await resolve(event);
  
  // After any request
  return response;
}
