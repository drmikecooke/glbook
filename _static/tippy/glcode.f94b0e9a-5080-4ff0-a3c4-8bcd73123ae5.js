selector_to_html = {"a[href=\"#basic-usage\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Basic usage<a class=\"headerlink\" href=\"#basic-usage\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#basic-code-for-1d-problems\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Basic code for 1D problems<a class=\"headerlink\" href=\"#basic-code-for-1d-problems\" title=\"Permalink to this heading\">#</a></h1><h2>Basic usage<a class=\"headerlink\" href=\"#basic-usage\" title=\"Permalink to this heading\">#</a></h2>"}
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
