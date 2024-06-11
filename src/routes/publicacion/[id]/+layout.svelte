<script>
    import { IconThumbUp, IconThumbDown } from "@tabler/icons-svelte";
    import Comentario from "$lib/components/publicaciones/Comentario.svelte";
</script>

<section>

    <div class="flex flex-col-reverse lg:flex-row gap-2 items-start">
        <section class="w-full lg:w-2/5 p-2 bg-base-200 rounded-md">
            <div>
                <!-- Usuario -->
                <section class="flex justify-between mb-5">
                    <div class="flex items-center">
                        <div class="avatar mr-2">
                            <div class="w-20 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user">
                            </div>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold">Nombre apellido</h1>
                            <p>Ocupacion</p>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <button class="btn btn-primary mr-2">Seguir</button>
                        <button class="btn btn-primary btn-outline">Chat</button>
                    </div>
                </section>

                <!-- Datos de la publicacion -->
                <section class="mb-5">
                    <div class="flex items-center gap-2">
                        <h2 class="mb-2 text-2xl">Titulo de la publicacion</h2>
                        <button class="btn btn-primary btn-sm">
                            <IconThumbUp />
                            Like
                        </button>
                    </div>
                    <article class="mb-2">
                        <p class="font-light text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem reiciendis, enim vero tempora ullam doloribus tempore aspernatur similique. Quibusdam obcaecati aut eligendi nulla adipisci iusto facere consequatur optio neque blanditiis.</p>
                        <p class="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tempora?</p>
                    </article>
                </section>

                <!-- Categorias -->
                <section class="mb-5">
                    <div class="badge badge-neutral">Programming</div>
                    <div class="badge badge-neutral">Art</div>
                    <div class="badge badge-neutral">Design</div>
                    <div class="badge badge-neutral">Software</div>
                    <div class="badge badge-neutral">Mondongo</div>
                </section>

                <!-- Comentarios -->
                <section>
                    <h2 class="mb-2 text-2xl">Comentarios</h2>
                    <div class="flex gap-2 mb-2" >
                        <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full">
                        <button class="btn btn-primary">Enviar</button>
                    </div>
                    <div class="flex flex-col gap-4">
                        <Comentario />
                        <Comentario />
                        <Comentario />
                    </div>
                </section>
            </div>
        </section>

        <main class="w-full lg:w-3/5 p-2 bg-base-200 rounded-md">
            <slot></slot>
        </main>
    </div>


</section>