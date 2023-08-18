const path = require('path');
const { generateApi } = require('swagger-typescript-api');
const outputPath = path.resolve(process.cwd(), `./src/api/modules`);
const templatesPath = './api-templates';
generateApi({
  name: 'test',
  output: outputPath,
  url: 'http://localhost:3000/api-docs-json',
  generateClient: true,
  generateRouteTypes: false,
  silent: true,
  modular: true,
  templates: templatesPath,
});
