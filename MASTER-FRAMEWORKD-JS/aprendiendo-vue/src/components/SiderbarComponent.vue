<template>
    <aside id="sidebar">
        <div id="nav-blog" class="sidebar-item">
            <h3>Puedes hacer esto</h3>
            <a href="#" class="btn btn-success">Crear artículos</a>
        </div>
        <div id="search" class="sidebar-item">
            <h3>Buscador</h3>
            <p>Encuentra el artículo que buscas</p>
            <form>
                <input type="text" name="search"/>
                <input type="submit" name="submit" class="btn" value="Buscar"/>
            </form>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'SiderbarComponent'
}
</script> 