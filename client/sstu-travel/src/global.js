export function getUrl(base64data) {
    var binaryString = atob(base64data);
    var blob = new Blob([binaryString]);
    var url = URL.createObjectURL(blob);
    return url;
    
}