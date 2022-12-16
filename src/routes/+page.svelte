<script lang="ts">
	import FeedbackList from '$components/feedback/List.svelte';
	import FeedbackStats from '$components/feedback/Stats.svelte';
	import FeedbackForm from '$components/feedback/Form.svelte';
</script>

<div class="container mx-auto p-12">
	<div class="mb-12 grid grid-cols-2 items-center gap-6">
		<FeedbackForm />

		<FeedbackStats />
	</div>

	<FeedbackList />
</div>
