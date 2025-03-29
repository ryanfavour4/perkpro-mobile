export function sliceFromLastTo(str: string, to: string): string {
    const index = str.lastIndexOf(to);
    return index !== -1 ? str.slice(index + 1) : str;
}
