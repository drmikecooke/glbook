selector_to_html = {"a[href=\"#critical-applied-magnetic-field\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Critical applied magnetic field<a class=\"headerlink\" href=\"#critical-applied-magnetic-field\" title=\"Permalink to this heading\">#</a></h2><p>There is no possibility of coexistence of a magnetic field with a constant non-zero order parameter \u2014 the two fields have to interact and come to a non-constant compromise over a distance of order <span class=\"math notranslate nohighlight\">\\(\\lambda_L\\)</span>. The (free) energy density of a constant magnetic field is <span class=\"math notranslate nohighlight\">\\(\\mathbf B^2/8\\pi\\)</span>.</p><p>Maxwell\u2019s equations in matter are traditionally posed in terms of applied fields <span class=\"math notranslate nohighlight\">\\(\\mathbf{H,D}\\)</span>, and local fields, <span class=\"math notranslate nohighlight\">\\(\\mathbf{B,E}\\)</span>, that are the response to the applied fields. Concentrating on the magnetic behaviour, the differential of the free energy density <span class=\"math notranslate nohighlight\">\\(f\\)</span> is composed as:</p>", "a[href=\"#gibbs-free-energy\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Gibbs free energy<a class=\"headerlink\" href=\"#gibbs-free-energy\" title=\"Permalink to this heading\">#</a></h1><h2>Critical applied magnetic field<a class=\"headerlink\" href=\"#critical-applied-magnetic-field\" title=\"Permalink to this heading\">#</a></h2><p>There is no possibility of coexistence of a magnetic field with a constant non-zero order parameter \u2014 the two fields have to interact and come to a non-constant compromise over a distance of order <span class=\"math notranslate nohighlight\">\\(\\lambda_L\\)</span>. The (free) energy density of a constant magnetic field is <span class=\"math notranslate nohighlight\">\\(\\mathbf B^2/8\\pi\\)</span>.</p><p>Maxwell\u2019s equations in matter are traditionally posed in terms of applied fields <span class=\"math notranslate nohighlight\">\\(\\mathbf{H,D}\\)</span>, and local fields, <span class=\"math notranslate nohighlight\">\\(\\mathbf{B,E}\\)</span>, that are the response to the applied fields. Concentrating on the magnetic behaviour, the differential of the free energy density <span class=\"math notranslate nohighlight\">\\(f\\)</span> is composed as:</p>"}
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
