import{_ as a,o as n,c as s,R as p}from"./chunks/framework.2JVau0y1.js";const q=JSON.parse('{"title":"任务指令树","description":"","frontmatter":{},"headers":[],"relativePath":"zh/qgc-dev-guide/plan/MissionCommandTree.md","filePath":"zh/qgc-dev-guide/plan/MissionCommandTree.md"}'),e={name:"zh/qgc-dev-guide/plan/MissionCommandTree.md"},o=p(`<h1 id="任务指令树" tabindex="-1">任务指令树 <a class="header-anchor" href="#任务指令树" aria-label="Permalink to &quot;任务指令树&quot;">​</a></h1><p>QGC 创建用户界面，用于从 json 元数据的层次结构中动态编辑特定任务项命令。 此层次结构称为任务命令树。 这样，在添加新命令时，只能创建 json 元数据。</p><h2 id="为什么是一颗树" tabindex="-1">为什么是一颗树？ <a class="header-anchor" href="#为什么是一颗树" aria-label="Permalink to &quot;为什么是一颗树？&quot;">​</a></h2><p>需要该树以不同的方式处理不同固件和／或不同的车辆类型，以支持不同的命令。 最简单的例子是 mavlink 规范可能包含了并非所有固件都支持的命令参数。 或着命令参数仅对某些车辆类型有效。 此外，在某些情况下，GCS 可能会决定将某些命令参数在视图中对最终用户进行隐藏，因为它们过于复杂或导致可用性问题。</p><p>该树是MissionCommandTree类： <a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MissionCommandTree.cc" target="_blank" rel="noreferrer">MissionCommandTree.cc</a>, <a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MissionCommandTree.h" target="_blank" rel="noreferrer">MissionCommandTree.h</a></p><h3 id="树根目录" tabindex="-1">树根目录 <a class="header-anchor" href="#树根目录" aria-label="Permalink to &quot;树根目录&quot;">​</a></h3><p>树的根目录是与 mavlink 规范完全匹配的json元数据。</p><p>您可以在这里看到<code>MAV_CMD_NAV_WAYPOINT</code>根目录<a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoCommon.json#L27" target="_blank" rel="noreferrer">json</a>的示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>        {</span></span>
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
<span class="line"><span>        },</span></span></code></pre></div><p>注意：在现实中，基于此的信息应由 mavlink 本身提供，而不需要成为 GCS 的一部分。</p><h3 id="叶节点" tabindex="-1">叶节点 <a class="header-anchor" href="#叶节点" aria-label="Permalink to &quot;叶节点&quot;">​</a></h3><p>然后，叶节点提供元数据，这些元数据可以覆盖命令的值和/或从显示给用户的参数中删除参数。 完整的树层次结构是这样的：</p><ul><li>根－通用Mavlink <ul><li>特定的车辆类型－特定于车辆的通用规范</li><li>特定的硬件类型－每个固件类型有一个可选的叶节点（PX4/ArduPilot） <ul><li>特定的车辆类型－每个车辆类型有一个可选的叶节点（FW/MR/VTOL/Rover/Sub）</li></ul></li></ul></li></ul><p>注意：实际上，此替代功能应该是mavlink规格的一部分，并且应该可以从车辆中查询。</p><h3 id="从完整树中构建实例树" tabindex="-1">从完整树中构建实例树 <a class="header-anchor" href="#从完整树中构建实例树" aria-label="Permalink to &quot;从完整树中构建实例树&quot;">​</a></h3><p>由于 json 元数据提供了所有固件／车辆类型组合的信息，因此必须根据用于创建计划的固件和车辆类型来构建要使用的实际树。 这是通过一个进程调用“collapsing”的完整树到一个固件／车辆的特定树来完成的 (<a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MissionCommandTree.cc#L119" target="_blank" rel="noreferrer">code</a>)。</p><p>步骤如下：</p><ul><li>在实例树种添加根</li><li>将特定的车辆类型重写实例树</li><li>Apply the firmware type specific overrides to the instance tree</li><li>将特定的硬件／车辆类型重写实例树</li></ul><p>然后，生成的任务命令树将为平面项目编辑器构建UI。 实际上，它不仅用于此，还有许多其他地方可以帮助您了解有关特定命令 id 的更多信息。</p><h2 id="层次结构示例-mav-cmd-nav-waypoint" tabindex="-1">层次结构示例 <code>MAV_CMD_NAV_WAYPOINT</code> <a class="header-anchor" href="#层次结构示例-mav-cmd-nav-waypoint" aria-label="Permalink to &quot;层次结构示例 \`MAV_CMD_NAV_WAYPOINT\`&quot;">​</a></h2><p>让我们来看看<code>MAV_CMD_NAV_WAYPOINT</code>的示例层次结构。 根信息如上图所示。</p><h3 id="根-车辆类型的特定叶节点" tabindex="-1">根－车辆类型的特定叶节点 <a class="header-anchor" href="#根-车辆类型的特定叶节点" aria-label="Permalink to &quot;根－车辆类型的特定叶节点&quot;">​</a></h3><p>层次结构的下一个层级是通用的 mavlink，但只针对特定的车辆。 这里的Json文件：<a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoMultiRotor.json" target="_blank" rel="noreferrer">MR</a>, <a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoFixedWing.json" target="_blank" rel="noreferrer">FW</a>, <a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoRover.json" target="_blank" rel="noreferrer">ROVER</a>, <a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoSub.json" target="_blank" rel="noreferrer">Sub</a>, <a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MavCmdInfoVTOL.json" target="_blank" rel="noreferrer">VTOL</a>。 这个是重写（固定翼）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;:           16,</span></span>
<span class="line"><span>            &quot;comment&quot;:      &quot;MAV_CMD_NAV_WAYPOINT&quot;,</span></span>
<span class="line"><span>            &quot;paramRemove&quot;:  &quot;4&quot;</span></span>
<span class="line"><span>        },</span></span></code></pre></div><p>这样做是删除参数4的编辑 UI，固定翼没有使用航向（Yaw）参数。 由于这是根的叶节点，因此无论固件类型如何，这都适用于所有固定翼车辆。</p><h3 id="根-硬件类型的特定叶节点" tabindex="-1">根－硬件类型的特定叶节点 <a class="header-anchor" href="#根-硬件类型的特定叶节点" aria-label="Permalink to &quot;根－硬件类型的特定叶节点&quot;">​</a></h3><p>层次结构的下一层级是特定于固件类型但适用于所有车辆类型的替代。 再次让我们看看航点（Waypoint）覆盖：</p><p><a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/FirmwarePlugin/APM/MavCmdInfoCommon.json#L6" target="_blank" rel="noreferrer">ArduPilot</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;:           16,</span></span>
<span class="line"><span>            &quot;comment&quot;:      &quot;MAV_CMD_NAV_WAYPOINT&quot;,</span></span>
<span class="line"><span>            &quot;paramRemove&quot;:  &quot;2&quot;</span></span>
<span class="line"><span>        },</span></span></code></pre></div><p><a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/FirmwarePlugin/PX4/MavCmdInfoCommon.json#L7" target="_blank" rel="noreferrer">PX4</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;:           16,</span></span>
<span class="line"><span>            &quot;comment&quot;:      &quot;MAV_CMD_NAV_WAYPOINT&quot;,</span></span>
<span class="line"><span>            &quot;paramRemove&quot;:  &quot;2,3&quot;</span></span>
<span class="line"><span>        },</span></span></code></pre></div><p>您可以看到，对于两个固件参数参数2，即接受半径，从编辑 ui 中删除。 这是QGC的特性决定。 与指定值相比，使用固件通用接受半径会更加安全和容易。 因此，我们决定对用户隐藏它。</p><p>您还可以看到，对于 PX4 param3/PassThru，由于 PX 不支持它，因此已被删除。</p><h3 id="根-特定于固件的类型-特定于车辆类型的叶子节点" tabindex="-1">根－特定于固件的类型－特定于车辆类型的叶子节点 <a class="header-anchor" href="#根-特定于固件的类型-特定于车辆类型的叶子节点" aria-label="Permalink to &quot;根－特定于固件的类型－特定于车辆类型的叶子节点&quot;">​</a></h3><p>层次结构的最后一个级别既针对固件又针对车辆类型。</p><p><a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/FirmwarePlugin/APM/MavCmdInfoMultiRotor.json#L7" target="_blank" rel="noreferrer">ArduPilot/MR</a>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot;:           16,</span></span>
<span class="line"><span>            &quot;comment&quot;:      &quot;MAV_CMD_NAV_WAYPOINT&quot;,</span></span>
<span class="line"><span>            &quot;paramRemove&quot;:  &quot;2,3,4&quot;</span></span>
<span class="line"><span>        },</span></span></code></pre></div><p>在这里你可以看到，ArduPilot的多电机车辆参数2/3/4 Acceptance/PassThru/Yaw 已被移除。 例如，航向（Yaw）是因为不支持所以被移除。 由于此代码的工作原理的怪癖，您需要从较低级别重复重写。</p><h2 id="任务命令-ui-信息" tabindex="-1">任务命令 UI 信息 <a class="header-anchor" href="#任务命令-ui-信息" aria-label="Permalink to &quot;任务命令 UI 信息&quot;">​</a></h2><p>两个类定义与命令相关联的元数据：</p><ul><li>MissionCommandUIInfo－整个命令的元数据</li><li>MissionCmdParamInfo－命令中参数的元数据</li></ul><p>源中注释了支持 json 键的完整详细信息。</p><p><a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MissionCommandUIInfo.h#L82" target="_blank" rel="noreferrer">MissionCommandUIInfo</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/// 与任务命令关联的 UI 信息 （MAV_CMD）</span></span>
<span class="line"><span>///</span></span>
<span class="line"><span>///MissionCommandUIInfo用于自动为MAV_CMD生成编辑ui。 此对象还支持仅具有一组命</span></span>
<span class="line"><span>/// 令的部分信息的概念。 这用于创建基本命令信息的替代。 对于覆盖，只需从基本命</span></span>
<span class="line"><span>/// 令 ui 信息中指定要修改的键即可。 若要重写 ui 参数信息，必须指定整个MissionParamInfo对象。</span></span>
<span class="line"><span>///</span></span>
<span class="line"><span>/// MissionCommandUIInfo对象的json格式为：</span></span>
<span class="line"><span>///</span></span>
<span class="line"><span>/// 键值                   　类型    默认值     描述</span></span>
<span class="line"><span>/// id                      int     reauired    MAV_CMD id</span></span>
<span class="line"><span>/// comment                 string              用于添加评论</span></span>
<span class="line"><span>/// rawName                 string  required    MAV_CMD 枚举名称，仅应设置基础树信息</span></span>
<span class="line"><span>/// friendlyName            string  rawName     命令的简单描述</span></span>
<span class="line"><span>/// description             string              命令的详细描述</span></span>
<span class="line"><span>/// specifiesCoordinate     bool    false       true: 命令指定一个纬／经／高坐标</span></span>
<span class="line"><span>/// specifiesAltitudeOnly   bool    false       true: 命令仅指定高度（非坐标）</span></span>
<span class="line"><span>/// standaloneCoordinate    bool    false       true: 车辆无法通过与命令关联的坐标（例如：ROI）</span></span>
<span class="line"><span>/// isLandCommand           bool    false       true: 命令指定着陆指令 (LAND, VTOL_LAND, ...)</span></span>
<span class="line"><span>/// friendlyEdit            bool    false       true: 命令支持友好的编辑对话框，false：Command仅支持“显示所有值”样式的编辑</span></span>
<span class="line"><span>/// category                string  Advanced    该命令所属的类别</span></span>
<span class="line"><span>/// paramRemove             string              由替代使用以删除参数，例如：“ 1,3”将删除替代上的参数1和3</span></span>
<span class="line"><span>/// param[1-7]              object              MissionCommandParamInfo 对象</span></span>
<span class="line"><span>///</span></span></code></pre></div><p><a href="https://github.com/mavlink/qgroundcontrol/blob/master/src/MissionManager/MissionCommandUIInfo.h#L25" target="_blank" rel="noreferrer">MissionCmdParamInfo</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/// 与任务命令 （MAV_CMD） 参数关联的 UI 信息</span></span>
<span class="line"><span>///</span></span>
<span class="line"><span>/// MissionCommandParamInfo 用于自动为与 MAV_CMD 关联的参数生成编辑ui。</span></span>
<span class="line"><span>///</span></span>
<span class="line"><span>/// MissionCmdParamInfo 对象的 Json 文件格式为：</span></span>
<span class="line"><span>///　</span></span>
<span class="line"><span>/// 键值             类型    默认值     描述</span></span>
<span class="line"><span>/// label           string  required    文本字段标签</span></span>
<span class="line"><span>/// units           string              值的单位，应使用 FactMetaData Units 字符串以获得自动转换</span></span>
<span class="line"><span>/// default         double  0.0/NaN     默认参数值。 如果未指定默认值且 nanunchange==true，默认值为NaN。</span></span>
<span class="line"><span>/// decimalPlaces   int     7           显示值得小数位数</span></span>
<span class="line"><span>/// enumStrings     string              要在组合框中显示以供选择的字符串</span></span>
<span class="line"><span>/// enumValues      string              与每个枚举字符串关联的值</span></span>
<span class="line"><span>/// nanUnchanged    bool    false       True: 值可以设置为NaN表示信号不变</span></span></code></pre></div>`,46),l=[o];function t(i,r,c,u,d,m){return n(),s("div",null,l)}const g=a(e,[["render",t]]);export{q as __pageData,g as default};
