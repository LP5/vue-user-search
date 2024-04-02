<script setup>
    import { computed, ref } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();
    const activeUser = computed(() => store.state.activeUser);

    import SidebarItem from './components/SidebarItem.vue';
    import ProfileFull from './components/ProfileFull.vue';
</script>

<template>
    <header>
        <h1>Жилфонд</h1>
        <p>Пользователь</p>
    </header>

    <div class="employee-search">
        <SidebarItem class="sidebar" />
        <ProfileFull class="user-profile" :user="activeUser" />
    </div>
</template>

<style lang="scss" scoped>
@use './styles/main' as *;

header {
    display: flex;

    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;

    padding-bottom: 1.75rem;

    width: 100%;

    h1 {
        color: $color-header;
        font-weight: 700;
    }
}

.employee-search {
    @include shadow;

    display: grid;

    border-radius: $border-radius-base;

    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(2, 1fr);

    grid-column-gap: 0.1rem;

    overflow: clip;

    width: 100%;
    height: 100%;

    .sidebar {
        grid-row: 1/-1;
        grid-column: 1/6;
    }

    .user-profile {
        grid-row: 1/-1;
        grid-column: 6/-1;
    }
}
</style>
