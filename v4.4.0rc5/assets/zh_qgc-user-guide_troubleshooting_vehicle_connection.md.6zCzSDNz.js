import{_ as o,o as e,c as n,R as t}from"./chunks/framework.A2Py4wSB.js";const g=JSON.parse('{"title":"Vehicle Connection Problems","description":"","frontmatter":{},"headers":[],"relativePath":"zh/qgc-user-guide/troubleshooting/vehicle_connection.md","filePath":"zh/qgc-user-guide/troubleshooting/vehicle_connection.md"}'),i={name:"zh/qgc-user-guide/troubleshooting/vehicle_connection.md"},a=t(`<h1 id="vehicle-connection-problems" tabindex="-1">Vehicle Connection Problems <a class="header-anchor" href="#vehicle-connection-problems" aria-label="Permalink to &quot;Vehicle Connection Problems&quot;">​</a></h1><h2 id="vehicle-does-not-show-up-in-ui" tabindex="-1">Vehicle does not show up in UI <a class="header-anchor" href="#vehicle-does-not-show-up-in-ui" aria-label="Permalink to &quot;Vehicle does not show up in UI&quot;">​</a></h2><p>QGC will automatically connect to a vehicle as soon as a communication link is created (using USB, or WiFi, etc.) If you establish that link and you don&#39;t see your vehicle show up in the QGC UI you can use <a href="./../settings_view/console_logging.html">console logging</a> to help debug the problem.</p><p>Use the following steps to debug the issue:</p><ul><li><p>Start with the hardware vehicle link not connected. Don&#39;t plug in the USB connection and/or establish the WiFi link in your OS for example.</p></li><li><p>Turn on <code>LinkManagerLog</code> <a href="./../settings_view/console_logging.html">console logging</a> in QGC. This will log output about the link which QGC sees and connects to.</p></li><li><p>Establish the hardware vehicle communication link.</p></li><li><p>The console log output should display something like this:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:563 - &quot;Waiting for bootloader to finish &quot;/dev/cu.usbmodem01&quot;&quot;</span></span>
<span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:563 - &quot;Waiting for bootloader to finish &quot;/dev/cu.usbmodem01&quot;&quot;</span></span>
<span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:563 - &quot;Waiting for bootloader to finish &quot;/dev/cu.usbmodem01&quot;&quot;</span></span>
<span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:563 - &quot;Waiting for bootloader to finish &quot;/dev/cu.usbmodem01&quot;&quot;</span></span>
<span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:572 - &quot;Waiting for next autoconnect pass &quot;/dev/cu.usbmodem4201&quot;&quot;</span></span>
<span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:613 - &quot;New auto-connect port added:  &quot;ArduPilot ChibiOS on cu.usbmodem4201 (AutoConnect)&quot; &quot;/dev/cu.usbmodem4201&quot;&quot;</span></span></code></pre></div></li><li><p>The first few lines indicate QGC has established a hardware link and finally the auto-connect.</p></li></ul><p>If you don&#39;t see any of this then QGC is not recognizing the hardware link. To see if your hardware is being recognized at the OS level do this:</p><ul><li>Start with the hardware vehicle link not connected. Don&#39;t plug in the USB connection and/or establish the WiFi link in your OS for example.</li><li>Turn on <code>LinkManagerVerboseLog</code> <a href="./../settings_view/console_logging.html">console logging</a> in QGC. This will log output for all serial hardware connections that QGC recognizes.</li><li>You will see continuous output of the serial ports on your device.</li><li>Plug in your USB comm device.</li><li>You should see a new device show in in the console output. Example:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:520 - &quot;-----------------------------------------------------&quot;</span></span>
<span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:521 - &quot;portName:           &quot;cu.usbmodem4201&quot;&quot;</span></span>
<span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:522 - &quot;systemLocation:     &quot;/dev/cu.usbmodem4201&quot;&quot;</span></span>
<span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:523 - &quot;description:        &quot;Pixhawk1&quot;&quot;</span></span>
<span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:524 - &quot;manufacturer:       &quot;ArduPilot&quot;&quot;</span></span>
<span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:525 - &quot;serialNumber:       &quot;1B0034000847323433353231&quot;&quot;</span></span>
<span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:526 - &quot;vendorIdentifier:   1155&quot;</span></span>
<span class="line"><span>[D] at /Users/travis/build/mavlink/qgroundcontrol/src/comm/LinkManager.cc:527 - &quot;productIdentifier:  22336&quot;</span></span></code></pre></div></li><li>After that it should continue to log a connection to that device as shown in the first example.</li></ul><p>If you don&#39;t see a new serial port should up in the console output when you plug it in then something is likely wrong with your hardware at the OS level.</p><h2 id="error-vehicle-is-not-responding" tabindex="-1">Error: Vehicle is not responding <a class="header-anchor" href="#error-vehicle-is-not-responding" aria-label="Permalink to &quot;Error: Vehicle is not responding&quot;">​</a></h2><p>This indicates that although QGC was able to connect to the hardware link to your vehicle there is no telemetry going back and forth on the link. This can unfortunately indicate a number of problems:</p><ul><li>Hardware communication setup problems</li><li>Firmware problems</li></ul><p>Lastly it can happen if QGC attempts to automatically connect to a device which is connected to your computer which isn&#39;t a vehicle. You can identify this case using the steps above and noting the device information which QGC is attempting to connect to. In order to make auto-connect work the filter it uses on devices it attempts to auto-connect to is somewhat broad and can be incorrect. If you find this happening you will need to turn off auto-connect from General Settings and create a manual connection to the comm link for your vehicle. You can also remove the device causing the problem from your computer but that may not always be possible.</p>`,12),s=[a];function l(c,r,u,h,d,p){return e(),n("div",null,s)}const v=o(i,[["render",l]]);export{g as __pageData,v as default};