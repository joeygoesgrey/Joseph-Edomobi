<script>
import API_BASE_URL from '../../data/projects';
export default {
	props: ['project'],
	data() {
		return { API_BASE_URL }
	},
	methods: {
		truncateText(text, length = 100) {
			return text.length > length ? text.substring(0, length) + "..." : text;
		},

	}

};
</script>

<template>
	<div class="mt-6 mb-5 rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project">
		<div
			class="see flex flex-col items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
			<img class="object-cover md:w-5/12 rounded-t-lg h-96  md:rounded-none md:rounded-lg"
				:src="`${API_BASE_URL}/static/images/${project?.first_image_file}`" alt="">
			<div>
				<router-link :to="`projects/${project?.portfolio_project_name}`"
					class="mt-6 mb-5 rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
					aria-label="Single Project">
					<div class="flex flex-col justify-between p-4 leading-normal">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							{{ project?.portfolio_project_name }}</h5>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{
							truncateText(project?.portfolio_description)
						}}
						</p>
					</div>
				</router-link>

				<div class="flex flex-row justify-center text-black">
					<button class="mx-4">
						<a :href="project?.repo_link" target="__blank">
							<i class="bi bi-github text-black"></i> Code

						</a>
					</button>
					<div class="mx-4">
						<a :href="`${project?.portfolio_url}`" target="__blank">
							<i class="bi bi-globe mx-2"></i>
							Live
						</a>
					</div>
				</div>
			</div>


		</div>


	</div>
</template>

<style lang="scss" scoped></style>
