export const downloadFile = (fileName: string, content: string) => {
    const link = document.createElement("a");
    const file = new Blob([content]);
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    link.click();
}