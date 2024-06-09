<script>
    import PublicacionArticuloCard from "$lib/components/perfil/PublicacionArticuloCard.svelte";
</script>

<section>

    <!-- Tab menu -->
    <section class="my-2">
        <div role="tablist" class="tabs tabs-boxed">
            <a href="/perfil/1" role="tab" class="tab">Home</a>
            <a href="/perfil/1/publicaciones" role="tab" class="tab tab-active">Publicaciones</a>
            <a href="/perfil/1/activos" role="tab" class="tab">Activos</a>
            <a href="/perfil/1/comisiones" role="tab" class="tab">Comisiones</a>
        </div>
    </section>


    <main>
        <!-- Filtros -->
        <div class="lg:w-1/2 mx-auto my-10">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-bold">Publicaciones</h2>
                <div class="flex gap-2">
                    <button class="btn btn-primary">Crear publicación</button>
                    <select class="select select-primary w-full max-w-xs">
                        <option disabled selected>Estado</option>
                        <option>Game of Thrones</option>
                        <option>Lost</option>
                        <option>Breaking Bad</option>
                        <option>Walking Dead</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Publicaciones -->
        <div class="flex mx-auto flex-col gap-5 lg:w-1/2">
            <PublicacionArticuloCard estado="borrador"/>
            <PublicacionArticuloCard estado="publicado"/>
            <PublicacionArticuloCard estado="borrador"/>
            <PublicacionArticuloCard estado="publicado"/>
            <PublicacionArticuloCard estado="borrador"/>
            <PublicacionArticuloCard estado="borrador"/>
        </div>
    </main>


</section>