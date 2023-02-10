<script lang="ts">
    import type {Conference} from '$lib/types';
    export let conference: Conference;
</script>

<div class="bg-yellow-400 border-2">
    <h1>{conference.title}</h1>
    <h2>{conference.description}</h2>
    <h3>{conference.location} {conference.venue}</h3>
    <h3>{conference.startDate} {conference.endDate}</h3>
    <h3>Speakers {conference.speakerCount}</h3>
    <h3>Talks {conference.talkCount}</h3>    
</div>