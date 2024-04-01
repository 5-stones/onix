import Client from 'ssh2-sftp-client';
import path from 'node:path';

import { parse } from './parse';
import { ONIXMessageRoot } from './interfaces';

export async function parseFeedOnSFTP(
  options: Client.ConnectOptions,
  dir: string = '/',
  filter: Client.ListFilterFunction = (info) => {
    return info.type === '-' &&
      info.name.endsWith('.xml') &&
      info.name.toLocaleLowerCase().includes('onix');
    ;
  },
): Promise<ONIXMessageRoot> {
  const sftp = new Client();
  await sftp.connect(options);
  const items = await sftp.list(dir, filter);
  
  if (items.length === 0) {
    throw new Error('No ONIX feed could be found.');
  }

  const item = items[0];
  const p = path.join(dir, item.name);
  const buff = (await sftp.get(p)) as Buffer;
  await sftp.end();
  const message = buff.toString('utf-8');
  return parse(message);
}
