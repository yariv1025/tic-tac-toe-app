/* Creating a cell
The cell emits an event if it's clicked and
*/ gets a value just if it's clear.
<template>
  <div class="cell" @click=updateCell>
    <span v-if="value !== ''">{{ value }}</span>
  </div>
</template>

<script src="../js/Cell.js"></script>

<style src="../css/Cell.css"></style>

