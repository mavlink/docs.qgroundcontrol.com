import{_ as e,a as t,b as r,c as o,d as a}from"./chunks/firmware_upgrade_complete.xHVN6voV.js";import{_ as i,o as n,c as l,R as s}from"./chunks/framework.Th7bWEIV.js";const y=JSON.parse('{"title":"Loading Firmware","description":"","frontmatter":{},"headers":[],"relativePath":"en/qgc-user-guide/setup_view/firmware.md","filePath":"en/qgc-user-guide/setup_view/firmware.md"}'),c={name:"en/qgc-user-guide/setup_view/firmware.md"},d=s('<h1 id="loading-firmware" tabindex="-1">Loading Firmware <a class="header-anchor" href="#loading-firmware" aria-label="Permalink to &quot;Loading Firmware&quot;">​</a></h1><p><em>QGroundControl</em> <strong>desktop</strong> versions can install <a href="http://px4.io/" target="_blank" rel="noreferrer">PX4 Pro</a> or <a href="http://ardupilot.com" target="_blank" rel="noreferrer">ArduPilot</a> firmware onto Pixhawk-family flight-controller boards. By default QGC will install the current stable version of the selected autopilot, but you can also choose to install beta builds, daily builds, or custom firmware files.</p><p><em>QGroundControl</em> can also install the firmware for SiK Radios and PX4 Flow devices.</p><blockquote><p><strong>Caution</strong> Loading Firmware is currently not available on tablet or phone versions of <em>QGroundControl</em>.</p></blockquote><h2 id="connect-device-for-firmware-update" tabindex="-1">Connect Device for Firmware Update <a class="header-anchor" href="#connect-device-for-firmware-update" aria-label="Permalink to &quot;Connect Device for Firmware Update&quot;">​</a></h2><blockquote><p><strong>Caution</strong> <strong>Before you start installing Firmware</strong> all USB connections to your vehicle must be <em>disconnected</em> (both direct or through a telemetry radio). The vehicle must <em>not be</em> powered by a battery.</p></blockquote><ol><li>First select the <strong>Gear</strong> icon (<em>Vehicle Setup</em>) in the top toolbar and then <strong>Firmware</strong> in the sidebar.</li></ol><p><img src="'+e+'" alt="Firmware disconnected"></p><ol><li><p>Connect your device (Pixhawk, SiK Radio, PX4 Flow) directly to your computer via USB.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Connect directly to a powered USB port on your machine (do not connect through a USB hub).</p></div></li></ol><h2 id="select-firmware-to-load" tabindex="-1">Select Firmware to Load <a class="header-anchor" href="#select-firmware-to-load" aria-label="Permalink to &quot;Select Firmware to Load&quot;">​</a></h2><p>Once the device is connected you can choose which firmware to load (<em>QGroundControl</em> presents sensible options based on the connected hardware).</p><ol><li><p>For a Pixhawk-compatible board choose either <strong>PX4 Flight Stack vX.X.X Stable Release</strong> or <strong>ArduPilot Flight Stack</strong> radio buttons to download the <em>current stable release</em>.</p><p><img src="'+t+'" alt="Select PX4"></p><p>If you select <em>ArduPilot</em> you will also have to choose the specific firmware and the type of vehicle (as shown below).</p><p><img src="'+r+'" alt="Select ArduPilot"></p></li><li><p>Check <strong>Advanced settings</strong> to select specific developer releases or install firmware from your local file system.</p><p><img src="'+o+'" alt="ArduPilot - Advanced Settings"></p></li></ol><h2 id="update-the-firmware" tabindex="-1">Update the firmware <a class="header-anchor" href="#update-the-firmware" aria-label="Permalink to &quot;Update the firmware&quot;">​</a></h2><ol><li><p>Click the <strong>OK</strong> button to start the update.</p><p>The firmware will then proceed through a number of upgrade steps (downloading new firmware, erasing old firmware etc.). Each step is printed to the screen and overall progress is displayed on a progress bar.</p><p><img src="'+a+'" alt="Firmware Upgrade Complete"></p></li></ol><p>Once the firmware has finished loading the device/vehicle will reboot and reconnect. Next you will need to configure the <a href="./../setup_view/airframe.html">airframe</a> (and then sensors, radio, etc.)</p>',15),p=[d];function m(h,u,f,w,g,b){return n(),l("div",null,p)}const k=i(c,[["render",m]]);export{y as __pageData,k as default};