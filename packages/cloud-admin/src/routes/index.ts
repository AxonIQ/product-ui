import type { RequestHandler } from "@sveltejs/kit"
import { serialize } from "cookie";
import jwt_decode from "jwt-decode";

export const get: RequestHandler = async(request) => {
  const token = request.url.searchParams.get('token');
  
  if (token) {
    const payload: any = jwt_decode(token ?? '');
    const isRegistered = payload?.rol?.includes('ROLE_USER');
    return {
      status: 302,
      headers: {
        'Set-Cookie': serialize("token", token, {
          path: '/'
        }),
        location: isRegistered ? '/dashboard' : '/register'
      }
    }
  }

  return {
    status: 200
  }
}
