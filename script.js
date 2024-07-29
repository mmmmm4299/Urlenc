function convertUrl() {
    const input = document.getElementById('urlInput').value;
    let hexUrl = '';
    for (let i = 0; i < input.length; i++) {
        hexUrl += '%' + input.charCodeAt(i).toString(16).padStart(2, '0');
    }

    const isHttps = input.startsWith('https://');
    const basePath = 'https://mmmmm4299.github.io/Urlenc/';
    const path = isHttps ? 'hps-' : 'hp-';
    const resultUrl = basePath + path + hexUrl.replace(/%/g, '-');

    document.getElementById('hexOutput').innerHTML = `
        <a href="${resultUrl}" target="_blank">${resultUrl}</a>
        <br>
        <a href="${input}" target="_blank">Original URL</a>
    `;
}
