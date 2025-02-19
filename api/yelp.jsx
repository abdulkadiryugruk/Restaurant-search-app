import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		"Authorization": 
		"Bearer AWRUfNkQw6nr2AJljTe8m8As2jd9gS6fJyjv1-MDKN-EsRE__YRvKjdtARMcss9-fNCbIk5Rb6TNouCoZHuc8TvtS9YxbedEjyJPKWJpxEGyGoj4RR6-9Yg4mjkqZ3Yx",
	},
})