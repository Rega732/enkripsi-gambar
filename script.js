// Elemen DOM
const imageInput = document.getElementById("imageInput");
const uploadArea = document.getElementById("uploadArea");
const imagePreview = document.getElementById("imagePreview");
const imagePlaceholder = document.getElementById("imagePlaceholder");
const codeOutput = document.getElementById("codeOutput");
const codePlaceholder = document.getElementById("codePlaceholder");
const decryptedImagePreview = document.getElementById("decryptedImagePreview");
const decryptedPlaceholder = document.getElementById("decryptedPlaceholder");
const fileInfo = document.getElementById("fileInfo");
const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const fileDimensions = document.getElementById("fileDimensions");
const fileType = document.getElementById("fileType");
const encryptionKey = document.getElementById("encryptionKey");
const decryptKey = document.getElementById("decryptKey");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const resetBtn = document.getElementById("resetBtn");
const copyCodeBtn = document.getElementById("copyCodeBtn");

// Elemen proses visual
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const step1Detail = document.getElementById("step1Detail");
const step2Detail = document.getElementById("step2Detail");
const step3Detail = document.getElementById("step3Detail");
const step4Detail = document.getElementById("step4Detail");
const processLog = document.getElementById("processLog");

// State Global
let originalImageData = null;

// Event Listeners
uploadArea.addEventListener("click", () => imageInput.click());

imageInput.addEventListener("change", (e) => {
    if (e.target.files.length) {
        handleImageUpload(e.target.files[0]);
    }
});

encryptBtn.addEventListener("click", encryptImage);
resetBtn.addEventListener("click", resetAll);

// Fungsi Utama
function handleImageUpload(file) {
    updateStep(1, "active");
    
    if (!file.type.match("image.*")) {
        addLog("❌ Error: Hanya gambar yang diperbolehkan!", "error");
        return;
    }

    fileName.textContent = file.name;
    fileSize.textContent = (file.size / 1024).toFixed(2) + " KB";
    fileType.textContent = file.type;
    fileInfo.classList.add("active");

    const reader = new FileReader();
    reader.onload = (e) => {
        originalImageData = e.target.result;
        imagePreview.src = originalImageData;
        imagePreview.style.display = "block";
        imagePlaceholder.style.display = "none";
        addLog("✅ Gambar berhasil dimuat.", "success");
        updateStep(1, "completed");
    };
    reader.readAsDataURL(file);
}

function encryptImage() {
    const key = encryptionKey.value;
    if (!originalImageData || key.length < 6) {
        addLog("❌ Kunci minimal 6 karakter dan gambar harus ada!", "error");
        return;
    }

    updateStep(3, "active");
    addLog("🔒 Memulai proses enkripsi XOR...");
    
    // Simulasi Enkripsi Base64 (Untuk demo visual)
    setTimeout(() => {
        const encrypted = btoa(originalImageData).substring(0, 1000) + "...[DATA TERENKRIPSI]";
        codeOutput.textContent = encrypted;
        codePlaceholder.style.display = "none";
        copyCodeBtn.disabled = false;
        addLog("✅ Enkripsi selesai!", "success");
        updateStep(3, "completed");
        updateStep(4, "completed");
    }, 1000);
}

function addLog(message, type = "info") {
    const entry = document.createElement("div");
    entry.className = `log-entry ${type}`;
    entry.innerHTML = `<span class="log-time">${new Date().toLocaleTimeString()}</span> ${message}`;
    processLog.prepend(entry);
}

function updateStep(num, status) {
    const el = document.getElementById(`step${num}`);
    el.classList.add(status);
}

function resetAll() {
    location.reload();
}