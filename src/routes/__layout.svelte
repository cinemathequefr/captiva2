<script>
  import Nav from "../components/zones/Nav.svelte";
  import { goto } from "$app/navigation";
  import jwt_decode from "jwt-decode";
  // import { token } from '../stores/token.js';
  // let username = '';

  // $: {
  // 	$token = $token;
  // username = $token ? jwt_decode($token).data.username : '';
  // }

  function logout() {
    // $token = '';
    // goto('login');
  }
</script>

<Nav />
<main>
  <slot />
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    bottom: 0;
    overflow: hidden;
  }
</style>
