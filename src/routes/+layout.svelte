<script>
    import '../app.css';
    import NavBar from '../lib/components/NavBar.svelte';
    import SideBar from '../lib/components/SideBar.svelte';
</script>

<main>
    <div>
        <NavBar />
        <div class="flex">
            <SideBar />
            <div class="flex-1 px-2">
                <slot></slot>
            </div>
        </div>
    </div>
</main>