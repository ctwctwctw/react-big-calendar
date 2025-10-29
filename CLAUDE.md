# Claude Code Guide for react-big-calendar

## Project Overview
react-big-calendar is an events calendar component built for React. It uses flexbox for layout and is designed for modern browsers.

## Tech Stack
- React
- Babel
- Rollup (bundler)
- Jest (testing)
- Storybook (component development)
- SASS (styling)
- Multiple date library localizers: Moment.js, Globalize.js, date-fns, Day.js

## Project Structure
- `/src` - Source code
- `/stories` - Storybook stories for component demos
- `/test` - Test files
- `/docs` - Documentation
- `/.storybook` - Storybook configuration
- `/.scripts` - Build and utility scripts

## Development Commands
- `yarn storybook` - Run Storybook for local development
- `yarn test` - Run tests
- `yarn build` - Build the library

## Key Features
- Multiple calendar views (month, week, day, agenda)
- Event drag and drop support
- Custom styling with SASS
- Multiple date library support
- Localization support

## Working with this Codebase
1. The main calendar component and views are in `/src`
2. Use Storybook to test changes visually
3. Styles are in SASS format
4. The project uses Babel for transpilation and Rollup for bundling
5. Tests use Jest

## Contributing
- See CONTRIBUTING.md for guidelines
- Uses conventional commits (commitlint)
- Husky for git hooks
- lint-staged for pre-commit linting
