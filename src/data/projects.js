const API_BASE_URL = "https://portfolio-b5d7.onrender.com"
import axios from 'axios';

const getPortfolioByTitle = async (title) => {
	try {
		const response = await axios.get(`${API_BASE_URL}/portfolio/${title}`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching portfolio by ID: ${error}`);
		return null;
	}
};

const getProjects = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/projects`);
		return response.data;
	} catch (error) {
		console.error(`Error fetching portfolio by ID: ${error}`);
		return null;
	}
};

export default API_BASE_URL;
export {
	API_BASE_URL,
	getPortfolioByTitle,
	getProjects,
}