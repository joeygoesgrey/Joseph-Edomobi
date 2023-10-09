<script>
import feather from 'feather-icons';
import ContactForm from '@/components/contact/ContactForm.vue';

export default {
	components: {
		ContactForm,
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container  justify-center items-center flex flex-col md:flex-row py-5 md:py-10 md:mt-10">
	
		<!-- Contact form -->
		<ContactForm />


	</div>
</template>
