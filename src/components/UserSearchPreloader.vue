<script setup>
    import { defineProps } from 'vue';
    import { useStore } from 'vuex';

    const props = defineProps({
        user: Object,
    });
    const store = useStore();

</script>

<template>
    <button>
        <img src="@/assets/placeholder.png"/>
        <p>Загрузка...</p>
    </button>
</template>

<style lang="scss" scoped>
@use '@/styles/main' as *;

button {
    display: grid;

    cursor: default;

    background-color: $color-background;
    border-radius: inherit;

    grid-template-rows: repeat(1, auto);
    grid-template-columns: 4.375rem auto;

    grid-column-gap: 0.1rem;

    overflow: hidden;

    :nth-child(1) {
        border-right: 1px solid $color-shadow;

        grid-row: 1/-1;
        grid-column: 1;

        object-fit: cover;

        width: 4.375rem;
        height: 100%;
    }

    :nth-child(2) {
        grid-row: 1/-1;
        grid-column: 2;
        padding: 1rem;
        padding-bottom: 0;
    }
}
</style>

