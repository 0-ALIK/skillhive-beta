<script>
    import { IconHome, IconShoppingCart, IconPlus, IconMessage, IconBuildingStore, IconChartPie } from '@tabler/icons-svelte';

    let enlaces = [
        {titulo: 'Inicio', url: '/', icono: IconHome},
        {titulo: 'Carrito', url: '/carrito', icono: IconShoppingCart},
        {titulo: 'Agregar', url: '/agregar', icono: IconPlus},
        {titulo: 'Mensajes', url: '/mensajes', icono: IconMessage},
        {titulo: 'Open comissions', url: '/open-comissions', icono: IconBuildingStore},
        {titulo: 'Estadisticas', url: '/estadisticas', icono: IconChartPie}
    ];
</script>

<div class="bg-base-100 w-14 h-[calc(100vh-68px)] fixed top-[66px] z-10">
    <ul class="flex flex-col gap-6 mt-5">
        {#each enlaces as enlace}
            <li class="flex justify-center" title="{enlace.titulo}">
                <a href="{enlace.url}">
                    <svelte:component this={enlace.icono} size="28"/>
                </a>
            </li>
        {/each}
    </ul>
</div>