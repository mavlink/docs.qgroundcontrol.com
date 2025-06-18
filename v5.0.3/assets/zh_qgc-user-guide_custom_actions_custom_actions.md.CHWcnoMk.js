import{_ as n,c as s,o as p,ag as t}from"./chunks/framework.v43S21bq.js";const m=JSON.parse('{"title":"自定义 Mavlink 动作","description":"","frontmatter":{},"headers":[],"relativePath":"zh/qgc-user-guide/custom_actions/custom_actions.md","filePath":"zh/qgc-user-guide/custom_actions/custom_actions.md"}'),i={name:"zh/qgc-user-guide/custom_actions/custom_actions.md"};function o(l,a,e,c,u,r){return p(),s("div",null,a[0]||(a[0]=[t(`<h1 id="自定义-mavlink-动作" tabindex="-1">自定义 Mavlink 动作 <a class="header-anchor" href="#自定义-mavlink-动作" aria-label="Permalink to &quot;自定义 Mavlink 动作&quot;">​</a></h1><p>飞行视图和操纵杆都支持对正在运行的载具执行任意的MAVLink命令的功能。 在飞行视图中，这些将会显示在工具条行动列表中。 通过操纵杆，你可以将命令分配给按钮按下操作。</p><h2 id="mavlink-动作文件" tabindex="-1">Mavlink 动作文件 <a class="header-anchor" href="#mavlink-动作文件" aria-label="Permalink to &quot;Mavlink 动作文件&quot;">​</a></h2><p>在 JSON 文件中定义了可用的动作。 该文件的格式如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;version&quot;:    1,</span></span>
<span class="line"><span>    &quot;fileType&quot;:   &quot;MavlinkActions&quot;,</span></span>
<span class="line"><span>    &quot;actions&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;label&quot;:        &quot;First Mavlink Command&quot;,</span></span>
<span class="line"><span>            &quot;description&quot;:  &quot;This is the first command&quot;,</span></span>
<span class="line"><span>            &quot;mavCmd&quot;:       10,</span></span>
<span class="line"><span>            &quot;compId&quot;:       100,</span></span>
<span class="line"><span>            &quot;param1&quot;:       1,</span></span>
<span class="line"><span>            &quot;param2&quot;:       2,</span></span>
<span class="line"><span>            ...</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;label&quot;:        &quot;Second Mavlink Command&quot;,</span></span>
<span class="line"><span>            &quot;description&quot;:  &quot;This is the second command&quot;,</span></span>
<span class="line"><span>            &quot;mavCmd&quot;:       20,</span></span>
<span class="line"><span>            ...</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>字段：</p><ul><li>actions (必填) - 每个命令一个 json 对象数组</li><li>label (必填) - 命令的用户可见简短描述。 这被用作飞行视图 - 操作命令列表中的按钮文本。 对于操纵杆，这是您从下拉菜单中选择的命令。 对于操纵杆，请确保您的名字与内置名称不冲突。</li><li>description (必填) - 这是Fly View 中使用的命令的较长描述 - 动作列表。 操纵杆并不会使用这个字段。</li><li>mavCmd (必填) - 你想要发送的 mavlink 命令的命令ID。</li><li>compId (可选) - 你想要将命令发送到哪里的组件id。 如果未指定<code>MAV_COMP_ID_AUTOPILOT1</code>，则使用它。</li><li>param1 到 param7 (可选) - 命令的参数。 未指定的参数将默认为0.0</li></ul><p>Mavlink 操作文件应该位于QGC 保存位置的MavlinkAction目录。 例如，在 Linux 上，它是 &quot;~/Documents/QGroundControl/MavlinkActions&quot; 或 &quot;~/Documents/QGroundControlDaily/MavlinkActions&quot; 。 飞行视图和操纵杆都可以有自己的自定义操作文件。</p><p>当你启动QGC时，如果这些文件存在，它将加载这些文件，并使相关命令可供使用。</p>`,9)]))}const q=n(i,[["render",o]]);export{m as __pageData,q as default};
