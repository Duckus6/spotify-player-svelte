<svelte:options
	customElement={{
		tag: "spotify-playlist",
	}}
/>

<script>
	import { page } from "$app/stores";

	export let playlist;
	const getTracks = async () => {
		//got track time to play it
		//also need to do randomise now
		//clean up the get tracks at some point
		const tracks = await fetch(
			`/getTracks?uid=${$page.data.user.id}` +
				new URLSearchParams({
					uid: $page.data.user.id,
					pid: playlist.id,
					auth: $page.data.auth,
					offset:playlist.tracks.total -1,
					limit:1,

				}).toString(),
		).then(resp => resp.json());
		console.log(tracks);
	};
</script>

<li class="playlist">
	<img src={playlist.images[0].url} alt="playlist {playlist.name} image" />
	<div>
		<h3>{playlist.name}</h3>
		<!-- <span>{playlist.description}</span> -->
	</div>
	<button on:click={getTracks}>
		<svg
			data-encore-id="icon"
			role="img"
			aria-hidden="true"
			viewBox="0 0 16 16"
		>
			<path
				d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"
			></path>
		</svg>
	</button>
</li>
<!-- <iframe
	style="border-radius:12px"
	src="https://open.spotify.com/embed/playlist/0bIDkAxEInjdT5BAtIDHlT?utm_source=generator"
	width="100%"
	height="352"
	frameBorder="0"
	allowfullscreen=""
	allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
	loading="lazy"
></iframe> -->
<slot />

<style>
	.playlist {
		display: inline-block;
		width: 344px;
		height: 48px;
		border-radius: 6px;
		padding: 8px;
		border: 1px solid black;
		margin: 0.5vh;
	}
	.playlist img {
		position: absolute;
		width: 48px;
		height: 48px;
	}
	.playlist div {
		display: flex;
		align-items: center;
		grid-column-end: -1;
		justify-content: space-between;
		flex-direction: column;
		width: inherit;
		position: absolute;
		text-align: center;
	}
	.playlist h3 {
		margin-top: 0;
	}
	.playlist button {
		position: relative;
		background: green;
		border-radius: 50%;
		width: 36px;
		height: 36px;
		top: 50%;
		left: 100%;
		transform: translate(-100%, -50%);
	}
	.playlist svg {
		fill: black;
		width: 18px;
		height: 18px;
	}
</style>
