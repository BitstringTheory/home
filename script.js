document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');

    for (let folder = 0; folder <= 9; folder++) {
        for (let image = 1; image <= 1000; image++) {
            const img = document.createElement('img');
            const imageName = `${folder}/${image.toString().padStart(5, '0')}.svg`;
            img.src = imageName;
            img.alt = `Image ${imageName}`;
            img.addEventListener('click', () => downloadImage(imageName));
            gallery.appendChild(img);
        }
    }
});

function downloadImage(imageName) {
    const link = document.createElement('a');
    link.href = imageName;
    link.download = imageName.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
