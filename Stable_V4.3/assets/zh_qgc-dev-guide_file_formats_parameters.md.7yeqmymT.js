import{_ as e,o as a,c as t,R as i}from"./chunks/framework.2JVau0y1.js";const A=JSON.parse('{"title":"参数文件格式","description":"","frontmatter":{},"headers":[],"relativePath":"zh/qgc-dev-guide/file_formats/parameters.md","filePath":"zh/qgc-dev-guide/file_formats/parameters.md"}'),r={name:"zh/qgc-dev-guide/file_formats/parameters.md"},o=i(`<h1 id="参数文件格式" tabindex="-1">参数文件格式 <a class="header-anchor" href="#参数文件格式" aria-label="Permalink to &quot;参数文件格式&quot;">​</a></h1><pre><code># Onboard parameters for Vehicle 1
#
# # Vehicle-Id Component-Id Name Value Type
1   1   ACRO_LOCKING    0   2
1   1   ACRO_PITCH_RATE 180 4
1   1   ACRO_ROLL_RATE  180 4
1   1   ADSB_ENABLE 0   2
</code></pre><p>以上是具有四个参数的参数文件的示例。 该文件可以包含所需数量的参数。</p><p>评论之前是＃。</p><p>此标头：#MAV ID COMPONENT ID PARAM NAME VALUE描述每行的格式：</p><ul><li>Vehicle-Id Vehicle id(载具编号）</li><li>Component-Id（参数的组件编号）</li><li>Name参数名称</li><li>Value参数值</li><li>使用MAVLink MAV<em>PARAM_TYPE</em> *枚举值键入参数类型</li></ul><p>参数文件包含单个Vehicle的参数。 它可以包含该Vehicle中多个组件的参数。</p>`,7),_=[o];function l(n,c,s,d,p,m){return a(),t("div",null,_)}const f=e(r,[["render",l]]);export{A as __pageData,f as default};
