<script>
    import { IconChevronUp, IconChevronDown, IconEdit } from '@tabler/icons-svelte';
    import SeccionProyectos from './SeccionProyectos.svelte';
    import SeccionTexto from './SeccionTexto.svelte';
    import SeccionGaleria from './SeccionGaleria.svelte';
    export let title = 'Seccion';
    export let tipo = 'proyectos';
</script>

<div>
    <h2 class="text-2xl font-bold mb-2">{title}</h2>

    <section class="w-full rounded-md bg-base-300 p-4 group">
        <article>
            <div class="flex justify-end items-center mb-2">
                <div class="flex gap-2">
                    <button class="btn btn-circle btn-outline btn-sm">
                        <IconChevronUp />
                    </button>
                    <button class="btn btn-circle btn-outline btn-sm">
                        <IconChevronDown />
                    </button>
                    <button class="btn btn-circle btn-outline btn-sm" onclick="my_modal_1.showModal()">
                        <IconEdit />
                    </button>
                </div>
            </div>
    
            <div>
                { #if tipo === 'proyectos' }
                    <SeccionProyectos />
                {:else if tipo === 'texto' }
                    <SeccionTexto />
                {:else if tipo === 'galeria' }
                    <SeccionGaleria />
                {:else}
                    <p class="text-error text-xl">Seccion no encontrada</p>
                {/if}
            </div>
        </article>
    
    
        <dialog id="my_modal_1" class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Hello!</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
                <div class="overflow-x-auto">
                    <table class="table">
                      <!-- head -->
                      <thead>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Job</th>
                          <th>Favorite Color</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- row 1 -->
                        <tr>
                          <th>1</th>
                          <td>Cy Ganderton</td>
                          <td>Quality Control Specialist</td>
                          <td>Blue</td>
                        </tr>
                        <!-- row 2 -->
                        <tr>
                          <th>2</th>
                          <td>Hart Hagerty</td>
                          <td>Desktop Support Technician</td>
                          <td>Purple</td>
                        </tr>
                        <!-- row 3 -->
                        <tr>
                          <th>3</th>
                          <td>Brice Swyre</td>
                          <td>Tax Accountant</td>
                          <td>Red</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                <div class="modal-action">
                    <form method="dialog">
                      <button class="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </section>
</div>