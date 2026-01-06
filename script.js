// Elemen DOM
const imageInput = document.getElementById('imageInput');
const uploadArea = document.getElementById('uploadArea');
const imagePreview = document.getElementById('imagePreview');
const imagePlaceholder = document.getElementById('imagePlaceholder');
const codeOutput = document.getElementById('codeOutput');
const codePlaceholder = document.getElementById('codePlaceholder');
const decryptedImagePreview = document.getElementById('decryptedImagePreview');
const decryptedPlaceholder = document.getElementById('decryptedPlaceholder');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const fileDimensions = document.getElementById('fileDimensions');
const fileType = document.getElementById('fileType');
const encryptionKey = document.getElementById('encryptionKey');
const decryptKey = document.getElementById('decryptKey');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const resetBtn = document.getElementById('resetBtn');
const copyCodeBtn = document.getElementById('copyCodeBtn');

// Elemen proses
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');
const step1Detail = document.getElementById('step1Detail');
const step2Detail = document.getElementById('step2Detail');
const step3Detail = document.getElementById('step3Detail');
const step4Detail = document.getElementById('step4Detail');
const processLog = document.getElementById('processLog');

// Variabel
let originalImageData = null;
let encryptedCode = null;
let imageWidth = 0;
let imageHeight = 0;
let originalFileSize = 0;
let originalFileName = '';
let originalFileType = '';

// Deteksi perangkat
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Setup event listeners untuk mobile/desktop
function setupEventListeners() {
    // Upload area
    uploadArea.addEventListener('click', () => imageInput.click());
    
    // Drag & drop hanya untuk desktop
    if (!isMobile) {
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#4fc3f7';
            uploadArea.style.background = 'rgba(79, 195, 247, 0.2)';
        });
        
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.borderColor = 'rgba(79, 195, 247, 0.5)';
            uploadArea.style.background = 'rgba(0, 0, 0, 0.2)';
        });
        
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = 'rgba(79, 195, 247, 0.5)';
            uploadArea.style.background = 'rgba(0, 0, 0, 0.2)';
            
            if (e.dataTransfer.files.length) {
                imageInput.files = e.dataTransfer.files;
                handleImageUpload(e.dataTransfer.files[0]);
            }
        });
    }
    
    // Event listeners lainnya
    imageInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleImageUpload(e.target.files[0]);
        }
    });
    
    encryptBtn.addEventListener('click', encryptImage);
    decryptBtn.addEventListener('click', decryptCode);
    resetBtn.addEventListener('click', resetAll);
    copyCodeBtn.addEventListener('click', copyCodeToClipboard);
    
    // Touch feedback untuk mobile
    if (isMobile) {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('touchstart', function() {
                this.style.opacity = '0.8';
            });
            btn.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
        });
    }
}

// Fungsi untuk menambah log
function addLog(message, type = 'info') {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${type}`;
    logEntry.innerHTML = `<span class="log-time">${timeString}</span> ${message}`;
    
    processLog.prepend(logEntry);
    
    // Batasi jumlah log
    if (processLog.children.length > 15) {
        processLog.removeChild(processLog.lastChild);
    }
    
    // Auto-scroll ke log terbaru
    processLog.scrollTop = 0;
}

// Fungsi untuk update step
function updateStep(stepNumber, status) {
    const step = document.getElementById(`step${stepNumber}`);
    const allSteps = [step1, step2, step3, step4];
    
    // Reset semua step
    allSteps.forEach(s => {
        s.classList.remove('active', 'completed');
    });
    
    // Set step aktif
    if (status === 'active') {
        step.classList.add('active');
    } else if (status === 'completed') {
        step.classList.add('completed');
        
        // Aktifkan step berikutnya jika ada
        if (stepNumber < 4) {
            setTimeout(() => {
                updateStep(stepNumber + 1, 'active');
            }, 300);
        }
    }
}

// Fungsi untuk menangani upload gambar
function handleImageUpload(file) {
    // Reset proses
    resetProcess();
    updateStep(1, 'active');
    
    // Validasi tipe file
    if (!file.type.match('image.*')) {
        addLog('❌ Hanya file gambar yang diperbolehkan!', 'error');
        updateStep(1, 'completed');
        return;
    }
    
    // Validasi ukuran file (maks 2MB)
    if (file.size > 2 * 1024 * 1024) {
        addLog('❌ Ukuran file maksimal 2MB!', 'error');
        updateStep(1, 'completed');
        return;
    }
    
    // Simpan info file
    originalFileName = file.name;
    originalFileSize = file.size;
    originalFileType = file.type;
    
    // Update info file
    fileInfo.classList.add('active');
    fileName.textContent = shortenFileName(file.name, 20);
    fileSize.textContent = formatFileSize(file.size);
    fileType.textContent = file.type.split('/')[1].toUpperCase();
    
    // Update step detail
    step1Detail.textContent = `File: ${shortenFileName(file.name, 15)}`;
    
    addLog(`📁 Mengunggah: ${shortenFileName(file.name, 25)}`, 'info');
    
    // Tampilkan loading
    imagePlaceholder.innerHTML = '<div class="spinner"></div><p>Memuat gambar...</p>';
    
    // Baca gambar
    const reader = new FileReader();
    reader.onload = function(e) {
        originalImageData = e.target.result;
        
        // Update step
        updateStep(1, 'completed');
        updateStep(2, 'active');
        
        // Buat objek Image untuk mendapatkan dimensi
        const img = new Image();
        img.onload = function() {
            imageWidth = img.width;
            imageHeight = img.height;
            fileDimensions.textContent = `${img.width}×${img.height}`;
            
            // Update step detail
            step2Detail.textContent = `${img.width}×${img.height}px`;
            
            addLog(`✅ Gambar dimuat: ${img.width}×${img.height}px`, 'success');
            
            // Tampilkan gambar
            imagePreview.src = originalImageData;
            imagePreview.style.display = 'block';
            imagePlaceholder.style.display = 'none';
            
            // Reset output
            resetOutput();
            
            // Update step
            updateStep(2, 'completed');
            
            addLog('🎯 Gambar siap untuk dienkripsi', 'info');
        };
        
        img.onerror = function() {
            addLog('❌ Gagal memuat gambar', 'error');
            updateStep(2, 'completed');
            imagePlaceholder.innerHTML = '<i class="fas fa-exclamation-circle"></i><p>Gagal memuat</p>';
        };
        
        img.src = originalImageData;
    };
    
    reader.onerror = function() {
        addLog('❌ Gagal membaca file', 'error');
        updateStep(1, 'completed');
        imagePlaceholder.innerHTML = '<i class="fas fa-exclamation-circle"></i><p>Gagal membaca</p>';
    };
    
    reader.readAsDataURL(file);
}

// Fungsi untuk mengenkripsi gambar
function encryptImage() {
    if (!originalImageData) {
        addLog('❌ Unggah gambar terlebih dahulu!', 'error');
        return;
    }
    
    const key = encryptionKey.value.trim();
    if (key.length < 6) {
        addLog('❌ Kunci minimal 6 karakter!', 'error');
        return;
    }
    
    // Reset proses
    resetProcess();
    updateStep(1, 'completed');
    updateStep(2, 'completed');
    updateStep(3, 'active');
    
    addLog('🔒 Memulai enkripsi...', 'info');
    
    // Simpan kunci ke field dekripsi
    decryptKey.value = key;
    
    // Tampilkan loading di output
    codePlaceholder.style.display = 'none';
    codeOutput.textContent = 'Memproses enkripsi...\n\nTunggu sebentar...';
    codeOutput.style.color = '#ff9800';
    
    // Nonaktifkan tombol selama proses
    encryptBtn.disabled = true;
    encryptBtn.innerHTML = '<div class="spinner"></div> Memproses...';
    
    // Proses enkripsi
    setTimeout(() => {
        try {
            addLog('📊 Mengekstrak data...', 'info');
            
            // Ambil data Base64
            const base64Data = originalImageData.split(',')[1];
            const base64Length = base64Data.length;
            
            step3Detail.textContent = `${base64Length} karakter`;
            
            // Update step
            updateStep(3, 'completed');
            updateStep(4, 'active');
            
            setTimeout(() => {
                addLog('🔐 Menerapkan enkripsi...', 'info');
                
                // Enkripsi dengan XOR
                const startTime = performance.now();
                encryptedCode = xorEncrypt(base64Data, key);
                const endTime = performance.now();
                const processTime = (endTime - startTime).toFixed(0);
                
                step4Detail.textContent = `${processTime}ms`;
                
                // Tambahkan metadata
                const timestamp = new Date().getTime();
                const metadata = `${timestamp}|${imageWidth}|${imageHeight}|${originalFileType}|`;
                const finalCode = metadata + encryptedCode;
                
                // Hitung ukuran
                const codeSize = finalCode.length;
                
                addLog(`📈 Kode: ${codeSize} karakter`, 'info');
                
                // Tampilkan kode
                displayCode(finalCode);
                
                // Aktifkan tombol salin
                copyCodeBtn.disabled = false;
                
                // Update step
                updateStep(4, 'completed');
                
                // Aktifkan kembali tombol enkripsi
                encryptBtn.disabled = false;
                encryptBtn.innerHTML = '<i class="fas fa-lock"></i> Enkripsi';
                
                addLog('✅ Enkripsi berhasil!', 'success');
                
            }, 600);
            
        } catch (error) {
            addLog(`❌ Error: ${error.message}`, 'error');
            updateStep(3, 'completed');
            updateStep(4, 'completed');
            
            // Aktifkan kembali tombol enkripsi
            encryptBtn.disabled = false;
            encryptBtn.innerHTML = '<i class="fas fa-lock"></i> Enkripsi';
        }
    }, 400);
}

// Fungsi untuk mendekripsi kode
function decryptCode() {
    const key = decryptKey.value.trim();
    if (!key) {
        addLog('❌ Masukkan kunci dekripsi!', 'error');
        return;
    }
    
    // Ambil kode
    let codeToDecrypt = '';
    if (encryptedCode) {
        codeToDecrypt = encryptedCode;
    } else {
        const text = codeOutput.textContent;
        if (text && text.includes('|')) {
            const parts = text.split('|');
            if (parts.length > 4) {
                codeToDecrypt = parts.slice(4).join('|');
            }
        } else if (text && !text.includes('Memproses')) {
            codeToDecrypt = text;
        }
    }
    
    if (!codeToDecrypt) {
        addLog('❌ Tidak ada kode untuk didekripsi!', 'error');
        return;
    }
    
    // Reset proses
    resetProcess();
    updateStep(1, 'completed');
    updateStep(2, 'completed');
    updateStep(3, 'active');
    
    addLog('🔓 Memulai dekripsi...', 'info');
    
    // Tampilkan loading
    decryptedPlaceholder.style.display = 'none';
    decryptedImagePreview.style.display = 'block';
    decryptedImagePreview.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIHN0cm9rZT0iIzRmYzNmNyIgc3Ryb2tlLXdpZHRoPSI4Ii8+PC9zdmc+';
    
    // Nonaktifkan tombol selama proses
    decryptBtn.disabled = true;
    decryptBtn.innerHTML = '<div class="spinner"></div> Memproses...';
    
    // Proses dekripsi
    setTimeout(() => {
        try {
            addLog('📊 Memproses kode...', 'info');
            
            step3Detail.textContent = `${codeToDecrypt.length} karakter`;
            
            // Update step
            updateStep(3, 'completed');
            updateStep(4, 'active');
            
            setTimeout(() => {
                addLog('🔓 Mendekripsi...', 'info');
                
                // Dekripsi
                const startTime = performance.now();
                const decryptedBase64 = xorDecrypt(codeToDecrypt, key);
                const endTime = performance.now();
                const processTime = (endTime - startTime).toFixed(0);
                
                step4Detail.textContent = `${processTime}ms`;
                
                // Buat Data URL
                const mimeType = 'image/png';
                const dataUrl = `data:${mimeType};base64,${decryptedBase64}`;
                
                // Tampilkan gambar
                decryptedImagePreview.src = dataUrl;
                
                // Tes gambar
                const testImg = new Image();
                testImg.onload = function() {
                    addLog('✅ Dekripsi berhasil!', 'success');
                    updateStep(4, 'completed');
                    
                    // Aktifkan kembali tombol
                    decryptBtn.disabled = false;
                    decryptBtn.innerHTML = '<i class="fas fa-unlock"></i> Dekripsi';
                };
                
                testImg.onerror = function() {
                    addLog('❌ Kunci salah / kode rusak', 'error');
                    updateStep(4, 'completed');
                    decryptedImagePreview.style.display = 'none';
                    decryptedPlaceholder.style.display = 'block';
                    decryptedPlaceholder.innerHTML = '<i class="fas fa-exclamation-circle"></i><p>Gagal mendekripsi</p>';
                    
                    // Aktifkan kembali tombol
                    decryptBtn.disabled = false;
                    decryptBtn.innerHTML = '<i class="fas fa-unlock"></i> Dekripsi';
                };
                
                testImg.src = dataUrl;
                
            }, 600);
            
        } catch (error) {
            addLog(`❌ Error: ${error.message}`, 'error');
            updateStep(3, 'completed');
            updateStep(4, 'completed');
            
            // Aktifkan kembali tombol
            decryptBtn.disabled = false;
            decryptBtn.innerHTML = '<i class="fas fa-unlock"></i> Dekripsi';
        }
    }, 400);
}

// Fungsi enkripsi XOR
function xorEncrypt(input, key) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        output += String.fromCharCode(charCode);
    }
    return btoa(output);
}

// Fungsi dekripsi XOR
function xorDecrypt(input, key) {
    const decodedInput = atob(input);
    let output = '';
    for (let i = 0; i < decodedInput.length; i++) {
        const charCode = decodedInput.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        output += String.fromCharCode(charCode);
    }
    return output;
}

// Fungsi untuk menampilkan kode
function displayCode(code) {
    codePlaceholder.style.display = 'none';
    
    // Format untuk tampilan
    const maxDisplayLength = isMobile ? 300 : 500;
    let displayCode = code;
    if (code.length > maxDisplayLength) {
        displayCode = code.substring(0, maxDisplayLength) + '\n\n... [KODE DIPOTONG, TAPI LENGKAP SAAT DISALIN] ...';
    }
    
    codeOutput.textContent = displayCode;
    codeOutput.style.color = '#00ff88';
}

// Fungsi untuk menyalin kode
function copyCodeToClipboard() {
    let textToCopy = '';
    
    if (encryptedCode) {
        const fullCode = `${Date.now()}|${imageWidth}|${imageHeight}|${originalFileType}|${encryptedCode}`;
        textToCopy = fullCode;
    } else {
        textToCopy = codeOutput.textContent;
    }
    
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            addLog('📋 Kode disalin!', 'success');
            
            // Feedback visual
            const originalText = copyCodeBtn.innerHTML;
            copyCodeBtn.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
            copyCodeBtn.style.background = 'linear-gradient(135deg, #2E7D32, #1B5E20)';
            
            setTimeout(() => {
                copyCodeBtn.innerHTML = originalText;
                copyCodeBtn.style.background = 'linear-gradient(135deg, #4CAF50, #2E7D32)';
            }, 2000);
        })
        .catch(err => {
            addLog(`❌ Gagal menyalin: ${err}`, 'error');
        });
}

// Fungsi untuk mereset output
function resetOutput() {
    codePlaceholder.style.display = 'block';
    codeOutput.textContent = '';
    codeOutput.style.color = '#00ff88';
    encryptedCode = null;
    
    decryptedImagePreview.style.display = 'none';
    decryptedPlaceholder.style.display = 'block';
    decryptedPlaceholder.innerHTML = '<i class="fas fa-image"></i><p>Gambar hasil dekripsi</p>';
    
    copyCodeBtn.disabled = true;
}

// Fungsi untuk mereset proses
function resetProcess() {
    [step1, step2, step3, step4].forEach(step => {
        step.classList.remove('active', 'completed');
    });
    
    [step1Detail, step2Detail, step3Detail, step4Detail].forEach(detail => {
        detail.textContent = '';
    });
}

// Fungsi untuk mereset semua
function resetAll() {
    // Reset input
    imageInput.value = '';
    imagePreview.style.display = 'none';
    imagePlaceholder.style.display = 'block';
    imagePlaceholder.innerHTML = '<i class="fas fa-image"></i><p>Gambar akan tampil di sini</p>';
    
    // Reset output
    resetOutput();
    
    // Reset info
    fileInfo.classList.remove('active');
    fileName.textContent = '-';
    fileSize.textContent = '-';
    fileDimensions.textContent = '-';
    fileType.textContent = '-';
    
    // Reset kunci
    encryptionKey.value = '';
    decryptKey.value = '';
    
    // Reset variabel
    originalImageData = null;
    imageWidth = 0;
    imageHeight = 0;
    originalFileSize = 0;
    originalFileName = '';
    originalFileType = '';
    
    // Reset proses
    resetProcess();
    
    // Reset tombol
    encryptBtn.disabled = false;
    encryptBtn.innerHTML = '<i class="fas fa-lock"></i> Enkripsi';
    decryptBtn.disabled = false;
    decryptBtn.innerHTML = '<i class="fas fa-unlock"></i> Dekripsi';
    
    // Reset log
    processLog.innerHTML = '';
    addLog('🔄 Sistem direset. Siap digunakan!', 'info');
}

// Fungsi utilitas
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function shortenFileName(name, maxLength) {
    if (name.length <= maxLength) return name;
    const extension = name.split('.').pop();
    const nameWithoutExt = name.substring(0, name.lastIndexOf('.'));
    const charsToKeep = maxLength - extension.length - 4; // untuk "..." dan "."
    return nameWithoutExt.substring(0, charsToKeep) + '...' + extension;
}

// Inisialisasi
setupEventListeners();
resetAll();

// Deteksi orientasi layar
window.addEventListener('resize', function() {
    // Update UI jika perlu
    const width = window.innerWidth;
    if (width < 768) {
        document.body.style.padding = '10px';
    } else {
        document.body.style.padding = '15px';
    }
});

// Informasi perangkat
addLog(`📱 Perangkat: ${isMobile ? 'Mobile' : 'Desktop/Laptop'}`, 'info');
addLog(`🌐 Lebar layar: ${window.innerWidth}px`, 'info');