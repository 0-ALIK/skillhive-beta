<script>
    import Logo from './Logo.svelte';    

    let enlaces = [
        {nombre: 'Compañias', url: '/'},
        {nombre: 'Empleo', url: '/'},
        {nombre: 'Catalogo', url: '/'}
    ];
    
</script>

<div class="navbar bg-base-100 fixed top-0 z-10">
    <div class="navbar-start">
        <Logo />
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            {#each enlaces as enlace}
                <li><a href={enlace.url}>{enlace.nombre}</a></li>
            {/each}
        </ul>
    </div>
    <div class="navbar-end flex-none gap-2">
        <div class="form-control">
            <input type="text" placeholder="Search" class="input input-bordered input-primary w-24 md:w-auto" />
        </div>
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <ul class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <a class="justify-between" href="/perfil/1">
                        Profile
                        <span class="badge">New</span>
                    </a>
                </li>
                <li><a href="/">Settings</a></li>
                <li><a href="/">Logout</a></li>
            </ul>
        </div>
    </div>
</div>