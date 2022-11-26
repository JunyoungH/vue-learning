<template>
    <main>
        Board {{ id }}
        <ul>
            <li>
                <router-link :to="`/board/${id}/card/1`">Card 1</router-link>
            </li>
            <li>
                <router-link :to="`/board/${id}/card/2`">Card 2</router-link>
            </li>
        </ul>
        <router-view />
    </main>
</template>
<script>
export default {
    data() {
        return {
            id: 0
        }
    },
    created() {
        this.id = this.$route.params.id
    }
}
</script>
<style>

</style>