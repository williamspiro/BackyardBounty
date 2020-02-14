#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const portalId = process.env.HUBSPOT_PORTAL_ID;
const userToken = process.env.HUBSPOT_USER_TOKEN;

const portalConfig = {
  name: 'PROD',
  portalId,
  userToken,
};

const config = {
  defaultPortal: 'PROD',
  portals: [portalConfig],
};

fs.writeFileSync(
  path.join(process.cwd(), 'hubspot.config.yml'),
  yaml.safeDump(config)
);