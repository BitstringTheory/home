document.addEventListener('DOMContentLoaded', function() {
    const folderList = document.getElementById('folderList');

    for (let folder = 0; folder <= 9; folder++) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `folder.html?folder=${folder}`;
        link.textContent = `Folder ${folder}`;
        listItem.appendChild(link);
        folderList.appendChild(listItem);
    }
});
