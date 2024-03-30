<script>
	import { goto } from "$app/navigation";
	import SpotifyPlaylist from "../custom/spotify-playlist.svelte";
	export let data;
	const login = () => {
		goto("login");
	};
	let playlists = data.playlists;
</script>

{#if !playlists}
	<h1>Idk what im doing tbh</h1>
	<!--MAYBE MAKE AN ACTION https://kit.svelte.dev/docs/form-actions-->
	<button id="login" on:click={login}>Click me to login</button>
{:else}
	<ul id="playlist-container">
		{#each playlists as playlist}
			<SpotifyPlaylist {playlist} />
		{/each}
	</ul>
{/if}
<slot />

<style>
	#login {
		border: 1px solid black;
		background: orange;
		color: white;
	}
	#playlist-container {
		display:flex;
		max-width: 30%;
		height:70vh;
		flex-direction: column;
		flex-wrap: wrap;
	}
</style>
