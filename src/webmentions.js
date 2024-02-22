// webmentions.js
import fs from 'fs';
import https from 'https';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { mapKeys, camel } from 'radash';

const webmentions = fetchWebmentions().then((webmentions) => {
  webmentions.forEach((webmention) => {
    let slug = webmention['wm-target']
      .replaceAll(`https://`, '')
      .replaceAll(`heyjaywilson.com`, '')
      .replace(/\/$/, '')
      .replaceAll('/', '_');

    if (slug.length == 0) {
      slug = 'home';
    } else {
      while (slug.charAt(0) === '_') {
        slug = slug.substring(1);
      }
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const filename = `${__dirname}/content/webmentions/${slug}.json`;

    let newMention = mapKeys(webmention, key => camel(key))
    if (!fs.existsSync(filename)) {
      fs.writeFileSync(filename, JSON.stringify([newMention], null, 2));
      return;
    }

    const entries = JSON.parse(fs.readFileSync(filename))
      .filter((wm) => wm['wmId'] !== newMention['wmId'])
      .concat([newMention]);

    entries.sort((a, b) => a['wmId'] - b['wmId']);

    fs.writeFileSync(filename, JSON.stringify(entries, null, 2));
  });
});

function fetchWebmentions() {
  const since = new Date();
  since.setDate(since.getDate() - 3);

  const url =
    'https://webmention.io/api/mentions.jf2' +
    `?domain=heyjaywilson.com` +
    '&token=ZlHE6wD1zDsqDBkWGVijfg' +
    `&since=${since.toISOString()}` +
    '&per-page=999';

  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let body = '';

        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          try {
            resolve(JSON.parse(body));
          } catch (error) {
            reject(error);
          }
        });
      })
      .on('error', (error) => {
        reject(error);
      });
  }).then((response) => {
    if (!('children' in response)) {
      throw new Error('Invalid webmention.io response.');
    }
    return response.children;
  });
}

webmentions()