<template>
    <Modal>
        <div slot="header">
            <h2>
                Create new board
                <a 
                    href="" 
                    class="modal-default-button"
                    @click.prevent="close"
                >
                    &times;
                </a>
            </h2>
        </div>  

        <div slot="body">
            <form 
                id="add-board-form"
                @submit.prevent="addBoard"
            >
                <input 
                    type="text" 
                    class="form-control" 
                    v-model="input" 
                    ref="input"
                >
            </form>
        </div>

        <div slot="footer">
            <button 
                type="submit"
                form="add-board-form"
                class="btn" 
                :class="{'btn-success': valid}"
                :disabled="!valid"
            >Create Board</button>
        </div>
    </Modal>
</template>
<script>
import Modal from './Modal.vue'

export default {
    components: { Modal },
    data () {
        return {
            input: '',
            valid: false
        }
    },
    watch: {
        input(value) {
            this.valid = value.trim().length > 0
        }
    },
    mounted() {
        this.$refs.input.focus()
    },
    methods: {
        close() {
            this.$emit('close')
        },
        addBoard() {
            this.$emit('close')
            this.$emit('submit', this.input)
        }
    }
}
</script>
<style>

</style>