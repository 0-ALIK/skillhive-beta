<script>
    export let estado = 'publicado';
</script>


<div class="relative">
    {#if estado === 'publicado'}
        <span class="badge badge-success z-10 absolute -right-5 -top-2">Publicado</span>
    {:else if estado === 'borrador'}
        <span class="badge badge-warning z-10 absolute -right-5 -top-2">Borrador</span>
    {:else}
        <span class="badge badge-error z-10 absolute -right-5 -top-2">Deleted</span>
    {/if}
    <div class="card card-side bg-base-300 shadow-xl">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Movie"/></figure>
        <div class="card-body">
            <h2 class="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Watch</button>
            </div>
        </div>
    </div>
</div>