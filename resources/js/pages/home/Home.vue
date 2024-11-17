<template>
  <div class="row">
    <div>
      Wellcome, this page will show to all user dada
    </div>
    <fwb-dropdown
      text="Click me"
      placement="top"
    >
      <fwb-list-group>
        <fwb-list-group-item>Item #1</fwb-list-group-item>
        <fwb-list-group-item>Item #2</fwb-list-group-item>
        <fwb-list-group-item>Item #3</fwb-list-group-item>
      </fwb-list-group>
    </fwb-dropdown>  
  </div>
</template>
<script setup>
import { FwbDropdown, FwbListGroup, FwbListGroupItem } from 'flowbite-vue';

</script>