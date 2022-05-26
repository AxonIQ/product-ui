import type { RequestHandler } from "@sveltejs/kit"
import { parse, serialize } from "cookie";

export const get: RequestHandler = async(request) => {
  const token = request.url.searchParams.get('token');

  if (token) {

    return {
      status: 302,
      headers: {
        'Set-Cookie': serialize("token", token, {
          path: '/'
        }),
        location: '/dashboard'
      }
    }
  }

  const cookies = parse(request.request.headers.get('cookie') ?? '');
  if (cookies.token) {
    console.log('token exists, to dashboard')
    return {
      status: 302,
      headers: {
        location: '/dashboard'
      }
    }
  }

  return {
    status: 302,
    headers: {
      location: '/login'
    }
  }
}
