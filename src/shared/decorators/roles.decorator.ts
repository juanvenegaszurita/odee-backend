import { SetMetadata } from '@nestjs/common';

export const PRIVATE_ODEE = 'PrivateOdee';
export const DOWNLOAD_FILE = 'DownloadFile';
export const PrivateOdee = () => SetMetadata(PRIVATE_ODEE, true);
export const DownloadFile = () => SetMetadata(DOWNLOAD_FILE, true);
