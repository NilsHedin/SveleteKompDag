<script lang="ts">
    import Speakers from "./Speakers.svelte";
    import Talks from "./Talks.svelte";

    import type {Day} from '$lib/types';
    export let days: Day[];
</script>

<ul>
    {#each days as day}
    <li>
        <div class="bg-blue-400 border-2">
            <h1>{day.title}</h1>
            <h2>{day.description}</h2>
            <h3>{day.date}</h3>
            <Speakers speakers={day.speakers}></Speakers>
            <Talks talks={day.talks}></Talks>
        </div>
    </li>
    {/each}    
</ul>