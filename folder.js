document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const folder = new URLSearchParams(window.location.search).get('folder');
    let imageCount = 0;
    const imagesPerLoad = 100; // Number of images to load per click
    const totalImages = 1000; // Total number of images in each folder

    if (!folder || isNaN(folder) || folder < 0 || folder > 9) {
        gallery.textContent = 'Folder not found';
        return;
    }

    function createImageNumberLabel(imageNumber) {
        const label = document.createElement('p');
        label.textContent = `Bitcoin String ${imageNumber.toString().padStart(5, '0')}`;
        label.style.textAlign = 'center';
        label.style.background = 'Gold';
        return label;
    }

    function createDownloadButton(jsonSrc) {
        const button = document.createElement('button');
        button.textContent = 'Download JSON';
        button.onclick = () => downloadJSON(jsonSrc);
        button.style.display = 'block';
        button.style.margin = '5px auto';
        return button;
    }

    function loadImages() {
        const startImageNumber = parseInt(folder) * 1000 + imageCount + 1;
        const endImageNumber = Math.min(startImageNumber + imagesPerLoad - 1, parseInt(folder) * 1000 + totalImages);

        for (let image = startImageNumber; image <= endImageNumber; image++) {
            const img = document.createElement('img');
            const imageName = `${folder}/${image.toString().padStart(5, '0')}.svg`;
            img.src = imageName;
            img.alt = `Image ${image.toString().padStart(5, '0')}`;
            img.style.width = '150px';
            img.style.height = '150px';

            const jsonName = `${folder}json/item-${image.toString().padStart(5, '0')}.json`;

            const imageContainer = document.createElement('div');
            imageContainer.appendChild(createImageNumberLabel(image));
            imageContainer.appendChild(img);
            imageContainer.appendChild(createDownloadButton(jsonName));
            gallery.appendChild(imageContainer);
        }

        imageCount += imagesPerLoad;
        if (imageCount >= totalImages) {
            loadMoreButton.style.display = 'none';
        }
    }


    // Initial load
    loadImages();

    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'Load More';
    loadMoreButton.onclick = loadImages;
    loadMoreButton.style.display = 'block';
    loadMoreButton.style.margin = '20px auto';
    loadMoreButton.style.padding = '10px 20px';
    loadMoreButton.style.textAlign = 'center';
    document.body.appendChild(loadMoreButton);
});

function downloadImage(imageSrc) {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageSrc.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadJSON(jsonSrc) {
    const link = document.createElement('a');
    link.href = jsonSrc;
    link.download = jsonSrc.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

