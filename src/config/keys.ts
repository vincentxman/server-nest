export default {
    mongoURI: 'mongodb://localhost/test',
    mongoOpts: {
        promiseLibrary: require('bluebird'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};
