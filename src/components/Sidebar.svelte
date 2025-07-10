<script>
  import { selectedMarketplace } from '../stores/marketplace.js';
  import { fly } from 'svelte/transition';

  // Menu utama
  const mainMenus = [
    { name: 'Feed', url: 'https://hub.kolkative.my.id' },
    { name: 'Teams', url: 'https://hub.kolkative.my.id/team' },
    { name: 'Cast & Crew', url: 'https://hub.kolkative.my.id/player' },
    { name: 'Events', url: 'https://hub.kolkative.my.id/event' },
    { name: 'Leaderboard', url: 'https://hub.kolkative.my.id/leaderboard' }
  ];

  // Community
  const communityMenus = [
    { name: 'Support', url: 'https://hub.kolkative.my.id/support' },
    { name: 'Academy', url: 'https://hub.kolkative.my.id/academy' },
    { name: 'Jobs', url: 'https://hub.kolkative.my.id/job' },
    { name: 'Kritik & Saran', url: 'https://hub.kolkative.my.id/form' }
  ];

  // Marketplace
  const marketplaceMenus = [
    'Tickets',
    'Mixing Templates',
    'SFX Collections',
    'Merch'
  ];

  // Links
  const linksMenus = [
    'Partnership',
    'Brand Assets & Guidelines',
    'Official Blibli.com',
    'Instagram'
  ];

  // Fungsi klik menu marketplace
  function selectMarketplace(menu) {
    selectedMarketplace.set(menu);
  }
</script>

<style>
  aside.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    height: 100vh;
    background: #23272f;
    color: #fff;
    padding: 24px 0 24px 0;
    box-shadow: 2px 0 8px rgba(0,0,0,0.08);
    overflow-y: auto;
    z-index: 100;
  }
  .sidebar-section {
    margin: 24px 0 8px 24px;
    font-size: 1rem;
    color: #b0b8c1;
    letter-spacing: 1px;
    font-weight: 600;
  }
  ul {
    list-style: none;
    padding: 0 0 0 16px;
    margin: 0;
  }
  .sidebar-link, .marketplace-link {
    display: block;
    padding: 10px 24px;
    color: #fff;
    text-decoration: none;
    border-radius: 6px;
    transition: background 0.2s, color 0.2s;
    font-size: 1rem;
    cursor: pointer;
    border: 2px solid transparent;
  }
  .sidebar-link.selected, .marketplace-link.selected {
    background: #3b82f6;
    color: #fff;
    font-weight: bold;
    border-color: #fff;
    box-shadow: 0 2px 8px rgba(59,130,246,0.15);
  }
</style>

<aside class="sidebar">
  <nav>
    <ul>
      {#each mainMenus as menu}
        <li>
          <a class="sidebar-link" href={menu.url} target="_blank">{menu.name}</a>
        </li>
      {/each}
    </ul>
    <div class="sidebar-section">Community</div>
    <ul>
      {#each communityMenus as menu}
        <li>
          <a class="sidebar-link" href={menu.url} target="_blank">{menu.name}</a>
        </li>
      {/each}
    </ul>
    <div class="sidebar-section">Marketplace</div>
    <ul>
      {#each marketplaceMenus as menu (menu)}
        <li>
          <div
            class="marketplace-link"
            class:selected={$selectedMarketplace === menu}
            on:click={() => selectMarketplace(menu)}
            transition:fly="{{ y: 20, duration: 250 }}"
          >
            {menu}
          </div>
        </li>
      {/each}
    </ul>
    <div class="sidebar-section">Links</div>
    <ul>
      {#each linksMenus as menu}
        <li>
          <div class="sidebar-link">{menu}</div>
        </li>
      {/each}
    </ul>
  </nav>
</aside> 