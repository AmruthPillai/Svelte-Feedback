<script lang="ts">
	import Icon from '@iconify/svelte';
	import { feedbackStore, type Feedback } from '$store';

	export let item: Feedback;

	const handleDelete = (id: string) => {
		feedbackStore.update((feedback) => {
			return feedback.filter((item) => item.id !== id);
		});
	};
</script>

<div class="card bg-base-200 shadow">
	<div class="card-body">
		<div class="card-title mb-4 justify-between">
			<div class="rating">
				{#each Array(5) as _, index}
					<input type="radio" class="mask mask-star" disabled checked={index === item.rating - 1} />
				{/each}
			</div>

			<button on:click={() => handleDelete(item.id)}>
				<Icon icon="material-symbols:close" />
			</button>
		</div>

		<p>{item.message}</p>
	</div>
</div>
