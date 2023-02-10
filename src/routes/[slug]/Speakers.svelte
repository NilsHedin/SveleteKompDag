<script lang="ts">
    import type {Speaker} from '$lib/types';
    export let speakers: Speaker[];
</script>

<ul>
    {#each speakers as speaker}
    <li>
        <div class="bg-red-400 border-2">
            <h1>{speaker.name}</h1>
            <h2>{speaker.title}</h2>
            <img src="{speaker.imageUrl}" alt="Lorem Ipsum">            
        </div>
    </li>
    {/each}    
</ul>