import argv from './argv'

export default parseInt(argv.port || process.env.PORT || '3000', 10);
