import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async(request) => {

  console.log('in register');

  return {
    status: 200,
  }
}