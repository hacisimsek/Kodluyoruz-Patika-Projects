const { ApolloServer, gql } = require('apollo-server');

const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { users, events, locations, posts } = require('./data');

const typeDefs = gql`
	type User {
		id: ID
		username: String
		email: String
	}

	type Event {
		id: ID
		title: String
		desc: String
		date: String
		from: String
		to: String
		location_id: ID
		user_id: ID
		#user
		#location
		user: User
	}

	type Location {
		id: ID
		name: String
		lat: Float
		lng: Float
	}

	type Post {
		id: ID
		user_id: ID
		event_id: ID
	}

	type Query {
		users: [User]
		user(id: ID!): User

		events: [Event]
		event(id: ID!): Event

		locations: [Location]
		location(id: ID!): Location

		posts: [Post]
		post(id: ID!): Post
	}
`;

const resolvers = {
	Query: {
		users: () => users,
		user: (_, { id }) => users.find((user) => user.id == id),

		events: () => events,
		event: (_, { id }) => events.find((event) => event.id == id),

		locations: () => locations,
		location: (_, { id }) => locations.find((location) => location.id == id),

		posts: () => posts,
		post: (_, { id }) => posts.find((post) => post.id == id),
	},
	Event: {
		user: (event) => users.filter((user) => user.id == event.user_id),
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
	cache: 'bounded',
	plugins: [
		ApolloServerPluginLandingPageGraphQLPlayground({
			// options
		}),
	],
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
