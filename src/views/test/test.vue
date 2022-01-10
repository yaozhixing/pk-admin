<template>
  <div class="personal">
    <el-row>当前标题：{{title}}</el-row>
  </div>
</template>

<script lang="ts">
export default {
	name: 'Test',
	setup() {
		const title = '测试页面';
		return {
			title,
		};
	},
};
</script>

<style scoped lang="scss">
@import '../../theme/mixins/mixins.scss';
</style>
