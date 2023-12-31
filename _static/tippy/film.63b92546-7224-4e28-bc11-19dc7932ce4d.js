selector_to_html = {"a[href=\"#varying-kappa\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Varying <span class=\"math notranslate nohighlight\">\\(\\kappa\\)</span><a class=\"headerlink\" href=\"#varying-kappa\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#thin-films\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Thin films<a class=\"headerlink\" href=\"#thin-films\" title=\"Permalink to this heading\">#</a></h1><p>We use the GL code to allow two surfaces as boundaries.</p>", "a[href=\"#varying-external-field\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Varying external field<a class=\"headerlink\" href=\"#varying-external-field\" title=\"Permalink to this heading\">#</a></h2><p>We note that with <span class=\"math notranslate nohighlight\">\\(b_0\\)</span> fields of 0.8 and above show a reluctance for <span class=\"math notranslate nohighlight\">\\(b\\)</span> to go to zero, because in \u201creality\u201d it doesn\u2019t, at least in the GL framework. The critical field is in fact <span class=\"math notranslate nohighlight\">\\(1/\\sqrt2\\)</span>.</p>"}
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
