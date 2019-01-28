export interface FileInterface {
    filename: string;
    type: string;
    language?: string;
    'raw_url': string;
    size: number;
    truncated?: boolean;
    content?: string;
}
