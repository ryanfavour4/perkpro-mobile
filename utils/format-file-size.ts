export const formatFileSize = (
    sizeInBytes: number | null | undefined
): string => {
    if (!sizeInBytes) return "0 MB";
    const sizeInMB = sizeInBytes / (1024 * 1024);
    return `${sizeInMB.toFixed(2)} MB`;
};
