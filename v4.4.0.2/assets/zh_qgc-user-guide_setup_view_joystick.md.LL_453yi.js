import{_ as e,a as t,b as o,c as s,d as a,e as i,f as r,g as n,h as l}from"./chunks/joystick_circle_correction2.hrur6f4i.js";import{_ as c,o as h,c as d,R as p}from"./chunks/framework.oNgDzex6.js";const L=JSON.parse('{"title":"Joystick Setup","description":"","frontmatter":{},"headers":[],"relativePath":"zh/qgc-user-guide/setup_view/joystick.md","filePath":"zh/qgc-user-guide/setup_view/joystick.md"}'),u={name:"zh/qgc-user-guide/setup_view/joystick.md"},g=p('<h1 id="joystick-setup" tabindex="-1">Joystick Setup <a class="header-anchor" href="#joystick-setup" aria-label="Permalink to &quot;Joystick Setup&quot;">​</a></h1><p><em>QGroundControl</em> allows you to control a vehicle using a joystick or gamepad instead of an RC Transmitter.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Flying with a Joystick (or <a href="./../settings_view/virtual_joystick.html">virtual thumb-sticks</a>) requires a reliable high bandwidth telemetry channel to ensure that the vehicle is responsive to joystick movements (because joystick information is sent over MAVLink).</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Joystick and Gamepad support is enabled using the cross-platform <a href="http://www.libsdl.org/index.php" target="_blank" rel="noreferrer">SDL2</a> library. Compatibility with a particular controller depends on SDL (all buttons that are exposed by that API are displayed through the <em>QGroundControl</em> UI). A <a href="#supported-joysticks">number of common joysticks and gamepads</a> are known to work.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The joystick is <em>enabled</em> as the last step of the calibration process.</p></div><h2 id="enabling-px4-joystick-support" tabindex="-1">Enabling PX4 Joystick Support <a class="header-anchor" href="#enabling-px4-joystick-support" aria-label="Permalink to &quot;Enabling PX4 Joystick Support&quot;">​</a></h2><p>To enable Joystick support in PX4 you need to set the parameter [<code>COM_RC_IN_MODE</code>](h<a href="https://docs.px4.io/en/main/advanced_config/parameter_reference.html#COM_RC_IN_MODE" target="_blank" rel="noreferrer">ttp://localhost:8080/px4_user_guide/en</a> to <code>1</code> - <em>Joystick</em>. If this parameter is <code>0</code> then <em>Joystick</em> will not be offered as a setup option.</p><p>This is enabled by default for PX4 SITL builds (see the <a href="./../setup_view/parameters.html">Parameters</a> topic for information on how to find and set a particular parameter).</p><h2 id="ardupilot-joystick-support" tabindex="-1">Ardupilot Joystick Support <a class="header-anchor" href="#ardupilot-joystick-support" aria-label="Permalink to &quot;Ardupilot Joystick Support&quot;">​</a></h2><p>All ArduPilot vehicles are supported. No parameter configuration is necessary.</p><h2 id="configure" tabindex="-1">Configuring the Joystick <a class="header-anchor" href="#configure" aria-label="Permalink to &quot;Configuring the Joystick {#configure}&quot;">​</a></h2><p>To configure a joystick:</p><ol><li><p>Start <em>QGroundControl</em> and connect to a vehicle.</p></li><li><p>Connect the Joystick or Gamepad to a USB port.</p></li><li><p>Select the <strong>Gear</strong> icon (Vehicle Setup) in the top toolbar and then <strong>Joystick</strong> in the sidebar. The screen below will appear.</p><p><img src="'+e+'" alt="Joystick setup - PlayStation"></p></li><li><p>Make sure your joystick is selected in the <strong>Active joystick</strong> dropdown.</p></li><li><p>Go to the <strong>Calibrate</strong> Tab, press the <strong>Start</strong> button and then follow the on-screen instructions to calibrate/move the sticks.</p><p><img src="'+t+'" alt="Joystick setup - Calibration"></p><p>The joystick is <em>enabled</em> as the last step of the calibration process.</p></li><li><p>Test the buttons and sticks work as intended by pressing them, and viewing the result in the Axis/Button monitor in the <strong>General</strong> tab.</p></li><li><p>Select the flight modes/vehicle functions activated by each joystick button. <img src="'+o+'" alt="Joystick setup - Buttons"></p></li></ol><h2 id="advanced-options" tabindex="-1">Advanced Options <a class="header-anchor" href="#advanced-options" aria-label="Permalink to &quot;Advanced Options&quot;">​</a></h2><p>Some additional Options are available at the <strong>Advanced</strong> tab. These options may be useful for specific, unsual setups, for increasing sensibility, and for handling noisy joysticks.</p><h3 id="throttle-options" tabindex="-1">Throttle Options <a class="header-anchor" href="#throttle-options" aria-label="Permalink to &quot;Throttle Options&quot;">​</a></h3><p><img src="'+s+'" alt="Joystick setup - Throttle Modes"></p><ul><li><strong>Center stick is zero throttle</strong>: Centered or lowered stick sends 0 in <a href="https://mavlink.io/en/messages/common.html#MANUAL_CONTROL" target="_blank" rel="noreferrer">MANUAL_CONTROL <strong>z</strong></a>, raised stick sends 1000. <ul><li><strong>Spring loaded throttle smoothing</strong>: In this mode you control not the throttle itself, but the rate at which it increases/decreases. This is useful for setups where the throttle stick is spring loaded, as the user can hold the desired throttle while releasing the stick.</li></ul></li><li><strong>Full down stick is zero throttle</strong>: In this mode, lowered stick sends 0 in <a href="https://mavlink.io/en/messages/common.html#MANUAL_CONTROL" target="_blank" rel="noreferrer">MANUAL_CONTROL <strong>z</strong></a>, centered stick 500, and raised 1000.</li><li><strong>Allow negative thrust</strong>: When in <strong>Center stick is zero throttle</strong> mode, this allows the user to send negative values by lowering the stick. So that lowered stick sends -1000 in <a href="https://mavlink.io/en/messages/common.html#MANUAL_CONTROL" target="_blank" rel="noreferrer">MANUAL_CONTROL <strong>z</strong></a>, centered sends zero, and raised stick sends 1000. This mode is only enabled for vehicles that support negative thrust, such as <a href="http://ardupilot.org/rover/index.html" target="_blank" rel="noreferrer">Rover</a>.</li></ul><h3 id="expo" tabindex="-1">Expo <a class="header-anchor" href="#expo" aria-label="Permalink to &quot;Expo&quot;">​</a></h3><p>The expo slider allows you to make the sticks less sensitive in the center, allowing finer control in this zone.</p><p><img src="'+a+'" alt="Joystick setup - Expo"></p><p>The slider adjusts the curvature of the exponential curve.</p><p><img src="'+i+'" alt="Joystick setup - Expo Curve"></p><p>The higher the Expo value, the flatter the curve is at the center, and steeper it is at the edges.</p><h3 id="advanced-settings" tabindex="-1">Advanced Settings <a class="header-anchor" href="#advanced-settings" aria-label="Permalink to &quot;Advanced Settings&quot;">​</a></h3><p>The advanced settings are not recommended for everyday users. They can cause unpredicted results if used incorrectly.</p><p><img src="'+r+'" alt="Joystick setup - Advanced Settings"></p><p>The following settings are available:</p><ul><li><p><strong>Enable Gimbal Control</strong>: Enabled two additional channels for controlling a gimbal.</p></li><li><p><strong>Joystick Mode</strong>: Changes what the joystick actually controls, and the MAVLink messages sent to the vehicle.</p><ul><li><strong>Normal</strong>: User controls as if using a regular RC radio, MAVLink <a href="https://mavlink.io/en/messages/common.html#MANUAL_CONTROL" target="_blank" rel="noreferrer">MANUAL_CONTROL</a> messages are used.</li><li><strong>Attitude</strong>: User controls the vehicle attitude, MAVLink <a href="https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET" target="_blank" rel="noreferrer">SET_ATTITUDE_TARGET</a> messages are used.</li><li><strong>Position</strong>: User controls the vehicle position, MAVLink <a href="https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED" target="_blank" rel="noreferrer">SET_POSITION_TARGET_LOCAL_NED</a> messages with bitmask for <strong>position</strong> only are used.</li><li><strong>Force</strong>: User controls the forces applied to the vehicle, MAVLink <a href="https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED" target="_blank" rel="noreferrer">SET_POSITION_TARGET_LOCAL_NED</a> messages with bitmask for <strong>force</strong> only are used.</li><li><strong>Velocity</strong>: User controls the forces applied to the vehicle, MAVLink <a href="https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED" target="_blank" rel="noreferrer">SET_POSITION_TARGET_LOCAL_NED</a> messages with bitmask for <strong>velocity</strong> only are used.</li></ul></li><li><p><strong>Axis Frequency</strong>: When the joystick is idle (inputs are not changing), the joystick commands are sent to the vehicle at 5Hz. When the joystick is in use (input values are changing), the joystick commands are sent to the vehicle at the (higher) frequency configured by this setting. The default is 25Hz.</p></li><li><p><strong>Button Frequency</strong>: Controls the frequency at which repeated button actions are sent.</p></li><li><p><strong>Enable Circle Correction</strong>: RC controllers sticks describe a square, while joysticks usually describe a circle. When this option is enabled a square is inscribed inside the joystick movement area to make it more like an RC controller (so it is possible to reach all four corners). The cost is decreased resolution, as the effective stick travel is reduced.</p><ul><li><p><strong>Disabled:</strong> When this is <strong>disabled</strong> the joystick position is sent to the vehicle unchanged (the way that it is read from the joystick device). On some joysticks, the (roll, pitch) values are confined to the space of a circle inscribed inside of a square. In this figure, point B would command full pitch forward and full roll right, but the joystick is not able to reach point B because the retainer is circular. This means that you will not be able to achieve full roll and pitch deflection simultaneously.</p><p><img src="'+n+'" alt=""></p></li><li><p><strong>Enabled:</strong> The joystick values are adjusted in software to ensure full range of commands. The usable area of travel and resolution is decreased, however, because the area highlighted grey in the figure is no longer used.</p><p><img src="'+l+'" alt="Circle correction enabled"></p></li></ul></li><li><p><strong>Deadbands:</strong> Deadbands allow input changes to be ignored when the sticks are near their neutral positions. This helps to avoid noise or small oscillations on sensitive sticks which may be interpreted as commands, or small offsets when sticks do not re-center well. They can be adjusted during the first step of the <a href="#configure">calibration</a>, or by dragging vertically on the corresponding axis monitor.</p></li></ul><h2 id="supported-joysticks" tabindex="-1">Supported Joysticks <a class="header-anchor" href="#supported-joysticks" aria-label="Permalink to &quot;Supported Joysticks&quot;">​</a></h2><p>The following joysticks/controllers have been shown to work with relatively recent <em>QGroundControl</em> builds.</p><h3 id="sony-playstation-3-4-controllers" tabindex="-1">Sony Playstation 3/4 Controllers <a class="header-anchor" href="#sony-playstation-3-4-controllers" aria-label="Permalink to &quot;Sony Playstation 3/4 Controllers&quot;">​</a></h3><p>Both these joysticks are highly recommended. They work well &quot;out of the box&quot; and have many buttons that you can map to flight modes.</p><h4 id="sony-ps4-dualshock-4-controller-v2-wireless-setup" tabindex="-1">Sony PS4 - DualShock 4 Controller V2 (Wireless setup) <a class="header-anchor" href="#sony-ps4-dualshock-4-controller-v2-wireless-setup" aria-label="Permalink to &quot;Sony PS4 - DualShock 4 Controller V2 (Wireless setup)&quot;">​</a></h4><p>This controller supports both USB and Bluetooth wireless connection. Wired USB connection usually works out of the box. The wireless connection needs some setup.</p><h5 id="linux-ubuntu-setup" tabindex="-1">Linux Ubuntu setup <a class="header-anchor" href="#linux-ubuntu-setup" aria-label="Permalink to &quot;Linux Ubuntu setup&quot;">​</a></h5><p>To make the controller work wirelessly under Linux the <a href="https://jstest-gtk.gitlab.io/" target="_blank" rel="noreferrer">jstest-gtk</a> and <a href="https://github.com/chrippa/ds4drv" target="_blank" rel="noreferrer">ds4drv</a> utilities are needed.</p><p>The steps are:</p><ol><li>Install <em>jstest-gtk</em>:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Install _jstest-gtk_: `sudo apt install jstest-gtk`</span></span></code></pre></div></li><li>Install <em>ds4drv</em>:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Install _ds4drv_: `sudo pip install ds4drv`</span></span></code></pre></div></li><li>Run ds4drv <code>sudo ds4drv</code><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo ds4drv</span></span></code></pre></div></li><li>Hold <strong>Share</strong> button and then <strong>PS</strong> button until controller LED starts blinking rapidly. The <em>ds4drv</em> should then detect a new device.</li><li>Last of all, you should check the controller setup by running the <em>jstest-gtk</em> utility.</li></ol><h3 id="frsky-taranis-xd9-plus" tabindex="-1">FrSky Taranis XD9 plus <a class="header-anchor" href="#frsky-taranis-xd9-plus" aria-label="Permalink to &quot;FrSky Taranis XD9 plus&quot;">​</a></h3><p>The <em>FrSky Taranis XD9 plus</em> remote control can also be connected as a joystick. You will need to connect it via the USB port on the back.</p><p>The Taranis does not allow you to use button options (to be precise, you can set the options, but toggling the buttons on your transmitter does not cause them to be pressed).</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The Taranis is an open system that is openly being worked on. It is possible that at time of writing there is a firmware or configuration that allows it to work effectively as a joystick.</p></div><h3 id="logitech-gamepad-f310" tabindex="-1">Logitech Gamepad F310 <a class="header-anchor" href="#logitech-gamepad-f310" aria-label="Permalink to &quot;Logitech Gamepad F310&quot;">​</a></h3><p>The Logitech Gamepad F310 has been tested via USB on MacOSX &quot;Sierra&quot;.</p><h3 id="logitech-extreme-3d-pro" tabindex="-1">Logitech Extreme 3D Pro <a class="header-anchor" href="#logitech-extreme-3d-pro" aria-label="Permalink to &quot;Logitech Extreme 3D Pro&quot;">​</a></h3><p>The <a href="http://gaming.logitech.com/en-ch/product/extreme-3d-pro-joystick" target="_blank" rel="noreferrer">Logitech Extreme 3D Pro</a> Joystick has been tested on all platforms (Linux, Windows, Mac OSX). This is a single stick controller that can also be twisted. The main stick axes are used for pitch and roll, while the twist action is used for yaw. The throttle is mapped onto a separate wheel.</p><h3 id="logitech-f710-gamepad" tabindex="-1">Logitech F710 Gamepad <a class="header-anchor" href="#logitech-f710-gamepad" aria-label="Permalink to &quot;Logitech F710 Gamepad&quot;">​</a></h3><p>This gamepad is great for flying a multirotor manually via QGroundControl. It works on Windows, Linux and Mac OS.</p><h4 id="mac-os-leopard-lion-setup" tabindex="-1">Mac OS Leopard / Lion Setup <a class="header-anchor" href="#mac-os-leopard-lion-setup" aria-label="Permalink to &quot;Mac OS Leopard / Lion Setup&quot;">​</a></h4><p>The F710 is detected under Leopard / Lion but is not automatically configured as an input device. In order to get a working configuration, the F710 has to be recognised as <em>Rumblepad2</em>.</p><p>First check how it is recognised: <strong>Apple &gt; About this Mac &gt; Additional Information &gt; System Report &gt; USB</strong>. It is detected as &quot;Logitech Cordless RumblePad 2&quot; then nothing further needs to be done.</p><p>If it is detected as a &quot;Logitech Wireless 710&quot;, perform these steps:</p><ol><li>Unplug the USB receiver of the gamepad</li><li>Prepare to quickly plug it into a USB port</li><li>Hit the Logitech button (its silver with the Logitech Logo on it in the center of the pad)</li><li>Quickly connect the USB receiver to your Mac</li><li>The pad should now be detected in the system report as &quot;Logitech Cordless RumblePad 2&quot;. If not, retry the above steps.</li></ol>',54),m=[g];function k(b,f,y,v,_,T){return h(),d("div",null,m)}const A=c(u,[["render",k]]);export{L as __pageData,A as default};