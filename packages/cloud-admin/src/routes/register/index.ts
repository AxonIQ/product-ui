import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = async(request) => {

  return {
    status: 200,
  }
}