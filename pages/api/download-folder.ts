import { NextApiRequest, NextApiResponse } from 'next';
import archiver from 'archiver';
import path from 'path';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let { folder = '' } = req.query as { folder?: string };

  // Normalize the folder path to avoid directory traversal
  folder = path.normalize(folder).replace(/^(\.\.(\/|\\|$))+/, '');

  // Ensure the folder path does not navigate outside the intended directory
  const basePath = path.join(process.cwd(), 'public');
  const directoryPath = path.join(basePath, folder);

  if (!directoryPath.startsWith(basePath)) {
    res.status(403).send('Access to the requested directory is forbidden');
    return;
  }

  // Set the headers to inform the browser about the download
  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', `attachment; filename="${path.basename(folder)}.zip"`);

  const archive = archiver('zip', {
    zlib: { level: 9 } // Set the compression level
  });

  archive.on('error', function(err) {
    res.status(500).send({ error: err.message });
  });

  // Pipe archive data to the response
  archive.pipe(res);

  // Append files from the directoryPath, ensuring it is under the 'downloads' directory
  archive.directory(directoryPath, false);

  // Finalize the archive
  archive.finalize();
}
