<script lang="ts" context="module">
  export const load: import("@sveltejs/kit").Load = async ({session}) => {
    if (session.roles?.includes('ROLE_USER')) {
      return {
        status: 302,
        redirect: '/admin/dashboard',
      }
    }

    return {
      status: 302,
      redirect: '/login',
    }
  }
</script>
