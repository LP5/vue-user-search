<script setup>
    import { defineProps } from 'vue';
    import { useStore } from 'vuex';

    const props = defineProps({
        user: Object,
    });
    const store = useStore();
</script>

<template>
    <button @click="store.commit('setActiveUser', props.user)">
        <img src="@/assets/placeholder.png"/>
        <p class="user__username">{{ props.user.username }}</p>
        <p class="user__name">{{ props.user.email }}</p>
    </button>
</template>

<style lang="scss" scoped>
@use '@/styles/main' as *;

button {
    display: grid;

    background-color: $color-background;
    border-radius: inherit;

    grid-template-rows: repeat(2, auto);
    grid-template-columns: 4.375rem auto;

    grid-column-gap: 0.1rem;

    overflow: hidden;

    &:hover {
        p {
            background-color: $color-shadow;
        }
    }

    :nth-child(1) {
        border-right: 1px solid $color-shadow;

        grid-row: 1/-1;
        grid-column: 1;

        object-fit: cover;

        width: 4.375rem;
        height: 100%;
    }

    :nth-child(2) {
        grid-row: 1;
        grid-column: 2;
        padding-bottom: 0;
    }

    :nth-child(3) {
        grid-row: 2;
        padding-top: 0;
    }

    p {
        padding: 1rem;
    }
}

.active {
    button {
        p {
            background-color: $color-shadow;
        }
    }
}
</style>
