import{_ as i}from"./chunks/console.lK3uGLXc.js";import{_ as o,o as e,c as s,R as t}from"./chunks/framework.yLSnkIoJ.js";const F=JSON.parse('{"title":"Console Logging","description":"","frontmatter":{},"headers":[],"relativePath":"tr/qgc-user-guide/settings_view/console_logging.md","filePath":"tr/qgc-user-guide/settings_view/console_logging.md"}'),n={name:"tr/qgc-user-guide/settings_view/console_logging.md"},a=t('<h1 id="console-logging" tabindex="-1">Console Logging <a class="header-anchor" href="#console-logging" aria-label="Permalink to &quot;Console Logging&quot;">​</a></h1><p>The <em>Console</em> can be helpful tool for diagnosing <em>QGroundControl</em> problems. It can be found in <strong>SettingsView &gt; Console</strong>.</p><p><img src="'+i+`" alt="Console logging"></p><p>Click the <strong>Set Logging</strong> button to enable/disable logging information displayed by <em>QGroundControl</em>.</p><h2 id="common-logging-options" tabindex="-1">Common Logging Options <a class="header-anchor" href="#common-logging-options" aria-label="Permalink to &quot;Common Logging Options&quot;">​</a></h2><p>The most commmonly used logging options are listed below.</p><table><thead><tr><th>Option(s)</th><th>Description</th></tr></thead><tbody><tr><td><code>LinkManagerLog</code>, <code>MultiVehicleManagerLog</code></td><td>Debug connection problems.</td></tr><tr><td><code>LinkManagerVerboseLog</code></td><td>Debug serial ports not being detected. Very noisy continuous output of available serial ports.</td></tr><tr><td><code>FirmwareUpgradeLog</code></td><td>Debug firmware flash issues.</td></tr><tr><td><code>ParameterManagerLog</code></td><td>Debug parameter load problems.</td></tr><tr><td><code>ParameterManagerDebugCacheFailureLog</code></td><td>Debug parameter cache crc misses.</td></tr><tr><td><code>PlanManagerLog</code>, <code>MissionManagerLog</code>, <code>GeoFenceManagerLog</code>, <code>RallyPointManagerLog</code></td><td>Debug Plan upload/download issues.</td></tr><tr><td><code>RadioComponentControllerLog</code></td><td>Debug Radio calibration issues.</td></tr></tbody></table><h2 id="logging-from-the-command-line" tabindex="-1">Logging from the Command Line <a class="header-anchor" href="#logging-from-the-command-line" aria-label="Permalink to &quot;Logging from the Command Line&quot;">​</a></h2><p>An alternate mechanism for logging is using the <code>--logging</code> command line option. This is handy if you are trying to get logs from a situation where <em>QGroundControl</em> crashes.</p><p>How you do this and where the traces are output vary by OS:</p><ul><li><p>Windows</p><ul><li><p>You must open a command prompt, change directory to the <strong>qgroundcontrol.exe</strong> location, and run it from there: bash cd &quot;\\Program Files (x86)\\qgroundcontrol&quot; qgroundcontrol --logging:full</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\Program Files (x86)\\qgroundcontrol&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">qgroundcontrol</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --logging:full</span></span></code></pre></div></li><li><p>When <em>QGroundControl</em> starts you should see a separate console window open which will have the log output</p></li></ul></li><li><p>OSX</p><ul><li><p>You must run <em>QGroundControl</em> from Terminal. The Terminal app is located in Applications/Utilities. Once Terminal is open paste the following into it:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Once</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Terminal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> paste</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> following</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> into</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> it:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    bash</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Applications/qgroundcontrol.app/Contents/MacOS/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ./qgroundcontrol</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --logging:full</span></span></code></pre></div></li><li><p>Log traces will output to the Terminal window.</p></li></ul></li><li><p>Linux</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./qgroundcontrol-start.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --logging:full</span></span></code></pre></div><ul><li>Log traces will output to the shell you are running from.</li></ul></li></ul>`,11),l=[a];function r(g,d,p,h,c,u){return e(),s("div",null,l)}const C=o(n,[["render",r]]);export{F as __pageData,C as default};