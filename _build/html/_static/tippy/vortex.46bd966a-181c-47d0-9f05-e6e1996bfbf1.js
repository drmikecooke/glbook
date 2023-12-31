selector_to_html = {"a[href=\"#vortex-solutions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Vortex solutions<a class=\"headerlink\" href=\"#vortex-solutions\" title=\"Permalink to this heading\">#</a></h1><p>We have set the boundary conditions so that the differential system does not blow up as the r limits tend to zero and infinity. The magnetic flux should be constant. One needs to remember the area is cylindrically symmetric, and given by:</p>"}
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
