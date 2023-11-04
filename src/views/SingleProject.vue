<script>
import { getPortfolioByTitle, API_BASE_URL } from '../data/projects';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
	name: 'Projects',
	setup() {
		const projects = ref(null);
		const loading = ref(false);
		const route = useRoute();
		const fetchProjectData = async () => {
			loading.value = !loading.value
			const projectStr = route.params.str;
			try {
				const data = await getPortfolioByTitle(projectStr);

				if (data) {
					projects.value = data;
				}
			} catch (error) {
				console.error('An error occurred:', error);
			}
			loading.value = !loading.value
		};

		onMounted(() => {
			fetchProjectData();
		});


		return {
			projects,
			fetchProjectData,
			API_BASE_URL
		};
	},

};
</script>

<template>
	<div v-if="loading"
		class="flex items-center justify-center w-56 h-56 border mx-auto border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
		<div role="status">
			<svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
				viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="currentColor" />
				<path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					fill="currentFill" />
			</svg>
			<span class="sr-only">Loading...</span>
		</div>
	</div>
	<div v-else class="container mx-auto mt-10 sm:mt-20">
		<div>
			<p
				class="font-general-medium  text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{{ projects?.project_name }}
			</p>
			<div class="flex">
				<div class="flex items-center mr-10">
					<i data-feather="clock" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>
					<span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light">{{
						projects?.date }}</span>
				</div>
				<div class="flex items-center">
					<i data-feather="tag" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>
					<span class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"><i
							class="bi bi-tag"></i>
						{{
							projects?.project_tag }}</span>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">

			<div class="mb-10 sm:mb-0" v-for="projectImage in projects?.image_file" :key="projectImage">

				<img :src="`${API_BASE_URL}/static/images/${projectImage}`" v-if="projectImage"
					class="rounded-xl cursor-pointer shadow-lg sm:shadow-none" alt="{{ projectImage.title }}" />
			</div>
		</div>


		<!-- Project information -->
		<div class="block sm:flex gap-0 sm:gap-10 mt-14">
			<!-- Single project left section details -->
			<div class="w-full sm:w-1/3 text-left">

				<!-- Single project objectives -->
				<div class="mb-7">
					<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
						Objectives
					</p>
					<p class="font-general-regular text-primary-dark dark:text-ternary-light">
						{{ projects?.objective }}
					</p>
				</div>

				<!-- Single project technologies -->
				<div class="mb-7">
					<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
						Tools and Technologies
					</p>
					<p v-html="projects?.tools_and_technology"
						class="font-general-regular text-primary-dark dark:text-ternary-light">
					</p>
				</div>

				<!-- Single project social sharing -->
				<div>
					<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
						Extras
					</p>
					<div class="flex items-center gap-3 mt-5">
						<a target="__blank" aria-label="Share Project" :href="projects?.repo_link"
							class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"><i
								class="bi bi-github w-4 lg:w-5 h-4 lg:h-5"></i></a>
						<a target="__blank" aria-label="Share Project" :href="projects?.url"
							class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"><i
								class="bi bi-globe w-4 lg:w-5 h-4 lg:h-5"></i></a>
					</div>
				</div>
			</div>

			<!-- Single project right section details -->
			<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					Information
				</p>
				<p v-html="projects?.description"
					class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">


				</p>
			</div>
		</div>

	</div>
</template>
 
