<script>
    import PublicacionMediaCard from "../lib/components/publicaciones/PublicacionMediaCard.svelte";
</script>


<section>

    <!-- Seccion de listado de categorias -->
    <section>
        <h1 class="text-4xl font-bold ml-5 mt-10">Inicio</h1>
        <div>
            <div class="w-full overflow-x-auto">
                <div class="flex space-x-4">
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
                    <div class="badge badge-outline badge-lg">neutral</div>
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
            <PublicacionMediaCard portadaSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
            <PublicacionMediaCard portadaSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
            <PublicacionMediaCard portadaSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
            <PublicacionMediaCard portadaSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
        </div>
    </section>

    


</section>