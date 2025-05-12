import{_ as n,c as s,o as e,ag as p}from"./chunks/framework.BudlMBKT.js";const m=JSON.parse('{"title":"任务命令树","description":"","frontmatter":{},"headers":[],"relativePath":"zh/qgc-dev-guide/plan/mission_command_tree.md","filePath":"zh/qgc-dev-guide/plan/mission_command_tree.md"}'),o={name:"zh/qgc-dev-guide/plan/mission_command_tree.md"};function t(l,a,i,r,c,u){return e(),s("div",null,a[0]||(a[0]=[p(`<h1 id="任务命令树" tabindex="-1">任务命令树 <a class="header-anchor" href="#任务命令树" aria-label="Permalink to &quot;任务命令树&quot;">​</a></h1><p>QGC 创建用户界面，动态地从json 元数据层次编辑特定的任务项命令。 此层次结构称为任务命令树。 这种方式只能在添加新命令时创建 json 元数据。</p><h2 id="为什么是树型结构" tabindex="-1">为什么是树型结构？ <a class="header-anchor" href="#为什么是树型结构" aria-label="Permalink to &quot;为什么是树型结构？&quot;">​</a></h2><p>不同的固件支持不同的命令，以及/或者不同类型的车辆以不同的方式支持不同的命令，因此需要使用树形结构来处理这些问题。 最简单的例子是 mavlink 规范可能包含了并非所有固件都支持的命令参数。 或仅适用于某些类型载具的命令参数。 此外，在某些情况下，地面控制站可能会决定将某些命令参数在视图中对最终用户进行隐藏，因为它们过于复杂或导致可用性问题。</p><p>该树是 MissionCommandTree 类：<a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MissionCommandTree.cc" target="_blank" rel="noreferrer">MissionCommandTree.cc</a>, <a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MissionCommandTree.h" target="_blank" rel="noreferrer">MissionCommandTree.h</a></p><h3 id="树根目录" tabindex="-1">树根目录 <a class="header-anchor" href="#树根目录" aria-label="Permalink to &quot;树根目录&quot;">​</a></h3><p>树的根目录是与 mavlink 规范完全匹配的json元数据。</p><p>下面是 MAV_CMD_NAV_WAYPOINT 的根 <a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoCommon.json#L27" target="_blank" rel="noreferrer">json</a> 示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;:                   16,</span></span>
<span class="line"><span>            &quot;rawName&quot;:              &quot;MAV_CMD_NAV_WAYPOINT&quot;,</span></span>
<span class="line"><span>            &quot;friendlyName&quot;:         &quot;Waypoint&quot;,</span></span>
<span class="line"><span>            &quot;description&quot;:          &quot;Travel to a position in 3D space.&quot;,</span></span>
<span class="line"><span>            &quot;specifiesCoordinate&quot;:  true,</span></span>
<span class="line"><span>            &quot;friendlyEdit&quot;:         true,</span></span>
<span class="line"><span>            &quot;category&quot;:             &quot;Basic&quot;,</span></span>
<span class="line"><span>            &quot;param1&quot;: {</span></span>
<span class="line"><span>                &quot;label&quot;:            &quot;Hold&quot;,</span></span>
<span class="line"><span>                &quot;units&quot;:            &quot;secs&quot;,</span></span>
<span class="line"><span>                &quot;default&quot;:          0,</span></span>
<span class="line"><span>                &quot;decimalPlaces&quot;:    0</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &quot;param2&quot;: {</span></span>
<span class="line"><span>                &quot;label&quot;:            &quot;Acceptance&quot;,</span></span>
<span class="line"><span>                &quot;units&quot;:            &quot;m&quot;,</span></span>
<span class="line"><span>                &quot;default&quot;:          3,</span></span>
<span class="line"><span>                &quot;decimalPlaces&quot;:    2</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &quot;param3&quot;: {</span></span>
<span class="line"><span>                &quot;label&quot;:            &quot;PassThru&quot;,</span></span>
<span class="line"><span>                &quot;units&quot;:            &quot;m&quot;,</span></span>
<span class="line"><span>                &quot;default&quot;:          0,</span></span>
<span class="line"><span>                &quot;decimalPlaces&quot;:    2</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &quot;param4&quot;: {</span></span>
<span class="line"><span>                &quot;label&quot;:            &quot;Yaw&quot;,</span></span>
<span class="line"><span>                &quot;units&quot;:            &quot;deg&quot;,</span></span>
<span class="line"><span>                &quot;nanUnchanged&quot;:     true,</span></span>
<span class="line"><span>                &quot;default&quot;:          null,</span></span>
<span class="line"><span>                &quot;decimalPlaces&quot;:    2</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },</span></span></code></pre></div><p>Note: In reality this based information should be provided by mavlink itself and not needed to be part of a GCS.</p><h3 id="leaf-nodes" tabindex="-1">Leaf Nodes <a class="header-anchor" href="#leaf-nodes" aria-label="Permalink to &quot;Leaf Nodes&quot;">​</a></h3><p>The leaf nodes then provides metadata which can override values for the command and/or remove parameters from display to the user. 完整的树层次结构是这样：</p><ul><li>根-通用Mavlink <ul><li>特定的载具类型－特定载具的通用规范</li><li>固件类型特定——每种固件类型的一个可选叶节点 (PX4/ArduPilot) <ul><li>特定载具型号——每种载具类型有一个可选的叶节点（固定翼/多旋翼/垂直起降飞行器（VTOL）/小车/潜艇）</li></ul></li></ul></li></ul><p>注意：实际上，此替代功能应该是mavlink规格的一部分，并且应该可以从载具中查询。</p><h3 id="从完整树中构建实例树" tabindex="-1">从完整树中构建实例树 <a class="header-anchor" href="#从完整树中构建实例树" aria-label="Permalink to &quot;从完整树中构建实例树&quot;">​</a></h3><p>由于json元数据提供了所有固件/载具类型组合的信息，实际使用的树必须建立在用于创建计划的固件和载具类型的基础上。 这是通过一个进程叫做“折叠”完整树到一个固件/载具特定树(<a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MissionCommandTree.cc#L119" target="_blank" rel="noreferrer">code</a>)来完成的。</p><p>步骤如下：</p><ul><li>将根添加到实例树</li><li>将特定的载具类型重写实例树</li><li>对实例树应用固件类型特定覆盖</li><li>对实例树应用固件/载具类型特定覆盖</li></ul><p>然后，生成的任务命令树将为平面项目编辑器构建UI。 实际上，它不仅用于此，还有许多其他地方可以帮助您了解有关特定命令 id 的更多信息。</p><h2 id="mav-cmd-nav-waypoint-示例层次结构" tabindex="-1"><code>MAV_CMD_NAV_WAYPOINT</code> 示例层次结构 <a class="header-anchor" href="#mav-cmd-nav-waypoint-示例层次结构" aria-label="Permalink to &quot;\`MAV_CMD_NAV_WAYPOINT\` 示例层次结构&quot;">​</a></h2><p>让我们来看看 <code>MAV_CMD_NAV_WAYPOINT</code> 的示例层次结构。 根信息如上图所示。</p><h3 id="根-载具类型特定叶节点" tabindex="-1">根-载具类型特定叶节点 <a class="header-anchor" href="#根-载具类型特定叶节点" aria-label="Permalink to &quot;根-载具类型特定叶节点&quot;">​</a></h3><p>层次结构的下一个层级是通用的 mavlink，但只针对特定的载具。 Json 文件在这里: <a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoMultiRotor.json" target="_blank" rel="noreferrer">多旋翼</a>，<a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoRover.json" target="_blank" rel="noreferrer">固定翼</a>，<a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoRover.json" target="_blank" rel="noreferrer">小车</a>，<a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoSub.json" target="_blank" rel="noreferrer">潜艇</a>， <a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoVTOL.json" target="_blank" rel="noreferrer">垂直起降飞行器（VTOL）</a>。 这里是重写 (固定Wings) (<a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoFixedWing.json#L7" target="_blank" rel="noreferrer">https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoFixedWing.json#L7</a>):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;:           16,</span></span>
<span class="line"><span>            &quot;comment&quot;:      &quot;MAV_CMD_NAV_WAYPOINT&quot;,</span></span>
<span class="line"><span>            &quot;paramRemove&quot;:  &quot;4&quot;</span></span>
<span class="line"><span>        },</span></span></code></pre></div><p>这样做是删除参数4的编辑界面，固定翼没有使用航向（Yaw）参数。 由于这是根的叶节点，因此无论固件类型如何，这都适用于所有固定翼载具。</p><h3 id="根-载具类型的特定叶节点" tabindex="-1">根－载具类型的特定叶节点 <a class="header-anchor" href="#根-载具类型的特定叶节点" aria-label="Permalink to &quot;根－载具类型的特定叶节点&quot;">​</a></h3><p>The next level of the hiearchy are overrides which are specific to a firmware type but apply to all vehicle types. 让我们再次看看航点重写功能：</p><p><a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/FirmwarePlugin/APM/MavCmdInfoCommon.json#L6" target="_blank" rel="noreferrer">ArduPilot</a>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;:           16,</span></span>
<span class="line"><span>            &quot;comment&quot;:      &quot;MAV_CMD_NAV_WAYPOINT&quot;,</span></span>
<span class="line"><span>            &quot;paramRemove&quot;:  &quot;2&quot;</span></span>
<span class="line"><span>        },</span></span></code></pre></div><p><a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/FirmwarePlugin/PX4/MavCmdInfoCommon.json#L7" target="_blank" rel="noreferrer">PX4</a>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;:           16,</span></span>
<span class="line"><span>            &quot;comment&quot;:      &quot;MAV_CMD_NAV_WAYPOINT&quot;,</span></span>
<span class="line"><span>            &quot;paramRemove&quot;:  &quot;2,3&quot;</span></span>
<span class="line"><span>        },</span></span></code></pre></div><p>您可以看到，对于两个固件参数参数2，即接受半径，从编辑 ui 中删除。 这是QGC的特性决定。 与指定值相比，使用固件通用接受半径会更加安全和容易。 因此，我们决定对用户隐藏它。</p><p>您还可以看到，对于 PX4 param3/PassThru，由于 PX 不支持它，因此已被删除。</p><h3 id="根-特定于固件的类型-特定于载具类型的叶子节点" tabindex="-1">根－特定于固件的类型－特定于载具类型的叶子节点 <a class="header-anchor" href="#根-特定于固件的类型-特定于载具类型的叶子节点" aria-label="Permalink to &quot;根－特定于固件的类型－特定于载具类型的叶子节点&quot;">​</a></h3><p>层次结构的最后一个级别既针对固件又针对载具类型。</p><p><a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/FirmwarePlugin/APM/MavCmdInfoMultiRotor.json#L7" target="_blank" rel="noreferrer">ArduPilot/MR</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;:           16,</span></span>
<span class="line"><span>            &quot;comment&quot;:      &quot;MAV_CMD_NAV_WAYPOINT&quot;,</span></span>
<span class="line"><span>            &quot;paramRemove&quot;:  &quot;2,3,4&quot;</span></span>
<span class="line"><span>        },</span></span></code></pre></div><p>在这里你可以看到，ArduPilot的多电机载具参数2/3/4 Acceptance/PassThru/Yaw 已被移除。 例如，航向（Yaw）是因为不支持所以被移除。 由于这个代码如何工作的问题，您需要从较低级别重复重写。</p><h2 id="任务命令界面信息" tabindex="-1">任务命令界面信息 <a class="header-anchor" href="#任务命令界面信息" aria-label="Permalink to &quot;任务命令界面信息&quot;">​</a></h2><p>两个类定义与命令相关联的元数据：</p><ul><li>MissionCommandUIInfo－整个命令的元数据</li><li>MissionCmdParamInfo－命令中参数的元数据</li></ul><p>源中注释了支持 json 键的完整详细信息。</p><p><a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MissionCommandUIInfo.h#L82" target="_blank" rel="noreferrer">任务指令信息</a>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/// 与任务指令（MAV_CMD）相关联的用户界面信息</span></span>
<span class="line"><span>///</span></span>
<span class="line"><span>/// MissionCommandUIInfo 用于为 MAV_CMD 自动生成编辑用户界面。</span></span>
<span class="line"><span>/// 此对象还支持仅针对指令拥有一组部分信息的概念。这用于创建对基本指令信息的覆盖。</span></span>
<span class="line"><span>/// 对于覆盖，只需指定你想要从基本指令用户界面信息中修改的键。</span></span>
<span class="line"><span>/// 要覆盖参数用户界面信息，你必须指定整个 MissionParamInfo 对象。</span></span>
<span class="line"><span>///</span></span>
<span class="line"><span>///  MissionCommandUIInfo 对象的 JSON 格式如下：</span></span>
<span class="line"><span>///</span></span>
<span class="line"><span>/// 键                      类型     默认值      描述</span></span>
<span class="line"><span>/// id                      int     必填项       MAV_CMD id</span></span>
<span class="line"><span>/// comment                 string              用于添加注释</span></span>
<span class="line"><span>/// rawName                 string  必填项       MAV_CMD 枚举名称，应仅在基本树信息中设置</span></span>
<span class="line"><span>/// friendlyName            string  rawName     指令的简短描述</span></span>
<span class="line"><span>/// description             string              指令的详细描述</span></span>
<span class="line"><span>/// specifiesCoordinate     bool    false       true: 指令指定经纬度 / 高度坐标</span></span>
<span class="line"><span>/// specifiesAltitudeOnly   bool    false       true: 指令仅指定高度（无坐标）</span></span>
<span class="line"><span>/// standaloneCoordinate    bool    false       true: 飞行器不会飞越与指令相关的坐标（例如：兴趣点（ROI））</span></span>
<span class="line"><span>/// isLandCommand           bool    false       true: 指令指定着陆指令（LAND、VTOL_LAND 等）</span></span>
<span class="line"><span>/// friendlyEdit            bool    false       true: 指令支持友好的编辑对话框，false：指令仅支持 “显示所有值” 样式的编辑</span></span>
<span class="line"><span>/// category                string  Advanced    此指令所属的类别</span></span>
<span class="line"><span>/// paramRemove             string              覆盖时用于移除参数，例如：“1,3” 将在覆盖时移除参数 1 和 3</span></span>
<span class="line"><span>/// param[1-7]              object              MissionCommandParamInfo 对象</span></span>
<span class="line"><span>///</span></span></code></pre></div><p><a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MissionCommandUIInfo.h#L25" target="_blank" rel="noreferrer">任务参数信息https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MissionCommandUIInfo.h#L25</a>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/// MissionCommandParamInfo 用于为与 MAV_CMD 相关的参数自动生成编辑用户界面。</span></span>
<span class="line"><span>///</span></span>
<span class="line"><span>/// MissionCommandParamInfo is used to automatically generate editing ui for a parameter associated with a MAV_CMD.</span></span>
<span class="line"><span>///</span></span>
<span class="line"><span>/// MissionCmdParamInfo 对象的 JSON 格式如下：</span></span>
<span class="line"><span>///</span></span>
<span class="line"><span>/// 键              类型    默认值       描述</span></span>
<span class="line"><span>/// label           string  必填项      文本字段的标签</span></span>
<span class="line"><span>/// units           string              值的单位，应使用 FactMetaData 单位字符串以实现自动转换translation</span></span>
<span class="line"><span>/// default         double  0.0/NaN     参数的默认值。如果未指定默认值且 nanUnchanged == true，则 defaultValue 为 NaN。</span></span>
<span class="line"><span>/// decimalPlaces   int     7           值要显示的小数位数</span></span>
<span class="line"><span>/// enumStrings     string              组合框中显示供选择的字符串</span></span>
<span class="line"><span>/// enumValues      string              与每个枚举字符串关联的值</span></span>
<span class="line"><span>/// nanUnchanged    bool    false       True: 值可设置为 NaN 以表示未更改</span></span></code></pre></div>`,46)]))}const h=n(o,[["render",t]]);export{m as __pageData,h as default};
