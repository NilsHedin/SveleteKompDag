<script lang="ts">
    import type {Talk} from '$lib/types';
    export let talks: Talk[];
</script>

<ul>
    {#each talks as talk}
    <li>
        <div class="bg-orange-400 border-2">
            <h1>{talk.title}</h1>
            <h2>{talk.time}</h2> 
            <h2>{talk.speaker}</h2>        
        </div>
    </li>
    {/each}    
</ul>