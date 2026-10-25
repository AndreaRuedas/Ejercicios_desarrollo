<template>
  <div style="text-aling:center; margin-top:50px;">
    <h2>Ejercicio 1: Vue 3 logs</h2>
    <button @click="contador++">Clics: {{ contador }}</button>
    <button @click="mostrar = !mostrar" style="margin-left: 10px;">
      {{ mostrar ? 'Ocultar' : 'Mostrar' }} componente
    </button>
  </div>
</template>

<script setup>
import {ref, onMounted, onUpdated, onUnmounted} from 'vue'

const contador = ref(0)
const mostrar = ref(true)

onMounted(() => console.log('Montado'));
onUpdated (() => console.log('Actualizado'));
onUnmounted (() => console.log('Desmontado'));
</script>

