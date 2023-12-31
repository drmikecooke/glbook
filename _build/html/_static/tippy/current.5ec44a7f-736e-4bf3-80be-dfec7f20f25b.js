selector_to_html = {"a[href=\"#current\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Current<a class=\"headerlink\" href=\"#current\" title=\"Permalink to this heading\">#</a></h1><p>We remember that:</p>", "a[href=\"bib.html#id2\"]": "<dt class=\"label\" id=\"id2\"><span class=\"brackets\">ArovasWu19</span></dt><dd><p>Daniel Arovas and Congjun Wu. Lecture notes on superconductivity (a work in progress). 2019. URL: <a class=\"reference external\" href=\"https://courses.physics.ucsd.edu/2014/Spring/physics239/LECTURES/SUPERCONDUCTIVITY.pdf\">https://courses.physics.ucsd.edu/2014/Spring/physics239/LECTURES/SUPERCONDUCTIVITY.pdf</a>.</p></dd>"}
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
