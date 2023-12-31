selector_to_html = {"a[href=\"#plots-with-varying-kappa\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Plots with varying <span class=\"math notranslate nohighlight\">\\(\\kappa\\)</span><a class=\"headerlink\" href=\"#plots-with-varying-kappa\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#domain-walls\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Domain walls<a class=\"headerlink\" href=\"#domain-walls\" title=\"Permalink to this heading\">#</a></h1><h2>Plots with varying <span class=\"math notranslate nohighlight\">\\(\\kappa\\)</span><a class=\"headerlink\" href=\"#plots-with-varying-kappa\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#delta-version-arovas\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"math notranslate nohighlight\">\\(\\delta\\)</span> version [Arovas]<a class=\"headerlink\" href=\"#delta-version-arovas\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#domain-wall-energy\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Domain wall energy<a class=\"headerlink\" href=\"#domain-wall-energy\" title=\"Permalink to this heading\">#</a></h2><h3><span class=\"math notranslate nohighlight\">\\(\\delta\\)</span> version [Arovas]<a class=\"headerlink\" href=\"#delta-version-arovas\" title=\"Permalink to this heading\">#</a></h3>", "a[href=\"#free-energy-version-dg\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Free energy version [dg]<a class=\"headerlink\" href=\"#free-energy-version-dg\" title=\"Permalink to this heading\">#</a></h3><p>Not sure why this doesn\u2019t give the same answer, although the shape is similar, but with scale and offset shifts. This needs investigation \u2026 probably by following through the theory, when I have time.</p>"}
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
