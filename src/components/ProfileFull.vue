<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        user: Object,
    });
</script>

<template>
    <div class="user-profile">
        <p v-if="!props.user.id" class="placeholder">Выберите сотрудника, чтобы посмотреть его профиль</p>
        <template v-else>
            <img class="user-image" src="@/assets/placeholder.png"/>
            <div class="user-info">
                <h2 class="user-info__label user__name">{{ props.user.name }}</h2>
                <p class="user-info__label user__email">email: <span>{{ props.user.email }}</span></p>
                <p class="user-info__label user__phone">phone: <span>{{ props.user.phone }}</span></p>
                <h2 class="user-info__label user__about-label">О себе:</h2>
                <p class="user__about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/main' as *;

.user-profile {
    display: grid;

    grid-template-rows: repeat(5, auto);
    grid-template-columns: 1fr 1fr;

    grid-row: 1/-1;
    grid-column: 2/-1;
    padding: 1rem;

    width: 100%;
    height: 100%;

    img {
        grid-row: 1/-1;
        grid-column: 1;
        object-fit: cover;
        width: 100%;
        height: auto;
    }

    .placeholder {
        grid-row: 1/-1;
        grid-column: 1/-1;
        text-align: center;
        align-self: center;
    }

    .user-info {
        display: flex;
        flex-flow: column nowrap;

        .user-info__label {
            @include label;

            &.user__about-label {
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
        }

        .user__email,
        .user__phone {
            padding-top: 1rem;
            padding-bottm: 1rem;
        }

        * {
            grid-column: 2;
        }
    }
}
</style>
