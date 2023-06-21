<script lang="ts">
	import rgbHex from 'rgb-hex'

	let value: number = 0;
	let color: string = "red"
	let red: number = 0;
	let green: number = 0;
	let blue: number = 0;
	let hex: string = "#000000"

	function save() {
		switch(color) {
			case "red":
				red = value;
				break;
			case "green":
				green = value;
				break;
			case "blue":
				blue = value;
				break;
		}
		value = 0;
	}

	function compute() {
		hex = `#${rgbHex(red, green, blue)}`
	}
</script>

<main>


	<div>
		<p class="text-red-500">Red: {red}</p>
		<p>Green: {green}</p>
		<p>Blue: {blue}</p>
		<p>Hex: {hex}</p>
	</div>
	<div class="colorBlock" style:background-color={hex}></div>


	<label for="r">{value}</label>
	<input type="range" min="0" max="255" bind:value={value} name="r">
	<!-- Select color -->
	<select name="" id="" bind:value={color}>
		<option value="red">Red</option>
		<option value="green">Green</option>
		<option value="blue">Blue</option>
	</select>

	<button on:click={save}>STORE</button>
	<button on:click={compute}>COMPUTE</button>
</main>

<style>

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display: "flex";
		flex-direction: "col";
		align-content: "center";
		justify-content: "center";
		align-items: "center";
		border: "black";
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.colorBlock {
		height: 64px;
		width: 64px;
	}
</style>