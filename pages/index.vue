<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div style="margin-top: 50px; margin-bottom: 30px">Keyboard isOpen: {{ isOpen }}</div>

      <ion-list>
        <ion-item>
          <ion-input label="Default input"></ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            label="Input with placeholder"
            placeholder="Enter company name"
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            label="Input with value"
            value="121 S Pinckney St #300"
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            label="Readonly input"
            value="Madison"
            :readonly="true"
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-input
            label="Disabled input"
            value="53703"
            :disabled="true"
          ></ion-input>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
definePageMeta({
  alias: ['/', '/index']
})

const { isOpen } = useKeyboard()
</script>
