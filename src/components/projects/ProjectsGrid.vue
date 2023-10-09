<script>
import feather from 'feather-icons';
// import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import { getProjects } from '../../data/projects';
import { ref } from 'vue';

export default {
	components: { ProjectSingle, },
	data: () => {
		return {
			projectsHeading: 'Projects Portfolio',
		};
	},

	setup() {
		const projects = ref(null);

		function removeLineBreaks(dataArray) {
			return dataArray.map(item => {
				if (item.portfolio_description) {
					item.portfolio_description = item.portfolio_description.replace(/\r\n/g, ' ');
				}
				return item;
			});
		}

		getProjects().then(data => {
			if (data) {
				projects.value = removeLineBreaks(data);
			}
		});

		return { projects };
	},

	mounted() {
		feather.replace();
	},

};
</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">

			<div class="
					flex
					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				">

			</div>
		</div>
		<div class="flex flex-col">
			<ProjectSingle v-for="proj in projects" :key="proj.id" :project="proj" />
		</div>

	</section>
</template>

<style scoped></style>
