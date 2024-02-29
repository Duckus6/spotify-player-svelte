<script>
	export let data;
	let image = "";
	let isEmpty = true;
	for (const prop in data) {
		if (Object.hasOwn(data, prop)) {
			isEmpty = false;
		}
	}

	if (!!data && !isEmpty) {
		// console.log(data.user.images)
		image = !!data.user.images[1] ? data.user.images[1] : { url: "" };
	}
	const fallback =
		"https://cdn.7tv.app/emote/63c9935c3d2332c1835a9b9e/4x.webp";

	const logout = async (event) => {
		console.log(event);
	};
</script>

<link rel="stylesheet" type="text/css" href="src/routes/!main.css" />
{#if !!data.user}
	<div id="header">
		<img
			id="header-pic"
			src={image.url ? image.url : fallback}
			alt="profile picture for {data.user.display_name}"
			height="100"
		/>
	</div>
	<div id="logout">
		<!-- <form method="POST" action="?/logout"> -->
		<form method="POST" action="?/logout">
			<button>logout</button>
		</form>
	</div>
{:else}
	<div>bbb</div>
{/if}
<slot />
