<script lang="ts">
	import { feedbackStore } from '$store';

	$: count = $feedbackStore.length;
	$: average = (
		$feedbackStore.reduce((acc, item) => acc + item.rating, 0) / $feedbackStore.length || 0
	).toFixed(2);
</script>

<div class="mb-12 stats bg-base-200 shadow">
	<div class="stat">
		<div class="stat-title"># of Reviews</div>
		<div class="stat-value">{count}</div>
		<div class="stat-desc">The number of reviews for the app</div>
	</div>

	<div class="stat">
		<div class="stat-title">Average Rating</div>
		<div class="stat-value">{average}</div>
		<div class="stat-desc">The average rating of all users</div>
	</div>
</div>
