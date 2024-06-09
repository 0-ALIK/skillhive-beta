<script>
    import Seccion from "../../../lib/components/perfil/Seccion.svelte";
</script>


<section>

    <!-- Tab menu -->
    <section class="my-2">
        <div role="tablist" class="tabs tabs-boxed">
            <a href="/" role="tab" class="tab tab-active">Home</a>
            <a href="/" role="tab" class="tab">Publicaciones</a>
            <a href="/" role="tab" class="tab">Activos</a>
            <a href="/" role="tab" class="tab">Comisiones</a>
          </div>
    </section>


    <main>

        <!-- Secciones container -->
        <div class="flex flex-col-reverse lg:flex-row gap-2">  

            <!-- contenedor de secciones -->
            <article class="lg:w-2/3 w-full p-2 flex flex-col gap-5">
                <Seccion title="Titulo seccion"/>
                <Seccion title="Titulo seccion"/>
                <Seccion title="Titulo seccion"/>
            </article>
            
            <!-- contenedor de bio -->
            <article class="lg:w-1/3 w-full p-2">
                <div class="glass p-4 rounded-md">
                    <h2 class="font-bold text-lg">Bio</h2>
                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                </div>
            </article>

        </div>

    </main>


</section>