<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { feedbackStore, type Feedback } from '$store';

	let rating: number = 5;
	let message: string = '';
	let minLength: number = 5;

	$: disabled = message.trim().length <= minLength;

	const handleInput = () => (disabled = message.trim().length <= minLength);

	const handleRatingChange = (_rating: number) => (rating = _rating);

	const handleSubmit = () => {
		if (!disabled) {
			const newFeedback: Feedback = { id: uuidv4(), rating, message };

			feedbackStore.update((feedback) => [newFeedback, ...feedback]);

			rating = 5;
			message = '';
		}
	};
</script>

<form class="max-w-md">
	<p class="text-xs opacity-75 mb-4">Submit your review about the feedback app here:</p>

	<div class="grid gap-5 items-start">
		<!-- Rating -->
		<div class="rating">
			{#each Array(5) as _, index}
				<input
					type="radio"
					class="mask mask-star"
					checked={rating === index + 1}
					on:change={() => handleRatingChange(index + 1)}
				/>
			{/each}
		</div>

		<!-- Message -->
		<textarea
			class="textarea textarea-bordered bg-base-200"
			placeholder="What do you think about this app?"
			bind:value={message}
			on:input={handleInput}
		/>

		<!-- Submit Button -->
		<button class="btn" {disabled} on:click={handleSubmit}>Send</button>
	</div>
</form>
