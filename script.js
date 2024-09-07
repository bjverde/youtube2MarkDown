async function getThumbnail() {
    const videoTitulo = document.getElementById("videoTitulo").value;
    const videoUrl = document.getElementById("videoUrl").value;
    const videoId = extractVideoId(videoUrl);
    console.log(videoId);

    if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        const markdown = `[![${videoTitulo}](${thumbnailUrl})](${videoUrl})`;
        console.log(markdown);

        document.getElementById("markdownOutput").textContent = markdown;
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

// Função para buscar o título do vídeo usando fetch
async function getVideoTitle(videoId) {
    const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`);
    const text = await response.text();
    
    // Extrair o título do HTML da página
    const titleMatch = text.match(/<meta name="title" content="(.+?)">/);
    return titleMatch ? titleMatch[1] : null;
}
