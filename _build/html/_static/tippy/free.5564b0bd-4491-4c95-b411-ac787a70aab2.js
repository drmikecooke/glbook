selector_to_html = {"a[href=\"#ginzburg-landau-free-energy\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Ginzburg-Landau free energy<a class=\"headerlink\" href=\"#ginzburg-landau-free-energy\" title=\"Permalink to this heading\">#</a></h1><p>A gauge-invariant free energy with order parameter <span class=\"math notranslate nohighlight\">\\(\\Psi\\propto \\left&lt;\\psi_\\downarrow(\\mathbf x)\\psi_\\uparrow(\\mathbf x)\\right&gt;\\)</span> has the form:</p>", "a[href=\"#constant-order-parameter-psi\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Constant order parameter <span class=\"math notranslate nohighlight\">\\(\\Psi\\)</span><a class=\"headerlink\" href=\"#constant-order-parameter-psi\" title=\"Permalink to this heading\">#</a></h2><p>The easiest part is:</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
