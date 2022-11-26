<template>
    <section>
        Card {{ id }}
    </section>
</template>
<script>
export default {
    data() {
        return {
            id: 0
        }
    },
    watch: {
        '$route'() {
            this.id = this.$route.params.id
        }
    },
    created() {
        this.id = this.$route.params.id
    }
}
</script>
<style>

</style>