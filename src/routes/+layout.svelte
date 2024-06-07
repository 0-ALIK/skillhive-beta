<script>
    import '../app.css';
    import NavBar from '../lib/components/NavBar.svelte';
    import SideBar from '../lib/components/SideBar.svelte';
</script>

<main class="overflow-y-hidden">
    <div>
        <NavBar />
        <div>
            <SideBar />
            <div class="w-[calc(100vw-56px)] ml-[56px] mt-[68px] px-2 border border-base-100">
                <slot></slot>
            </div>
        </div>
    </div>
</main>