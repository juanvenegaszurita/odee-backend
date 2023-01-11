import { SetMetadata } from '@nestjs/common';

export const PUBLIC_OWNER = 'PublicOwner';
export const PRIVATE_OWNER = 'PrivateOwner';
export const BACKOFFICE = 'Backoffice';
export const DOWNLOAD_FILE = 'DownloadFile';
export const PublicOwner = () => SetMetadata(PUBLIC_OWNER, true);
export const PrivateOwner = () => SetMetadata(PRIVATE_OWNER, true);
export const Backoffice = () => SetMetadata(BACKOFFICE, true);
export const DownloadFile = () => SetMetadata(DOWNLOAD_FILE, true);
