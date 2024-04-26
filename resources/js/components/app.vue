<template>
    <h1>Hello this text now now comes from a view component</h1>
    <p>
        <strong>Current Route path: </strong>{{ $route.fullPath }}
    </p>
    <nav>
        <div class="navbar">
            <router-link class="link" to='/'>Home</router-link>
            <router-link class="link" to='/about'>About</router-link>
        </div>
    </nav>
    <main>
        <router-view></router-view>
    </main>
</template>

<style scoped>
    .navbar{
        display: flex;
        gap: 4rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.2rem;
    }
</style>
