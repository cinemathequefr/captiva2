<script>
  import { writable } from "svelte/store";
  import Connect from "./Connect.svelte";
  import LogoCaptiva from "../icons/LogoCaptiva.svelte";
  import Modal from "svelte-simple-modal";
  import Settings from "../Settings.svelte";
  const modal = writable(null);
  import { page } from "$app/stores";
  import { token } from "../../stores/token.js";
  $: $token = $token;

  const showSettings = () => modal.set(Settings);
</script>

<nav>
  <div class="left">
    <ul>
      <li style="margin-right: 6px;"><LogoCaptiva /></li>
      {#if $token !== ""}
        <li>
          <a href="films" class:current={$page.url.pathname === "/films"}
            >Films</a
          >
        </li>
        <li>
          <a
            href="calendrier"
            class:current={$page.url.pathname === "/calendrier"}>Calendrier</a
          >
        </li>

        <li><span on:click={showSettings}>Settings</span></li>
      {/if}
    </ul>
  </div>
  <div class="right">
    <Connect />
  </div>
</nav>

<Modal show={$modal} />

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
    background-color: #036;
    /* background-color: #264; */
    color: #eee;
    padding: 12px;
    font-size: 0.938rem;
    z-index: 900;
  }

  ul {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
  }

  li {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
  }
  .current {
    background-color: #36f;
  }
  .left {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .right {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }

  :global(.right li),
  :global(.left li) {
    flex: 0 1 auto;
  }

  :global(a, .link) {
    display: inline-block;
    padding: 1px 6px;
    text-decoration: none;
    cursor: pointer;
  }

  :global(a:hover, a:active) {
    color: #fff;
  }
</style>
