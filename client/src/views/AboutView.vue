<script setup>
import { useWebNotification } from '@vueuse/core'

const options = {
    title: 'Тестова нотифіккація. Прийми ліки',
    dir: 'auto',
    lang: 'uk',
    renotify: true,
    tag: 'test',
}
const {
    isSupported,
    show,
} = useWebNotification(options)
</script>

<template>
    <div>
        <p>
            Supported: <BooleanDisplay :value="isSupported" />
        </p>
    </div>

    <div v-if="isSupported">
        <v-btn class="ma-5" @click="show()">
            Show Notification
        </v-btn>
    </div>
    <div v-else>
        The Notification Web API is not supported in your browser.
    </div>
</template>
