<script>
import axios from 'axios'; // Import axios
import API_BASE_URL from '../../data/projects';
export default {
	methods: {
		async handleSubmit() {
			// Collect form data
			const formData = {
				fullname: this.fullname,
				email: this.email,
				subject: this.subject,
				message: this.message,
			};

			try {
				this.loading = true
				// Make API request
				await axios.post(`${API_BASE_URL}/send_email`, formData);
				this.feedback = true
				this.fullname = ''
				this.email = ''
				this.subject = ''
				this.message = ''

				this.loading = false
			} catch (error) {
				this.loading = false
				// Handle error
				console.error('An error occurred:', error);
			}
		},
	},
	data() {
		return {
			fullname: '',
			email: '',
			subject: '',
			message: '',
			feedback: false,
			loading: false,
		};
	},
};
</script>

<template>
	<div class="w-full md:w-1/2">

		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">

			<div v-if="feedback"
				class="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
				role="alert">
				<svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
					fill="currentColor" viewBox="0 0 20 20">
					<path
						d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
				</svg>
				<span class="sr-only">Info</span>
				<div>
					<span class="font-medium">Email was sent successfully

					</span>
				</div>
			</div>

			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
				Contact Form
			</p>
			<form @submit.prevent="handleSubmit" class="font-general-regular space-y-7">
				<div>
					<label class="block mb-2 text-lg text-primary-dark dark:text-primary-light">Full Name </label>
					<input
						class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						placeholder="Full Name" required v-model="fullname" />
				</div>
				<div>
					<label class="block mb-2 text-lg text-primary-dark dark:text-primary-light">Email</label>
					<input
						class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						placeholder="Email" type="email" v-model="email" required />
				</div>
				<div>
					<label class="block mb-2 text-lg text-primary-dark dark:text-primary-light">Subject</label>
					<input
						class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						placeholder="Subject" required v-model="subject" />
				</div>

				<div>
					<label class="block text-lg text-primary-dark dark:text-primary-light mb-2">Message</label>
					<textarea
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						placeholder="Leave a message" v-model="message" cols="14" rows="6" required></textarea>
				</div>

				<button title="Send Message"
					class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
					type="submit" aria-label="Send Message">
					{{ this.loading ? 'Sending ...' : 'Send Message' }}
				</button>

			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
