import{_ as e,c as o,o as t,a5 as a}from"./chunks/framework.DYr1m8IC.js";const p=JSON.parse('{"title":"Navigating QGC Source Code","description":"","frontmatter":{},"headers":[],"relativePath":"en/qgc-dev-guide/navigating_source.md","filePath":"en/qgc-dev-guide/navigating_source.md"}'),r={name:"en/qgc-dev-guide/navigating_source.md"},i=a('<h1 id="navigating-qgc-source-code" tabindex="-1">Navigating QGC Source Code <a class="header-anchor" href="#navigating-qgc-source-code" aria-label="Permalink to &quot;Navigating QGC Source Code&quot;">​</a></h1><p>QGC is a large code base. With that it can be daunting to find what your are looking for in the source. Below are listed some tips to help you find what you are looking for.</p><h2 id="start-from-the-top-of-the-ui" tabindex="-1">Start from the top of the UI <a class="header-anchor" href="#start-from-the-top-of-the-ui" aria-label="Permalink to &quot;Start from the top of the UI&quot;">​</a></h2><p>The top level window Qml UI code is found in <code>MainRootWindow.qml</code>. You can start here and work your way down through the UI hierarchy till you find what you are looking for.</p><p>In this qml file you&#39;ll find things like:</p><ul><li>How the toolbar is created</li><li>How the top level views are created: Fly, Plan, ...</li></ul><h2 id="global-search" tabindex="-1">Global Search <a class="header-anchor" href="#global-search" aria-label="Permalink to &quot;Global Search&quot;">​</a></h2><p>The best way to find something is to find the UI which is closest to what you are looking for by doing text searches.</p><h3 id="example-find-the-source-for-the-gps-drop-down-in-the-toolbar" tabindex="-1">Example: Find the source for the GPS drop down in the toolbar <a class="header-anchor" href="#example-find-the-source-for-the-gps-drop-down-in-the-toolbar" aria-label="Permalink to &quot;Example: Find the source for the GPS drop down in the toolbar&quot;">​</a></h3><p>In the dropdown you see the words &quot;Vehicle GPS Status&quot;. Do a global search for those words. Make sure you are doing a case sensitive search. Also make sure you are matching whole words. It can also be helpful to exclude the <code>*.ts</code> translation files. Since they can lead to multiple results. If you do the search described here it will take you right to <code>GPSIndicatorPage.qml</code>. Some times a search may lead to many results in both qml and .cpp files. In this case limit the results to <code>*.qml</code> files.</p>',10),n=[i];function l(s,h,d,c,u,g){return t(),o("div",null,n)}const m=e(r,[["render",l]]);export{p as __pageData,m as default};