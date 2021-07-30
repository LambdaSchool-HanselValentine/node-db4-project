module.exports = {
	development: {
		// our DBMS driver
		client: "sqlite3",
		// the location of our db
		connection: {
			filename: "./data/recipes.db3",
		},
		// necessary when using sqlite3
		useNullAsDefault: true,
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
		// needed when using foreign keys
		pool: {
			afterCreate: (conn, done) => {
				// runs after a connection is made to the sqlite engine
				conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
			},
		},
	},
	testing: {},
	staging: {},
	production: {},
};
