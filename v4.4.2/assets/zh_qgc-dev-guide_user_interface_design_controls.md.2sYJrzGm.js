import{_ as e,o as t,c as i,R as a}from"./chunks/framework.8ye2JeXP.js";const C=JSON.parse('{"title":"用户界面控件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/qgc-dev-guide/user_interface_design/controls.md","filePath":"zh/qgc-dev-guide/user_interface_design/controls.md"}'),l={name:"zh/qgc-dev-guide/user_interface_design/controls.md"},o=a('<h1 id="用户界面控件" tabindex="-1">用户界面控件 <a class="header-anchor" href="#用户界面控件" aria-label="Permalink to &quot;用户界面控件&quot;">​</a></h1><p>QGC提供了一组用于构建用户界面的基本控件。 一般来说，它们往往是Qt支持的基本QML控件上方的薄层，Qt控件支持QGC调色板。 In general they tend to be thin layers above the base QML Controls supported by Qt which respect the QGC color palette.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import QGroundControl.Controls 1.0</span></span></code></pre></div><h2 id="qt控件" tabindex="-1">Qt控件 <a class="header-anchor" href="#qt控件" aria-label="Permalink to &quot;Qt控件&quot;">​</a></h2><p>以下控件是标准Qt QML控件的QGC变体。 除了使用QGC调色板绘制。它还们提供与相应Qt控件相同的功能， They provide the same functionality as the corresponding Qt controls except for the fact that they are drawn using the QGC palette.</p><ul><li>QGCButton</li><li>QGCCheckBox</li><li>QGCColoredImage</li><li>QGCComboBox</li><li>QGCFlickable</li><li>QGCLabel</li><li>QGCMovableItem</li><li>QGCRadioButton</li><li>QGCSlider</li><li>QGCTextField</li></ul><h2 id="qgc-控件" tabindex="-1">QGC 控件 <a class="header-anchor" href="#qgc-控件" aria-label="Permalink to &quot;QGC 控件&quot;">​</a></h2><p>这些自定义控件是QGC独有的，用于创建标准UI元素。</p><ul><li>DropButton - RoundButton，单击时会删除一组选项。 示例是平面视图中的同步按钮。 Example is Sync button in Plan view.</li><li>ExclusiveGroupItem - 用于支持QML ExclusiveGroup 概念的自定义控制的基础项目。</li><li>QGCView - Base control for all top level views in the system. QGCView - 系统中所有顶级视图的基本控件。 提供对FactPanels的支持并显示QGCViewDialogs和QGCViewMessages。</li><li>QGC View对话框 - 从QGC视图右侧弹出的对话框。 您可以指定对话框的接受/拒绝按钮以及对话框内容。 使用示例是当您单击某个参数并显示值编辑器对话框时。 You can specific the accept/reject buttons for the dialog as well as the dialog contents. Example usage is when you click on a parameter and it brings up the value editor dialog.</li><li>QGCViewMessage - QGCViewDialog的简化版本，允许您指定按钮和简单的文本消息。</li><li>QGCViewPanel - QGCView内部的主要视图内容。</li><li>RoundButton - 一个圆形按钮控件，它使用图像作为其内部内容。</li><li>SetupPage - 所有安装载具组件页面的基本控件。 提供标题，说明和组件页面内容区域。 Provides a title, description and component page contents area.</li></ul>',9),n=[o];function s(r,c,d,p,h,u){return t(),i("div",null,n)}const g=e(l,[["render",s]]);export{C as __pageData,g as default};