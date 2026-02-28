// Initialize
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Check dependencies
        const missingDeps = [];
        if (typeof marked === 'undefined') missingDeps.push('marked');
        if (typeof mermaid === 'undefined') missingDeps.push('mermaid');
        if (typeof hljs === 'undefined') missingDeps.push('highlight.js');

        if (missingDeps.length > 0) {
            throw new Error(`Critical libraries failed to load: ${missingDeps.join(', ')}. Please check your internet connection or CDN availability.`);
        }

        // Check data
        if (typeof docData === 'undefined') {
            throw new Error('Documentation data (js/data.js) failed to load. Check file paths and console for syntax errors.');
        }

        renderSidebar();

        // Check URL params for initial page
        const params = new URLSearchParams(window.location.search);
        const page = params.get('page');
        const group = params.get('group');

        if (page && group) {
            loadPage(group, page);
        } else {
            // Default to Home (Ana_Sayfa) or first available
            loadPage('yatirimci_ozeti', 'Neden_Yapay_Zeka_MRP');
        }

        // Initialize Mermaid
        mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose'
        });

    } catch (e) {
        console.error('Initialization Error:', e);
        const main = document.getElementById('doc-main');
        if (main) {
            main.innerHTML = `
                <div style="color: #721c24; background-color: #f8d7da; border: 1px solid #f5c6cb; padding: 20px; border-radius: 5px; margin: 20px;">
                    <h3>⚠️ System Error</h3>
                    <p>The documentation failed to load properly.</p>
                    <pre style="background: rgba(0,0,0,0.05); padding: 10px; border-radius: 3px;">${e.message}</pre>
                    <p>Check the browser console (F12) for more details.</p>
                </div>
            `;
        }
    }
});



function toggleSidebar() {
    document.getElementById('doc-sidebar').classList.toggle('open');
}

// Sidebar Rendering
function renderSidebar() {
    const navContainer = document.getElementById('nav-container');
    navContainer.innerHTML = '';

    const groups = {
        'yatirimci_ozeti': 'Yatırımcı Vizyonu',
        'yapay_zeka_teknolojileri': 'Kullanılan AI Teknolojileri',
        'sistem_ozellikleri': 'Öne Çıkan Özellikler'
    };

    for (const [key, label] of Object.entries(groups)) {
        if (docData[key] && Object.keys(docData[key]).length > 0) {
            const groupDiv = document.createElement('div');
            groupDiv.innerHTML = `<div class="nav-group-title">${label}</div>`;

            Object.keys(docData[key]).sort().forEach(filename => {
                const item = document.createElement('a');
                item.className = 'nav-item';
                item.textContent = filename.replace(/_/g, ' ');
                item.onclick = () => loadPage(key, filename);
                item.dataset.group = key;
                item.dataset.page = filename;
                groupDiv.appendChild(item);
            });

            navContainer.appendChild(groupDiv);
        }
    }
}

// Page Loading
function loadPage(group, filename) {
    const content = docData[group][filename];
    if (!content) return;

    // Update active state
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const activeItem = document.querySelector(`.nav-item[data-group="${group}"][data-page="${filename}"]`);
    if (activeItem) activeItem.classList.add('active');

    // Close sidebar on mobile
    document.getElementById('doc-sidebar').classList.remove('open');


    // Convert Markdown to HTML
    const contentDiv = document.getElementById('doc-content');
    contentDiv.innerHTML = marked.parse(content);

    // Render Mermaid
    renderMermaid();

    // Convert ```math blocks to MathJax format
    renderMathBlocks();

    // Highlight Code
    hljs.highlightAll();

    // Render Math formulas (MathJax)
    if (typeof MathJax !== 'undefined' && MathJax.typeset) {
        MathJax.typeset();
    }

    // Scroll to top
    document.getElementById('doc-main').scrollTop = 0;
}

// Convert code blocks with class 'language-math' to MathJax display format
function renderMathBlocks() {
    const mathBlocks = document.querySelectorAll('pre code.language-math');
    mathBlocks.forEach(block => {
        const pre = block.parentElement;
        const mathDiv = document.createElement('div');
        mathDiv.className = 'math-display';
        mathDiv.innerHTML = '$$' + block.textContent + '$$';
        pre.replaceWith(mathDiv);
    });
}


async function renderMermaid() {
    const mermaidDivs = document.querySelectorAll('.mermaid');

    // First pass: Convert code blocks to div.mermaid if they haven't been processed
    const codeBlocks = document.querySelectorAll('pre code.language-mermaid');
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        const div = document.createElement('div');
        div.className = 'mermaid';

        let content = block.textContent;
        div.textContent = content;
        pre.replaceWith(div);
    });

    // Run mermaid on all .mermaid elements
    try {
        await mermaid.run({
            nodes: document.querySelectorAll('.mermaid')
        });
    } catch (e) {
        console.error('Mermaid error:', e);
        // Fallback for failed diagrams
        document.querySelectorAll('.mermaid[data-processed="true"]').forEach(div => {
            if (div.innerHTML === '') {
                div.innerHTML = `<div style="color:red; border:1px solid red; padding:10px;">
                    Failed to render flowchart. Syntax error or incompatibility.
                    <pre>${div.textContent}</pre>
                </div>`;
            }
        });
    }
}
