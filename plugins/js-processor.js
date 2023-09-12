const htmlProcessor = require('htmlprocessor'),
    inputPath = 'src/html/pages/*.html';

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
    const processor = new htmlProcessor(options),
        processedHTML = processor.processContent(source, inputPath);

    return processedHTML;
};
