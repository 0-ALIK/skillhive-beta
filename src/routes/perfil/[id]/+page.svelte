<script>
    import Seccion from "$lib/components/perfil/Seccion.svelte";
    import { IconSection } from '@tabler/icons-svelte';
</script>


<section>

    <!-- Tab menu -->
    <section class="my-2">
        <div role="tablist" class="tabs tabs-boxed">
            <a href="/perfil/1" role="tab" class="tab tab-active">Home</a>
            <a href="/perfil/1/publicaciones" role="tab" class="tab">Publicaciones</a>
            <a href="/perfil/1/activos" role="tab" class="tab">Activos</a>
            <a href="/perfil/1/comisiones" role="tab" class="tab">Comisiones</a>
        </div>
    </section>


    <main>

        <!-- Cabecera -->
        <div>
            <button class="btn">
                <IconSection class="icon"/>
                Agregar
            </button>
        </div>

        <!-- Secciones container -->
        <div class="flex flex-col-reverse lg:flex-row gap-2">  

            <!-- contenedor de secciones -->
            <article class="lg:w-2/3 w-full p-2 flex flex-col gap-10">
                <Seccion title="Algunos de mis proyectos"/>
                <Seccion title="Sobre mi" tipo="texto"/>
                <Seccion title="Algo de mi arte " tipo="galeria"/>
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