selector_to_html = {"a[href=\"#flux\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Flux<a class=\"headerlink\" href=\"#flux\" title=\"Permalink to this heading\">#</a></h1><p>In the London theory, the magnetic flux is quantized in units of <span class=\"math notranslate nohighlight\">\\(\\phi_L=hc/e^*\\)</span>.</p>"}
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
