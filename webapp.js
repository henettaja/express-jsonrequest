const { getData } = require('./src/getData')
const express = require('express')
const app = express()

async function run() {

	//Where to fetch from
	const postsURL = 'https://jsonplaceholder.typicode.com/posts'
	const usersURL = 'https://jsonplaceholder.typicode.com/users'

	//Port to run on
	const port = 3000

	//Fetch the data and wait for the response
	const postData = await getData(postsURL)
	const usersData = await getData(usersURL)

	//Declare an array for a particular user's posts
	let usersPosts = []

	// Declare a function to be run when the endpoint is called with a get method
	app.get('/', function (_, res) {

		// Go through the data
		usersData.map((user) => {

			//Clear the array after every user
			usersPosts = []
		
			postData.map((post) => {

				//When the user's ID and the posts userId match, add the post to the posts array
				if (user.id === post.userId)

				usersPosts.push(post)
			})
			
			//Add the matching posts to the user object
			user.posts = usersPosts

		})

		//Return the user data object
		res.send(usersData)
	})

	//Start listening for requests on the port
	app.listen(port, () => console.log(`Running on port ${port}`));
}

run()
