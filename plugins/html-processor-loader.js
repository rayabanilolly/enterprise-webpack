const htmlProcessor = require('htmlprocessor');

const data = {
    title: 'My Web App',
    content: 'Hello, World!',
    environment: 'production', // Set the environment to 'production' or 'development'
};

const options = {
    data,
    environment: data.environment,
};

module.exports = function (source) {
    // Process the HTML content using the node-htmlprocessor module
    const processedHTML = htmlProcessor(options);

    return processedHTML;
};
