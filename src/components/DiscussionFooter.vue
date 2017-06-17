<template>
    <footer class="DiscussionFooter">
        Hola {{ $parent.user.name }}
        <img :src="$parent.user.avatar" width="40">
    </footer>
</template>