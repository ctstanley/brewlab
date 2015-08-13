# This image takes build context (app) and installs all dependencies
# Must pass app root directory as build context.  Check README.md
FROM node:0.10-onbuild

MAINTAINER Jack Zampolin <jack.zampolin@gmail.com>

# Expose default port for application
EXPOSE 8000

# Runs gulp production.  See package.json
# Build main.js and style.css and run production server
CMD npm run production
