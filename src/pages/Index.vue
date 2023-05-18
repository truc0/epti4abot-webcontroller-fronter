<script setup lang="ts">
import CButton from '@/components/styled/Button.vue';
</script>

<template>
	<div class="h-full flex flex-col justify-center items-center">
		<router-link to="/manual/simple">
			<c-button class="w-40">手动控制</c-button>
		</router-link>
		<router-link to="/manual/joystick">
			<c-button class="w-40">摇杆控制</c-button>
		</router-link>
		<c-button class="w-40" disabled>自动导航</c-button>
	</div>
</template>