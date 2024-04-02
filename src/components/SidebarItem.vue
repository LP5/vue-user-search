<script setup>
    import { computed, defineAsyncComponent, onMounted, ref, watch, onErrorCaptured } from 'vue';
    import { useStore } from 'vuex';

    import UserSearchError from './UserSearchError.vue';
    import UserSearchPreloader from './UserSearchPreloader.vue';

    const UserSearchResult = defineAsyncComponent({
        loader: () => import('./UserSearchResult.vue'),
        loadingComponent: UserSearchPreloader,
        errorComponent: UserSearchError,
    });

    const store = useStore();
    const query = ref('');
    const users = computed(() => (store.state.users));

    let endpoint = 'https://jsonplaceholder.typicode.com/users';
    let timeout = null;

    function handleInput(event) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            query.value = event.target.value;
            if (event.target.value === '') {
                store.commit('clearUsers');
                return;
            } 
            event.target.value.split(',').forEach(query => (getUser(query.trim())));
        }, 1000);
    }

    function getUser(query) {
        isNaN(parseInt(query)) ? endpoint += '?username=' + query : endpoint += '?id=' + query;

        store.dispatch('getUserAsync', {endpoint: endpoint}).then(() => setActiveUser(users.value[0]));

        endpoint = endpoint.replace(/\?.*$/g, '');
    }

    function setActiveUser(user) {
        store.commit('setActiveUser', user);
    }

    onErrorCaptured((err) => {
        alert('При поиске пользователя(-ей) произошла ошибка. Пожалуйста, свяжитесь с администратором.');
    });
</script>

<template>
    <div class="sidebar">
        <p class="sidebar__search-label">Поиск сотрудников</p>
        <input class="sidebar__search-form" @input="handleInput" :value="query"></input>

        <p class="sidebar__search-results-label">Результаты</p>
        <p v-if="users.length == 0">начните поиск</p>
        <ul class="sidebar__search-results">
            <li
                class="sidebar__search-result"
                v-for="user in users"
                :key="user"
                :class="{ active: store.state.activeUser.id === user.id }"
            >
                <Suspense>
                    <UserSearchResult :user="user" />
                    <template #fallback>
                        <UserSearchPreloader />
                    </template>
                </Suspense>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/main' as *;

$padding: 1rem;

.sidebar {
    display: flex;
    flex-flow: column;
    row-gap: 2rem;
    padding: 2rem;

    border-right: 1px solid $color-shadow;

    &__search-label,
    &__search-results-label {
        @include label;
    }

    &__search-form {
        @include border;
        color: $color-searchbar;
        padding: 1rem 1.5rem;
        width: 100%;
    }

    &__search-results {
        @include flex-column(1rem);

        .sidebar__search-result {
            @include flex-column(1rem);
            @include shadow;

            border-radius: $border-radius-base;
            list-style: none;
        }
    }
}
</style>
