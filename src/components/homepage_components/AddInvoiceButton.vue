<template>
    <div>
        <RouterLink to="/nouvelle-facture">
            <button class="add-button p-4 pr-5 pl-5 rounded-full">
                <i class="icone-plus rounded-full p-1 mr-2 fa-solid fa-plus"></i>
                FACTURE
            </button>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.add-button {
    color: var(--text-color);
    background-color: var(--bg-color2);

    .icone-plus {
        background: var(--text-color);
        color: var(--bg-color2);
    }
}

</style>