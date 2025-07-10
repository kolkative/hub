<script>
  import { selectedMarketplace } from '../stores/marketplace.js';
  let menu;
  $: $selectedMarketplace, menu = $selectedMarketplace;
</script>

<div>
  {#if menu === 'Tickets'}
    <p>Ini halaman Tickets.</p>
  {:else if menu === 'Mixing Templates'}
    <p>Ini halaman Mixing Templates.</p>
  {:else if menu === 'SFX Collections'}
    <p>Ini halaman SFX Collections.</p>
  {:else if menu === 'Merch'}
    <p>Ini halaman Merch.</p>
  {/if}
</div> 