selector_to_html = {"a[href=\"#meissner-effect-in-1d\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Meissner effect in 1D<a class=\"headerlink\" href=\"#meissner-effect-in-1d\" title=\"Permalink to this heading\">#</a></h1><p>Programs to solve the GL BVP with an applied field <span class=\"math notranslate nohighlight\">\\(b_0\\)</span> at <span class=\"math notranslate nohighlight\">\\(x=0\\)</span> of half infinite superconductor in region x&gt;0.</p><p>I hope the plots below demonstrate the sort of range of behaviors. You can play with them if you click on the rocket icon at the top and select \u201cLive code\u201d. You need to wait for the gray box above to report that the kernel is ready. The hidden code below with some initialization should automatically execute, but may add some extra delay. The status of this process can be seen by clicking on the triangle next to \u201cShow code cell source\u201d.</p>", "a[href=\"#varying-b-0\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Varying <span class=\"math notranslate nohighlight\">\\(b_0\\)</span><a class=\"headerlink\" href=\"#varying-b-0\" title=\"Permalink to this heading\">#</a></h2><p>We note that with <span class=\"math notranslate nohighlight\">\\(b_0\\)</span> fields of 0.8 and above show a reluctance for <span class=\"math notranslate nohighlight\">\\(b\\)</span> to go to zero, because in \u201creality\u201d it doesn\u2019t, at least in the GL framework. The critical field is in fact <span class=\"math notranslate nohighlight\">\\(1/\\sqrt2\\)</span>.</p>", "a[href=\"#varying-kappa\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Varying <span class=\"math notranslate nohighlight\">\\(\\kappa\\)</span><a class=\"headerlink\" href=\"#varying-kappa\" title=\"Permalink to this heading\">#</a></h2>"}
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
