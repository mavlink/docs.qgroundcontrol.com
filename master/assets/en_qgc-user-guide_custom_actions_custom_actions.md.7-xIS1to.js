import{_ as s,c as n,o as a,a5 as e}from"./chunks/framework.DYr1m8IC.js";const q=JSON.parse('{"title":"Custom Mavlink Action","description":"","frontmatter":{},"headers":[],"relativePath":"en/qgc-user-guide/custom_actions/custom_actions.md","filePath":"en/qgc-user-guide/custom_actions/custom_actions.md"}'),t={name:"en/qgc-user-guide/custom_actions/custom_actions.md"},o=e(`<h1 id="custom-mavlink-action" tabindex="-1">Custom Mavlink Action <a class="header-anchor" href="#custom-mavlink-action" aria-label="Permalink to &quot;Custom Mavlink Action&quot;">​</a></h1><p>Both the Fly View and Joysticks support the ability execute arbitrary mavlink commands to the active vehicle. In the Fly View these will show up in the Toolstrip Action list. With Joysticks you can assign then to button presses.</p><h2 id="mavlink-actions-file" tabindex="-1">Mavlink Actions File <a class="header-anchor" href="#mavlink-actions-file" aria-label="Permalink to &quot;Mavlink Actions File&quot;">​</a></h2><p>The actions available are defined in a JSON file. The format of that file is as follows:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;version&quot;:    1,</span></span>
<span class="line"><span>    &quot;fileType&quot;:   &quot;MavlinkActions&quot;,</span></span>
<span class="line"><span>    &quot;actions&quot;:</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;label&quot;:        &quot;First Command&quot;,</span></span>
<span class="line"><span>    &quot;description&quot;:  &quot;This is the first command&quot;,</span></span>
<span class="line"><span>    &quot;mavCmd&quot;:       10,</span></span>
<span class="line"><span>    &quot;compId&quot;:       100,</span></span>
<span class="line"><span>    &quot;param1&quot;:       1,</span></span>
<span class="line"><span>    &quot;param2&quot;:       2,</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;label&quot;:        &quot;Second Command&quot;,</span></span>
<span class="line"><span>    &quot;description&quot;:  &quot;This is the second command&quot;,</span></span>
<span class="line"><span>    &quot;mavCmd&quot;:       20,</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Fields:</p><ul><li>actions (required) - An array of json objects, one for each command</li><li>label (required) - The user visible short description for the command. This is used as the button text for the Fly View - Actions command list. For Joysticks, this is the command you select from the dropdown. For Joysticks, make sure your name doesn&#39;t conflict with the built in names.</li><li>description (required) - This is a longer description of the command used in the Fly View - Action list. This is not used by joysticks.</li><li>mavCmd (required) - The command id of the mavlink command you want to send.</li><li>compId (options) - The component id for where you want to send the command to. If not specified <code>MAV_COMP_ID_AUTOPILOT1</code> is used.</li><li>param1 thru param7 (optional) - The parameters for the command. Parameters which are not specified will default to 0.0</li></ul><p>Mavlink action files should be located in the MavlinkActions directory of the QGC save location. For example on Linux that would be <code>~/Documents/QGroundControl/MavlinkActions</code> or <code>~/Documents/QGroundControl Daily/MavlinkActions</code>. The Fly View and Joysticks can each have there own custom actions file.</p><p>When you start up QGC it will load these files if they exist and make the commands available for use.</p>`,9),i=[o];function l(c,p,u,r,d,m){return a(),n("div",null,i)}const f=s(t,[["render",l]]);export{q as __pageData,f as default};
