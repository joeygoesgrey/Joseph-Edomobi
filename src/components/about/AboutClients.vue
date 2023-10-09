<script>

export default {

	data: () => {
		return {
			clientsHeading: 'My Skills',
			skills: [
				{
					name: 'Backend Technologies',
					skills: [
						{
							technologies: 'FastAPI, Django, Flask'
						},
						{
							technologies: 'Scrapy, Playwright, Selenium'
						},
						{
							technologies: 'Sql databases, database management system(DBMS)'
						},
						{
							technologies: 'Sqlalchemy, and Alembic'
						}
					]
				},
				{
					name: 'Frontend Technologies',
					skills: [
						{
							technologies: 'Vue, React, Quasar'
						},
						{
							technologies: 'HTML, CSS, JavaScript'
						},
						{
							technologies: 'Tailwind CSS, Bootstrap'
						}
					]
				},
				{
					name: 'Other Technologies',
					skills: [
						{
							technologies: 'Docker'
						},
						{
							technologies: 'Nginx'
						},
						{
							technologies: 'Shell Scripting'
						},
						{
							technologies: 'Version Control with Git, Github,  Gitlab'
						},
						{
							technologies: 'Postman'
						}

					]
				},
				{
					name: 'Professional skills',
					skills: [
						{
							technologies: 'Prompt Engineering with Chatgpt'
						},
						{
							technologies: 'Research and Debugging skills'
						},
						{
							technologies: 'Fast Pace Learner '
						},
						{
							technologies: 'Ability to work under Pressure'
						},

					]
				}
			]
		};
	}
};
</script>
<template>
	<div class="mt-6 sm:mt-10 md:mt-20">
		<p class="font-general-medium text-xl sm:text-2xl md:text-3xl text-primary-dark dark:text-primary-light">
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 sm:mt-10 md:mt-14 gap-2">
			<div v-for="category in skills" :key="category.name"
				class="w-full sm:w-64 py-3 sm:py-5 px-3 sm:px-5 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-6 sm:mb-8 cursor-pointer dark:bg-secondary-light ">
				<strong class="text-2xl">
					{{ category.name }}
				</strong>
				<div v-for="skill in category.skills" :key="skill.technologies" class="mt-4">
					<div
						class="w-full sm:w-64 py-3 sm:py-5 px-3 sm:px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-6 sm:mb-8 cursor-pointer dark:bg-secondary-light">
						{{ skill.technologies }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
 