import{_ as l,a as i}from"./chunks/mocklink_connected.7fW1gURX.js";import{_ as o,o as e,c as t,R as a}from"./chunks/framework.Th7bWEIV.js";const f=JSON.parse('{"title":"模拟链接","description":"","frontmatter":{},"headers":[],"relativePath":"zh/qgc-dev-guide/tools/mock_link.md","filePath":"zh/qgc-dev-guide/tools/mock_link.md"}'),r={name:"zh/qgc-dev-guide/tools/mock_link.md"},c=a('<h1 id="模拟链接" tabindex="-1">模拟链接 <a class="header-anchor" href="#模拟链接" aria-label="Permalink to &quot;模拟链接&quot;">​</a></h1><p>Mock Link允许您在QGroundControl调试版本中创建和停止指向多个模拟（模拟）载具的链接。</p><p>模拟不支持飞行，但允许轻松测试：</p><ul><li>任务上传/下载</li><li>查看和更改参数</li><li>测试大多数设置页面</li><li>多个载具用户界面</li></ul><p>对于任务上载/下载的单元测试错误情况尤其有用。</p><h2 id="使用mock-link" tabindex="-1">使用Mock Link <a class="header-anchor" href="#使用mock-link" aria-label="Permalink to &quot;使用Mock Link&quot;">​</a></h2><p>为了使用Mock Link：</p><ol><li><p>Create a debug build by <a href="https://github.com/mavlink/qgroundcontrol#supported-builds" target="_blank" rel="noreferrer">building the source</a>.</p></li><li><p>通过选择顶部工具栏中的“应用程序设置”图标，然后选择侧栏中的“模拟链接”来访问“模拟链接”：</p><p><img src="'+l+'" alt=""></p></li><li><p>可以单击面板中的按钮以创建相关类型的车辆链接。</p><ul><li>每次单击按钮时，都会创建一个新连接。</li><li>当存在多个连接时，将显示多车辆UI。 <img src="'+i+'" alt=""></li></ul><p><img src="'+i+'" alt=""></p></li><li><p>单击停止一个模拟链接以停止当前活动的车辆。</p></li></ol><p>然后使用模拟链接或多或少与使用任何其他载具相同，只是模拟不允许飞行。</p>',9),n=[c];function p(s,_,d,k,m,u){return e(),t("div",null,n)}const b=o(r,[["render",p]]);export{f as __pageData,b as default};