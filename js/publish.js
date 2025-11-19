document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('property-images');
    const previewGrid = document.getElementById('image-preview');

    if (dropZone && fileInput && previewGrid) {
        // Click to upload
        dropZone.addEventListener('click', () => {
            fileInput.click();
        });

        // File input change
        fileInput.addEventListener('change', handleFiles);

        // Drag and drop events
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, preventDefaults, false);
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, highlight, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, unhighlight, false);
        });

        dropZone.addEventListener('drop', handleDrop, false);
    }

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight() {
        dropZone.classList.add('dragover');
    }

    function unhighlight() {
        dropZone.classList.remove('dragover');
    }

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles({ target: { files: files } });
    }

    function handleFiles(e) {
        const files = [...e.target.files];
        files.forEach(previewFile);
    }

    function previewFile(file) {
        if (!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            const div = document.createElement('div');
            div.className = 'preview-item';

            const img = document.createElement('img');
            img.src = reader.result;

            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.innerHTML = '×';
            removeBtn.onclick = function (e) {
                e.stopPropagation();
                div.remove();
            };

            div.appendChild(img);
            div.appendChild(removeBtn);
            previewGrid.appendChild(div);
        }
    }
});
