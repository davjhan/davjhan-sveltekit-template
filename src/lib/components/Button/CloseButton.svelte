<script>
	import { LucideX } from 'lucide-svelte'

	export let onClick
	let className = ''
	export { className as class }
</script>

<button class="icon-button text-ink-tertiary hover:bg-divider-success hover:text-ink {className}" on:click={onClick}>
	<LucideX class=" size-4" />
</button>
