import type { RequestHandler } from "@sveltejs/kit"
import { serialize } from "cookie";

export const get: RequestHandler = async(request) => {
  request.locals.token = null;

  return {
    status: 302,
    headers: {
      'Set-Cookie': serialize('token', '', {
        path: '/',
        expires: new Date(0)
      }),
      location : '/login'
    }
  }
}