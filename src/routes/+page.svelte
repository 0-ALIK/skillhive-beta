<script>
    import PublicacionMediaCard from "../lib/components/publicaciones/PublicacionMediaCard.svelte";

    let categorias = [
        {nombre: "neutral"},
        {nombre: "neutral"},
        {nombre: "neutral"},
        {nombre: "neutral"},
        {nombre: "neutral"},
        {nombre: "neutral"},
        {nombre: "neutral"},
        {nombre: "neutral"},
        //...
    ];

    let publicacionesTop = [
        {url: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"},
        {url: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"},
        {url: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"},
        {url: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"},
    ];
</script>


<section>

    
    <!-- Seccion de listado de categorias -->
    <section class="mb-4">
        <h1 class="text-4xl font-bold ml-5 mt-10 mb-2">Inicio</h1>
        <div>
            <div class="w-full overflow-x-auto">
                <div class="flex space-x-4">
                    {#each categorias as categoria}
                        <div class="badge badge-outline badge-lg">{categoria.nombre}</div>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <!-- Listado de publicaciones populares -->
    <section>
        <div>
            <h2 class="text-2xl">Publicaciones más populares</h2>
        </div>

        <div class="flex gap-2 flex-wrap">
            {#each publicacionesTop as publicacion}
                <PublicacionMediaCard portadaSrc={publicacion.url} />
            {/each}
        </div>
    </section>

    


</section>