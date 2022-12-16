<script lang="ts">
	import { feedbackStore } from '$store';
	import { fade } from 'svelte/transition';
	import FeedbackItem from './Item.svelte';
</script>

<div class="grid grid-cols-2 items-start gap-6">
	{#each $feedbackStore as item}
		<div transition:fade={{ duration: 250 }}>
			<FeedbackItem {item} />
		</div>
	{/each}
</div>
