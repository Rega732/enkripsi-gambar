<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
    />
    <title>Enkripsi Gambar - Responsif</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      :root {
        --primary-color: #4fc3f7;
        --secondary-color: #ff9800;
        --success-color: #4caf50;
        --danger-color: #f44336;
        --dark-bg: #0c2461;
        --medium-bg: #1e3799;
        --light-bg: #4a69bd;
        --card-bg: rgba(255, 255, 255, 0.08);
        --text-color: #fff;
        --text-light: rgba(255, 255, 255, 0.7);
        --border-color: rgba(255, 255, 255, 0.1);
        --shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        --border-radius: 15px;
        --border-radius-sm: 10px;
        --spacing-xs: 5px;
        --spacing-sm: 10px;
        --spacing-md: 20px;
        --spacing-lg: 30px;
        --spacing-xl: 40px;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }

      body {
        background: linear-gradient(
          135deg,
          var(--dark-bg),
          var(--medium-bg),
          var(--light-bg)
        );
        color: var(--text-color);
        min-height: 100vh;
        padding: var(--spacing-sm);
        line-height: 1.5;
      }

      .container {
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
      }

      /* Header Responsif */
      header {
        text-align: center;
        margin-bottom: var(--spacing-md);
        padding: var(--spacing-md);
        background: rgba(255, 255, 255, 0.1);
        border-radius: var(--border-radius);
        backdrop-filter: blur(10px);
        box-shadow: var(--shadow);
        border: 1px solid var(--border-color);
      }

      h1 {
        font-size: clamp(1.8rem, 5vw, 2.8rem);
        margin-bottom: var(--spacing-sm);
        color: var(--primary-color);
        word-wrap: break-word;
      }

      .subtitle {
        font-size: clamp(0.9rem, 3vw, 1.2rem);
        opacity: 0.9;
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.6;
      }

      /* Main Container Responsif */
      .main-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-md);
      }

      /* Panel Responsif */
      .panel {
        background: var(--card-bg);
        border-radius: var(--border-radius);
        padding: clamp(var(--spacing-md), 3vw, var(--spacing-lg));
        box-shadow: var(--shadow);
        border: 1px solid var(--border-color);
        display: flex;
        flex-direction: column;
      }

      .panel h2 {
        font-size: clamp(1.3rem, 4vw, 1.6rem);
        margin-bottom: var(--spacing-md);
        color: var(--primary-color);
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        padding-bottom: var(--spacing-sm);
        border-bottom: 2px solid rgba(79, 195, 247, 0.3);
        flex-wrap: wrap;
      }

      /* Upload Area Responsif */
      .upload-area {
        border: 3px dashed rgba(79, 195, 247, 0.5);
        border-radius: var(--border-radius-sm);
        padding: clamp(var(--spacing-lg), 5vw, var(--spacing-xl))
          var(--spacing-md);
        text-align: center;
        cursor: pointer;
        transition: all 0.3s;
        margin-bottom: var(--spacing-md);
        background: rgba(0, 0, 0, 0.2);
        min-height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .upload-area:hover,
      .upload-area:active {
        border-color: var(--primary-color);
        background: rgba(79, 195, 247, 0.1);
      }

      .upload-area i {
        font-size: clamp(3rem, 10vw, 4rem);
        margin-bottom: var(--spacing-sm);
        color: var(--primary-color);
      }

      .upload-area p {
        font-size: clamp(0.9rem, 3vw, 1.1rem);
        margin-bottom: var(--spacing-xs);
      }

      /* Preview Container Responsif */
      .preview-container {
        height: clamp(180px, 30vh, 220px);
        border-radius: var(--border-radius-sm);
        overflow: hidden;
        background: rgba(0, 0, 0, 0.3);
        margin-bottom: var(--spacing-md);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--border-color);
      }

      .image-preview {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      /* Code Container Responsif */
      .code-container {
        height: clamp(180px, 30vh, 220px);
        border-radius: var(--border-radius-sm);
        overflow: auto;
        background: #1a1a2e;
        margin-bottom: var(--spacing-md);
        padding: var(--spacing-sm);
        font-family: "Courier New", monospace;
        font-size: clamp(10px, 2vw, 12px);
        color: #00ff88;
        border: 2px solid #16213e;
        white-space: pre-wrap;
        word-break: break-all;
        -webkit-overflow-scrolling: touch;
      }

      /* Controls Responsif */
      .controls {
        margin-top: auto;
      }

      .input-group {
        margin-bottom: var(--spacing-md);
      }

      label {
        display: block;
        margin-bottom: var(--spacing-xs);
        color: #bbdefb;
        font-weight: 600;
        font-size: clamp(0.9rem, 3vw, 1rem);
      }

      input[type="password"],
      input[type="text"] {
        width: 100%;
        padding: clamp(10px, 2vw, 12px) var(--spacing-sm);
        border-radius: var(--border-radius-sm);
        border: 2px solid rgba(79, 195, 247, 0.3);
        background: rgba(0, 0, 0, 0.4);
        color: var(--text-color);
        font-size: clamp(0.9rem, 3vw, 1rem);
      }

      input:focus {
        outline: none;
        border-color: var(--primary-color);
      }

      /* Button Group Responsif */
      .btn-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: var(--spacing-sm);
        margin-top: var(--spacing-md);
      }

      .btn {
        padding: clamp(10px, 2vw, 12px) var(--spacing-md);
        border-radius: var(--border-radius-sm);
        border: none;
        font-size: clamp(0.9rem, 3vw, 1rem);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-xs);
        min-height: 44px; /* Minimum touch target size for mobile */
        touch-action: manipulation; /* Improves touch response */
      }

      .btn-primary {
        background: linear-gradient(135deg, var(--primary-color), #2196f3);
        color: white;
      }

      .btn-secondary {
        background: linear-gradient(135deg, var(--secondary-color), #f57c00);
        color: white;
      }

      .btn-danger {
        background: linear-gradient(135deg, var(--danger-color), #d32f2f);
        color: white;
      }

      .btn-success {
        background: linear-gradient(135deg, var(--success-color), #2e7d32);
        color: white;
      }

      .btn:hover,
      .btn:active {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }

      .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
      }

      /* Placeholder */
      .placeholder {
        text-align: center;
        color: var(--text-light);
        padding: var(--spacing-md);
      }

      .placeholder i {
        font-size: clamp(2rem, 8vw, 3rem);
        margin-bottom: var(--spacing-sm);
      }

      /* File Info Responsif */
      .file-info {
        background: rgba(0, 0, 0, 0.3);
        padding: var(--spacing-sm);
        border-radius: var(--border-radius-sm);
        margin-bottom: var(--spacing-md);
        font-size: clamp(0.8rem, 2.5vw, 0.9rem);
        display: none;
      }

      .file-info.active {
        display: block;
      }

      /* Process Panel Responsif */
      .process-panel {
        background: var(--card-bg);
        border-radius: var(--border-radius);
        padding: clamp(var(--spacing-md), 3vw, var(--spacing-lg));
        box-shadow: var(--shadow);
        border: 1px solid var(--border-color);
        margin-bottom: var(--spacing-md);
      }

      .process-steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--spacing-sm);
        margin-top: var(--spacing-md);
      }

      .step {
        background: rgba(0, 0, 0, 0.3);
        border-radius: var(--border-radius-sm);
        padding: var(--spacing-md);
        text-align: center;
        border: 2px solid var(--border-color);
        transition: all 0.3s;
        min-height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .step.active {
        border-color: var(--primary-color);
        background: rgba(79, 195, 247, 0.1);
        transform: translateY(-5px);
      }

      .step.completed {
        border-color: var(--success-color);
        background: rgba(76, 175, 80, 0.1);
      }

      .step-icon {
        font-size: clamp(1.8rem, 6vw, 2.5rem);
        margin-bottom: var(--spacing-sm);
        color: var(--text-light);
      }

      .step.active .step-icon {
        color: var(--primary-color);
        animation: pulse 1.5s infinite;
      }

      .step.completed .step-icon {
        color: var(--success-color);
      }

      .step-title {
        font-weight: 600;
        margin-bottom: var(--spacing-xs);
        color: var(--text-color);
        font-size: clamp(0.9rem, 3vw, 1.1rem);
      }

      .step-desc {
        font-size: clamp(0.8rem, 2.5vw, 0.9rem);
        color: var(--text-light);
        min-height: 40px;
      }

      .step-detail {
        margin-top: var(--spacing-sm);
        padding: var(--spacing-xs);
        background: rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        font-size: clamp(0.7rem, 2vw, 0.85rem);
        color: var(--primary-color);
        font-family: monospace;
        display: none;
        word-break: break-word;
      }

      .step.active .step-detail {
        display: block;
        animation: fadeIn 0.5s;
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      /* Process Log Responsif */
      .process-log {
        margin-top: var(--spacing-md);
        background: rgba(0, 0, 0, 0.3);
        border-radius: var(--border-radius-sm);
        padding: var(--spacing-md);
        max-height: clamp(150px, 25vh, 200px);
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      .log-title {
        font-weight: 600;
        margin-bottom: var(--spacing-sm);
        color: var(--primary-color);
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        font-size: clamp(0.9rem, 3vw, 1.1rem);
      }

      .log-entry {
        padding: var(--spacing-xs) 0;
        border-bottom: 1px solid var(--border-color);
        font-family: monospace;
        font-size: clamp(0.7rem, 2.5vw, 0.9rem);
        word-break: break-word;
      }

      .log-entry.success {
        color: var(--success-color);
      }

      .log-entry.error {
        color: var(--danger-color);
      }

      .log-entry.info {
        color: var(--primary-color);
      }

      .log-entry.warning {
        color: var(--secondary-color);
      }

      .log-time {
        color: var(--text-light);
        font-size: clamp(0.6rem, 2vw, 0.8rem);
        margin-right: var(--spacing-xs);
        white-space: nowrap;
      }

      /* Footer Responsif */
      footer {
        text-align: center;
        margin-top: var(--spacing-lg);
        padding-top: var(--spacing-md);
        border-top: 1px solid var(--border-color);
        color: var(--text-light);
        font-size: clamp(0.8rem, 2.5vw, 0.9rem);
      }

      /* Mobile-Specific Adjustments */
      @media (max-width: 768px) {
        body {
          padding: var(--spacing-xs);
        }

        .main-container {
          grid-template-columns: 1fr;
          gap: var(--spacing-sm);
        }

        .panel {
          padding: var(--spacing-sm);
        }

        .process-steps {
          grid-template-columns: 1fr;
        }

        .btn-group {
          grid-template-columns: 1fr;
        }

        .btn {
          width: 100%;
        }

        /* Improve touch targets on mobile */
        input,
        button,
        .upload-area {
          font-size: 16px !important; /* Prevents iOS zoom on focus */
        }
      }

      /* Tablet Adjustments */
      @media (min-width: 769px) and (max-width: 1024px) {
        .main-container {
          grid-template-columns: repeat(2, 1fr);
        }

        .process-steps {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      /* Desktop Optimizations */
      @media (min-width: 1025px) {
        .main-container {
          grid-template-columns: repeat(2, 1fr);
        }

        .process-steps {
          grid-template-columns: repeat(4, 1fr);
        }
      }

      /* High DPI Screens */
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .btn,
        input,
        .upload-area {
          border-width: 1.5px;
        }
      }

      /* Print Styles */
      @media print {
        body {
          background: white !important;
          color: black !important;
        }

        .panel,
        .process-panel {
          background: white !important;
          border: 1px solid #ccc !important;
          color: black !important;
          box-shadow: none !important;
        }

        .btn,
        .upload-area,
        .process-log {
          display: none !important;
        }
      }

      /* Orientation-specific adjustments */
      @media (orientation: landscape) and (max-height: 600px) {
        .preview-container,
        .code-container {
          height: 150px;
        }

        .process-log {
          max-height: 120px;
        }
      }

      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        :root {
          --dark-bg: #0a1931;
          --medium-bg: #1a1a2e;
          --light-bg: #16213e;
        }
      }

      /* Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .btn,
        .step,
        .upload-area {
          transition: none !important;
        }

        .step.active .step-icon {
          animation: none !important;
        }
      }

      /* Accessibility improvements */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      /* Focus styles for keyboard navigation */
      .btn:focus-visible,
      input:focus-visible {
        outline: 3px solid var(--primary-color);
        outline-offset: 2px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <h1><i class="fas fa-lock"></i> Enkripsi Gambar Responsif</h1>
        <p class="subtitle">
          Aplikasi enkripsi gambar yang berfungsi optimal di smartphone, tablet,
          dan desktop
        </p>
      </header>

      <div class="main-container">
        <!-- Panel Input -->
        <div class="panel">
          <h2><i class="fas fa-upload"></i> <span>Input Gambar</span></h2>

          <div
            class="upload-area"
            id="uploadArea"
            role="button"
            tabindex="0"
            aria-label="Area unggah gambar"
          >
            <i class="fas fa-cloud-upload-alt"></i>
            <p>Klik atau seret gambar ke sini</p>
            <p><small>Format: JPG, PNG, GIF (Maks. 2MB)</small></p>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style="display: none"
              aria-label="Pilih file gambar"
            />
          </div>

          <div class="file-info" id="fileInfo" aria-live="polite">
            <div><strong>Nama:</strong> <span id="fileName">-</span></div>
            <div><strong>Ukuran:</strong> <span id="fileSize">-</span></div>
            <div>
              <strong>Dimensi:</strong> <span id="fileDimensions">-</span>
            </div>
            <div><strong>Tipe:</strong> <span id="fileType">-</span></div>
          </div>

          <div class="preview-container" id="imagePreviewContainer">
            <img class="image-preview" id="imagePreview" alt="Preview Gambar" />
            <div class="placeholder" id="imagePlaceholder">
              <i class="fas fa-image"></i>
              <p>Gambar akan ditampilkan di sini</p>
            </div>
          </div>

          <div class="controls">
            <div class="input-group">
              <label for="encryptionKey"
                ><i class="fas fa-key"></i> Kunci Enkripsi</label
              >
              <input
                type="password"
                id="encryptionKey"
                placeholder="Masukkan kunci (min. 6 karakter)"
                aria-label="Kunci enkripsi"
              />
            </div>

            <div class="btn-group">
              <button
                class="btn btn-primary"
                id="encryptBtn"
                aria-label="Enkripsi gambar menjadi kode"
              >
                <i class="fas fa-lock"></i> <span>Enkripsi ke Kode</span>
              </button>
              <button
                class="btn btn-danger"
                id="resetBtn"
                aria-label="Reset semua input"
              >
                <i class="fas fa-redo"></i> <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Panel Output -->
        <div class="panel">
          <h2><i class="fas fa-code"></i> <span>Kode Terenkripsi</span></h2>

          <div
            class="code-container"
            id="codeOutput"
            role="region"
            aria-label="Area kode terenkripsi"
          >
            <div class="placeholder" id="codePlaceholder">
              <i class="fas fa-lock"></i>
              <p>Kode terenkripsi akan muncul di sini</p>
            </div>
          </div>

          <div class="input-group">
            <label for="decryptKey"
              ><i class="fas fa-key"></i> Kunci Dekripsi</label
            >
            <input
              type="password"
              id="decryptKey"
              placeholder="Masukkan kunci untuk dekripsi"
              aria-label="Kunci dekripsi"
            />
          </div>

          <div class="preview-container" id="decryptedPreviewContainer">
            <img
              class="image-preview"
              id="decryptedImagePreview"
              alt="Gambar Terdekripsi"
            />
            <div class="placeholder" id="decryptedPlaceholder">
              <i class="fas fa-image"></i>
              <p>Gambar terdekripsi akan muncul di sini</p>
            </div>
          </div>

          <div class="btn-group">
            <button
              class="btn btn-secondary"
              id="decryptBtn"
              aria-label="Dekripsi kode menjadi gambar"
            >
              <i class="fas fa-unlock"></i> <span>Dekripsi ke Gambar</span>
            </button>
            <button
              class="btn btn-success"
              id="copyCodeBtn"
              disabled
              aria-label="Salin kode terenkripsi ke clipboard"
            >
              <i class="fas fa-copy"></i> <span>Salin Kode</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Panel Proses -->
      <div class="process-panel">
        <h2><i class="fas fa-cogs"></i> <span>Visualisasi Proses</span></h2>

        <div class="process-steps">
          <!-- Langkah 1 -->
          <div class="step" id="step1">
            <div class="step-icon">
              <i class="fas fa-upload"></i>
            </div>
            <div class="step-title">Upload Gambar</div>
            <div class="step-desc">Menunggu gambar diunggah...</div>
            <div class="step-detail" id="step1Detail"></div>
          </div>

          <!-- Langkah 2 -->
          <div class="step" id="step2">
            <div class="step-icon">
              <i class="fas fa-cog"></i>
            </div>
            <div class="step-title">Ekstrak Data</div>
            <div class="step-desc">Mengambil data gambar...</div>
            <div class="step-detail" id="step2Detail"></div>
          </div>

          <!-- Langkah 3 -->
          <div class="step" id="step3">
            <div class="step-icon">
              <i class="fas fa-key"></i>
            </div>
            <div class="step-title">Proses Enkripsi</div>
            <div class="step-desc">Menerapkan algoritma XOR...</div>
            <div class="step-detail" id="step3Detail"></div>
          </div>

          <!-- Langkah 4 -->
          <div class="step" id="step4">
            <div class="step-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <div class="step-title">Hasil & Output</div>
            <div class="step-desc">Menyiapkan output...</div>
            <div class="step-detail" id="step4Detail"></div>
          </div>
        </div>

        <div class="process-log" role="log" aria-label="Log proses enkripsi">
          <div class="log-title"><i class="fas fa-history"></i> Log Proses</div>
          <div id="processLog">
            <div class="log-entry info">
              <span class="log-time">00:00:00</span>
              Sistem siap. Unggah gambar untuk memulai.
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>
          Dibuat dengan <i class="fas fa-heart" style="color: #f44336"></i> |
          Enkripsi Gambar Responsif
        </p>
        <p>
          Optimal untuk Mobile & Desktop • Semua proses dilakukan di browser
          Anda
        </p>
      </footer>
    </div>

    <script>
      // Elemen DOM
      const imageInput = document.getElementById("imageInput");
      const uploadArea = document.getElementById("uploadArea");
      const imagePreview = document.getElementById("imagePreview");
      const imagePlaceholder = document.getElementById("imagePlaceholder");
      const codeOutput = document.getElementById("codeOutput");
      const codePlaceholder = document.getElementById("codePlaceholder");
      const decryptedImagePreview = document.getElementById(
        "decryptedImagePreview"
      );
      const decryptedPlaceholder = document.getElementById(
        "decryptedPlaceholder"
      );
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

      // Elemen proses
      const step1 = document.getElementById("step1");
      const step2 = document.getElementById("step2");
      const step3 = document.getElementById("step3");
      const step4 = document.getElementById("step4");
      const step1Detail = document.getElementById("step1Detail");
      const step2Detail = document.getElementById("step2Detail");
      const step3Detail = document.getElementById("step3Detail");
      const step4Detail = document.getElementById("step4Detail");
      const processLog = document.getElementById("processLog");

      // Variabel untuk menyimpan data
      let originalImageData = null;
      let encryptedCode = null;
      let imageWidth = 0;
      let imageHeight = 0;
      let originalFileSize = 0;
      let originalFileName = "";
      let originalFileType = "";

      // Event Listeners dengan touch support
      uploadArea.addEventListener("click", () => imageInput.click());
      uploadArea.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          imageInput.click();
        }
      });

      // Touch event untuk mobile
      let touchStartY = 0;
      uploadArea.addEventListener(
        "touchstart",
        (e) => {
          touchStartY = e.touches[0].clientY;
          uploadArea.style.borderColor = "#4fc3f7";
          uploadArea.style.background = "rgba(79, 195, 247, 0.2)";
        },
        { passive: true }
      );

      uploadArea.addEventListener(
        "touchend",
        (e) => {
          uploadArea.style.borderColor = "rgba(79, 195, 247, 0.5)";
          uploadArea.style.background = "rgba(0, 0, 0, 0.2)";

          // Prevent tap from triggering if user was scrolling
          const touchEndY = e.changedTouches[0].clientY;
          if (Math.abs(touchEndY - touchStartY) < 10) {
            imageInput.click();
          }
        },
        { passive: true }
      );

      uploadArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = "#4fc3f7";
        uploadArea.style.background = "rgba(79, 195, 247, 0.2)";
      });

      uploadArea.addEventListener("dragleave", () => {
        uploadArea.style.borderColor = "rgba(79, 195, 247, 0.5)";
        uploadArea.style.background = "rgba(0, 0, 0, 0.2)";
      });

      uploadArea.addEventListener("drop", (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = "rgba(79, 195, 247, 0.5)";
        uploadArea.style.background = "rgba(0, 0, 0, 0.2)";

        if (e.dataTransfer.files.length) {
          imageInput.files = e.dataTransfer.files;
          handleImageUpload(e.dataTransfer.files[0]);
        }
      });

      imageInput.addEventListener("change", (e) => {
        if (e.target.files.length) {
          handleImageUpload(e.target.files[0]);
        }
      });

      // Tambahkan event listeners untuk tombol
      encryptBtn.addEventListener("click", encryptImage);
      decryptBtn.addEventListener("click", decryptCode);
      resetBtn.addEventListener("click", resetAll);
      copyCodeBtn.addEventListener("click", copyCodeToClipboard);

      // Support untuk keyboard navigation
      encryptBtn.addEventListener("keypress", (e) => {
        if (e.key === "Enter") encryptImage();
      });

      decryptBtn.addEventListener("keypress", (e) => {
        if (e.key === "Enter") decryptCode();
      });

      // Fungsi untuk menambah log
      function addLog(message, type = "info") {
        const now = new Date();
        const timeString = now.toTimeString().split(" ")[0];
        const logEntry = document.createElement("div");
        logEntry.className = `log-entry ${type}`;
        logEntry.innerHTML = `<span class="log-time">${timeString}</span> ${message}`;

        processLog.prepend(logEntry);

        // Batasi jumlah log
        if (processLog.children.length > 15) {
          processLog.removeChild(processLog.lastChild);
        }

        // Scroll ke atas log
        processLog.scrollTop = 0;
      }

      // Fungsi untuk update step
      function updateStep(stepNumber, status) {
        const step = document.getElementById(`step${stepNumber}`);
        const allSteps = [step1, step2, step3, step4];

        // Reset semua step
        allSteps.forEach((s) => {
          s.classList.remove("active", "completed");
        });

        // Set step aktif
        if (status === "active") {
          step.classList.add("active");
          step.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else if (status === "completed") {
          step.classList.add("completed");

          // Aktifkan step berikutnya jika ada
          if (stepNumber < 4) {
            setTimeout(() => {
              updateStep(stepNumber + 1, "active");
            }, 500);
          }
        }
      }

      // Fungsi untuk menangani upload gambar
      function handleImageUpload(file) {
        // Reset proses
        resetProcess();
        updateStep(1, "active");

        // Validasi tipe file
        if (!file.type.match("image.*")) {
          addLog("❌ Error: Hanya file gambar yang diperbolehkan!", "error");
          updateStep(1, "completed");
          return;
        }

        // Validasi ukuran file (maks 2MB)
        if (file.size > 2 * 1024 * 1024) {
          addLog("❌ Error: Ukuran file maksimal 2MB!", "error");
          updateStep(1, "completed");
          return;
        }

        // Simpan info file
        originalFileName = file.name;
        originalFileSize = file.size;
        originalFileType = file.type;

        // Update info file
        fileInfo.classList.add("active");
        fileName.textContent = truncateText(file.name, 30);
        fileSize.textContent = formatFileSize(file.size);
        fileType.textContent = file.type.split("/")[1].toUpperCase();

        // Update step detail
        step1Detail.textContent = `File: ${truncateText(
          file.name,
          20
        )} (${formatFileSize(file.size)})`;

        addLog(
          `📁 Mengunggah file: ${file.name} (${formatFileSize(file.size)})`,
          "info"
        );

        // Baca gambar
        const reader = new FileReader();
        reader.onload = function (e) {
          originalImageData = e.target.result;

          // Update step
          updateStep(1, "completed");
          updateStep(2, "active");

          // Buat objek Image untuk mendapatkan dimensi
          const img = new Image();
          img.onload = function () {
            imageWidth = img.width;
            imageHeight = img.height;
            fileDimensions.textContent = `${img.width} × ${img.height}px`;

            // Update step detail
            step2Detail.textContent = `Resolusi: ${img.width}×${img.height}px`;

            addLog(
              `✅ Gambar berhasil dimuat: ${img.width}×${img.height}px`,
              "success"
            );

            // Tampilkan gambar
            imagePreview.src = originalImageData;
            imagePreview.style.display = "block";
            imagePlaceholder.style.display = "none";

            // Reset output
            resetOutput();

            // Update step
            updateStep(2, "completed");

            addLog(
              "🎯 Gambar siap untuk dienkripsi. Masukkan kunci dan klik Enkripsi.",
              "info"
            );

            // Fokus ke input kunci untuk mobile
            if (window.innerWidth < 768) {
              setTimeout(() => encryptionKey.focus(), 300);
            }
          };

          img.onerror = function () {
            addLog(
              "❌ Error: Gagal memuat gambar. File mungkin rusak.",
              "error"
            );
            updateStep(2, "completed");
          };

          img.src = originalImageData;
        };

        reader.onerror = function () {
          addLog("❌ Error: Gagal membaca file.", "error");
          updateStep(1, "completed");
        };

        reader.readAsDataURL(file);
      }

      // Fungsi untuk mengenkripsi gambar menjadi kode
      function encryptImage() {
        if (!originalImageData) {
          addLog("❌ Error: Silakan unggah gambar terlebih dahulu!", "error");
          vibrate();
          return;
        }

        const key = encryptionKey.value.trim();
        if (key.length < 6) {
          addLog("❌ Error: Kunci harus minimal 6 karakter!", "error");
          vibrate();
          return;
        }

        // Reset proses
        resetProcess();
        updateStep(1, "completed");
        updateStep(2, "completed");
        updateStep(3, "active");

        addLog("🔒 Memulai proses enkripsi...", "info");
        addLog(`🔑 Menggunakan kunci: "${key.substring(0, 3)}..."`, "info");

        // Simpan kunci ke field dekripsi untuk kemudahan
        decryptKey.value = key;

        // Tampilkan loading di output
        codePlaceholder.style.display = "none";
        codeOutput.textContent = "Memproses enkripsi...";
        codeOutput.style.color = "#ff9800";

        // Disable tombol selama proses
        encryptBtn.disabled = true;

        // Proses enkripsi dengan delay untuk visualisasi
        setTimeout(() => {
          try {
            addLog("📊 Mengekstrak data base64 dari gambar...", "info");

            // Langkah 1: Ambil data Base64 dari Data URL
            const base64Data = originalImageData.split(",")[1];
            const base64Length = base64Data.length;

            step3Detail.textContent = `Data: ${formatFileSize(base64Length)}`;
            addLog(`📊 Data Base64: ${formatFileSize(base64Length)}`, "info");

            // Update step
            updateStep(3, "completed");
            updateStep(4, "active");

            setTimeout(() => {
              addLog("🔐 Menerapkan enkripsi XOR...", "info");

              // Langkah 2: Enkripsi dengan XOR sederhana
              const startTime = performance.now();
              encryptedCode = xorEncrypt(base64Data, key);
              const endTime = performance.now();
              const processTime = (endTime - startTime).toFixed(2);

              step4Detail.textContent = `Waktu: ${processTime}ms`;
              addLog(
                `⚡ Enkripsi XOR selesai dalam ${processTime}ms`,
                "success"
              );

              // Langkah 3: Tambahkan metadata
              const timestamp = new Date().getTime();
              const metadata = `${timestamp}|${imageWidth}|${imageHeight}|${originalFileType}|`;
              const finalCode = metadata + encryptedCode;

              // Hitung ukuran kode
              const codeSize = finalCode.length;
              const originalSize = base64Length;
              const sizeIncrease = (
                ((codeSize - originalSize) / originalSize) *
                100
              ).toFixed(1);

              addLog(
                `📈 Ukuran kode: ${formatFileSize(
                  codeSize
                )} (+${sizeIncrease}%)`,
                "info"
              );

              // Tampilkan kode
              displayCode(finalCode);

              // Aktifkan tombol salin
              copyCodeBtn.disabled = false;

              // Update step
              updateStep(4, "completed");

              addLog("✅ Enkripsi berhasil! Kode siap disalin.", "success");

              // Enable tombol kembali
              encryptBtn.disabled = false;

              // Feedback haptic untuk mobile
              vibrate("success");
            }, 800);
          } catch (error) {
            addLog(`❌ Error saat mengenkripsi: ${error.message}`, "error");
            updateStep(3, "completed");
            updateStep(4, "completed");
            encryptBtn.disabled = false;
            vibrate("error");
          }
        }, 500);
      }

      // Fungsi untuk mendekripsi kode menjadi gambar
      function decryptCode() {
        const key = decryptKey.value.trim();
        if (!key) {
          addLog("❌ Error: Masukkan kunci dekripsi terlebih dahulu!", "error");
          vibrate();
          return;
        }

        // Ambil kode dari tampilan
        let codeToDecrypt = "";
        if (encryptedCode) {
          codeToDecrypt = encryptedCode;
        } else {
          const text = codeOutput.textContent;
          if (text && text.includes("|")) {
            const parts = text.split("|");
            if (parts.length > 4) {
              codeToDecrypt = parts.slice(4).join("|");
            }
          } else if (text && !text.includes("Memproses")) {
            codeToDecrypt = text;
          }
        }

        if (!codeToDecrypt) {
          addLog("❌ Error: Tidak ada kode untuk didekripsi!", "error");
          vibrate();
          return;
        }

        // Reset proses untuk dekripsi
        resetProcess();
        updateStep(1, "completed");
        updateStep(2, "completed");
        updateStep(3, "active");

        addLog("🔓 Memulai proses dekripsi...", "info");
        addLog(`🔑 Menggunakan kunci: "${key.substring(0, 3)}..."`, "info");

        // Tampilkan loading
        decryptedPlaceholder.style.display = "none";
        decryptedImagePreview.style.display = "block";
        decryptedImagePreview.src =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIHN0cm9rZT0iIzRmYzNmNyIgc3Ryb2tlLXdpZHRoPSI4Ii8+PC9zdmc+";

        // Disable tombol selama proses
        decryptBtn.disabled = true;

        // Proses dekripsi dengan delay untuk visualisasi
        setTimeout(() => {
          try {
            addLog("📊 Memproses kode terenkripsi...", "info");

            step3Detail.textContent = `Memproses kode: ${formatFileSize(
              codeToDecrypt.length
            )}`;

            // Update step
            updateStep(3, "completed");
            updateStep(4, "active");

            setTimeout(() => {
              addLog("🔓 Menerapkan dekripsi XOR...", "info");

              // Dekripsi dengan XOR
              const startTime = performance.now();
              const decryptedBase64 = xorDecrypt(codeToDecrypt, key);
              const endTime = performance.now();
              const processTime = (endTime - startTime).toFixed(2);

              step4Detail.textContent = `Waktu: ${processTime}ms`;
              addLog(
                `⚡ Dekripsi XOR selesai dalam ${processTime}ms`,
                "success"
              );

              // Buat Data URL
              const mimeType = "image/png"; // Default ke PNG
              const dataUrl = `data:${mimeType};base64,${decryptedBase64}`;

              // Tampilkan gambar hasil dekripsi
              decryptedImagePreview.src = dataUrl;

              // Tes apakah gambar valid
              const testImg = new Image();
              testImg.onload = function () {
                addLog(
                  "✅ Dekripsi berhasil! Gambar telah dipulihkan.",
                  "success"
                );
                updateStep(4, "completed");
                decryptBtn.disabled = false;
                vibrate("success");
              };

              testImg.onerror = function () {
                addLog(
                  "❌ Error: Gambar hasil dekripsi rusak. Pastikan kunci benar.",
                  "error"
                );
                updateStep(4, "completed");
                decryptBtn.disabled = false;
                vibrate("error");
              };

              testImg.src = dataUrl;
            }, 800);
          } catch (error) {
            addLog(`❌ Error saat mendekripsi: ${error.message}`, "error");
            updateStep(3, "completed");
            updateStep(4, "completed");
            decryptBtn.disabled = false;
            vibrate("error");
          }
        }, 500);
      }

      // Fungsi enkripsi XOR sederhana
      function xorEncrypt(input, key) {
        let output = "";
        for (let i = 0; i < input.length; i++) {
          const charCode = input.charCodeAt(i) ^ key.charCodeAt(i % key.length);
          output += String.fromCharCode(charCode);
        }
        // Encode ke Base64 untuk membuatnya aman sebagai string
        return btoa(output);
      }

      // Fungsi dekripsi XOR (sama dengan enkripsi untuk XOR)
      function xorDecrypt(input, key) {
        // Decode dari Base64
        const decodedInput = atob(input);
        let output = "";
        for (let i = 0; i < decodedInput.length; i++) {
          const charCode =
            decodedInput.charCodeAt(i) ^ key.charCodeAt(i % key.length);
          output += String.fromCharCode(charCode);
        }
        return output;
      }

      // Fungsi untuk menampilkan kode
      function displayCode(code) {
        codePlaceholder.style.display = "none";

        // Format kode untuk tampilan
        const maxDisplayLength = window.innerWidth < 768 ? 300 : 500;
        let displayCode = code;
        if (code.length > maxDisplayLength) {
          displayCode = code.substring(0, maxDisplayLength) + "... [TRUNCATED]";
        }

        codeOutput.textContent = displayCode;
        codeOutput.style.color = "#00ff88";
      }

      // Fungsi untuk menyalin kode ke clipboard
      function copyCodeToClipboard() {
        let textToCopy = "";

        if (encryptedCode) {
          const fullCode = `${Date.now()}|${imageWidth}|${imageHeight}|${originalFileType}|${encryptedCode}`;
          textToCopy = fullCode;
        } else {
          const text = codeOutput.textContent;
          if (
            !text ||
            text.includes("Memproses") ||
            text.includes("TRUNCATED")
          ) {
            return;
          }
          textToCopy = text;
        }

        // Gunakan Clipboard API jika tersedia
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(textToCopy)
            .then(() => showCopySuccess())
            .catch((err) => {
              // Fallback untuk browser lama
              fallbackCopy(textToCopy);
            });
        } else {
          fallbackCopy(textToCopy);
        }

        function showCopySuccess() {
          addLog("📋 Kode berhasil disalin ke clipboard!", "success");

          // Feedback visual
          const originalText = copyCodeBtn.innerHTML;
          copyCodeBtn.innerHTML =
            '<i class="fas fa-check"></i> <span>Tersalin!</span>';
          copyCodeBtn.style.background =
            "linear-gradient(135deg, #2E7D32, #1B5E20)";

          setTimeout(() => {
            copyCodeBtn.innerHTML = originalText;
            copyCodeBtn.style.background =
              "linear-gradient(135deg, #4CAF50, #2E7D32)";
          }, 2000);

          vibrate("success");
        }

        function fallbackCopy(text) {
          const textArea = document.createElement("textarea");
          textArea.value = text;
          textArea.style.position = "fixed";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();

          try {
            document.execCommand("copy");
            showCopySuccess();
          } catch (err) {
            addLog(`❌ Gagal menyalin: ${err}`, "error");
          }

          document.body.removeChild(textArea);
        }
      }

      // Fungsi untuk mereset output
      function resetOutput() {
        codePlaceholder.style.display = "block";
        codeOutput.textContent = "";
        codeOutput.style.color = "#00ff88";
        encryptedCode = null;

        decryptedImagePreview.style.display = "none";
        decryptedPlaceholder.style.display = "block";

        copyCodeBtn.disabled = true;
      }

      // Fungsi untuk mereset proses
      function resetProcess() {
        [step1, step2, step3, step4].forEach((step) => {
          step.classList.remove("active", "completed");
        });

        [step1Detail, step2Detail, step3Detail, step4Detail].forEach(
          (detail) => {
            detail.textContent = "";
          }
        );
      }

      // Fungsi untuk mereset semua
      function resetAll() {
        // Reset input
        imageInput.value = "";
        imagePreview.style.display = "none";
        imagePlaceholder.style.display = "block";

        // Reset output
        resetOutput();

        // Reset info
        fileInfo.classList.remove("active");
        fileName.textContent = "-";
        fileSize.textContent = "-";
        fileDimensions.textContent = "-";
        fileType.textContent = "-";

        // Reset kunci
        encryptionKey.value = "";
        decryptKey.value = "";

        // Reset variabel
        originalImageData = null;
        imageWidth = 0;
        imageHeight = 0;
        originalFileSize = 0;
        originalFileName = "";
        originalFileType = "";

        // Reset proses
        resetProcess();

        // Reset log (tambah pesan reset)
        processLog.innerHTML = "";
        addLog("🔄 Sistem telah direset. Siap digunakan!", "info");

        // Enable semua tombol
        encryptBtn.disabled = false;
        decryptBtn.disabled = false;

        // Feedback
        vibrate();
      }

      // Fungsi untuk format ukuran file
      function formatFileSize(bytes) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
      }

      // Fungsi untuk memotong teks jika terlalu panjang
      function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength - 3) + "...";
      }

      // Fungsi untuk memberikan feedback haptic/vibrasi (jika didukung)
      function vibrate(type = "light") {
        if ("vibrate" in navigator) {
          if (type === "success") {
            navigator.vibrate([50, 50, 50]);
          } else if (type === "error") {
            navigator.vibrate([200, 100, 200]);
          } else {
            navigator.vibrate(50);
          }
        }
      }

      // Deteksi orientasi layar
      function handleOrientationChange() {
        if (window.innerHeight > window.innerWidth) {
          // Portrait mode
          document.body.style.padding = "10px 5px";
        } else {
          // Landscape mode
          document.body.style.padding = "5px 10px";
        }
      }

      // Tambahkan event listener untuk orientasi
      window.addEventListener("resize", handleOrientationChange);
      window.addEventListener("orientationchange", handleOrientationChange);

      // Inisialisasi
      resetAll();
      handleOrientationChange();
    </script>
  </body>
</html>
3
