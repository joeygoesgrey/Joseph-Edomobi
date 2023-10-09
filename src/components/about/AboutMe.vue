<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am Joseph Edomobi, a self-taught web developer and software engineer with a strong passion for building exceptional websites. I have invested a significant amount of time and effort into learning web development skills and techniques. Through online courses, tutorials, and practical projects, I have gained the knowledge and experience necessary to create secured , beautiful, functional, and user-friendly websites. As a web developer, My commitment to ongoing education and professional development ensures that I stay up-to-date with the latest trends and advancements in the web development industry. My goal is to create websites that not only look great and secured as possible but also provide a seamless user experience. I take pride in my attention to detail and dedication to delivering high-quality and secured work.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">


		<!-- About details -->
		<div class="w-full sm:w-4/4 text-left">
			<p v-for="bio in bios" :key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
