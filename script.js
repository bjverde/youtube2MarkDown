async function getThumbnail() {
    const videoTitulo = document.getElementById("videoTitulo").value;
    const videoUrl = document.getElementById("videoUrl").value;
    const videoId = extractVideoId(videoUrl);

    if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        const markdown = `[![${videoTitulo}](${thumbnailUrl})](${videoUrl})`;
        console.log(markdown);

        document.getElementById("markdownOutput").value = markdown
        document.getElementById("htmlOutput").value = getHtmlOutput(videoTitulo,videoUrl,thumbnailUrl);
    } else {
        alert("Por favor, insira um URL válido do YouTube.");
    }
}

// Função para extrair o ID do vídeo do URL
function extractVideoId(url) {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11) ? match[2] : null;
}

function getHtmlOutput(videoTitulo,videoUrl,thumbnailUrl) {
    let htmlOutput = `
    <br>
    <a href="${videoUrl}">
        <p>${videoTitulo}</p>
        <img src="${thumbnailUrl}" width="400"/>
    </a>
    `;
    return htmlOutput;
}