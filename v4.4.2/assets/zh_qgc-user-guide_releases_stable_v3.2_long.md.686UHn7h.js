import{_ as e,a as i,b as a,c as t,d as o,e as n}from"./chunks/multi_vehicle_list.Mo1p8w0F.js";import{a as l,b as r,c as s,_ as h}from"./chunks/mission_settings_vehicle_info_section.EpPs7xup.js";import{_ as d}from"./chunks/fixed_wing_landing_pattern.qJYMdLWv.js";import{_ as c,o as m,c as u,R as p}from"./chunks/framework.8ye2JeXP.js";const A=JSON.parse('{"title":"QGroundControl v3.2 Release Notes (Detailed)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/qgc-user-guide/releases/stable_v3.2_long.md","filePath":"zh/qgc-user-guide/releases/stable_v3.2_long.md"}'),f={name:"zh/qgc-user-guide/releases/stable_v3.2_long.md"},g=p('<h1 id="qgroundcontrol-v3-2-release-notes-detailed" tabindex="-1">QGroundControl v3.2 Release Notes (Detailed) <a class="header-anchor" href="#qgroundcontrol-v3-2-release-notes-detailed" aria-label="Permalink to &quot;QGroundControl v3.2 Release Notes (Detailed)&quot;">​</a></h1><p>This topic contains a high level and <em>non-exhaustive</em> list of new features added to <em>QGroundControl</em> in version 3.2.</p><h2 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h2><h3 id="telemetry-log-auto-save" tabindex="-1">Telemetry log auto-save <a class="header-anchor" href="#telemetry-log-auto-save" aria-label="Permalink to &quot;Telemetry log auto-save&quot;">​</a></h3><p>If you have <em>Save telemetry log after each flight</em> turned on you will no longer be prompted as to where to save the log each time the vehicle disarms. Logs will automatically be saved to the <a href="./../settings_view/general.html#load_save_path">Application Load/Save Path</a></p><p>For more information see <a href="./../settings_view/general.html#autosave_log">Settings &gt; General (Miscellaneous)</a>.</p><h3 id="autoload-plans" tabindex="-1">AutoLoad plans <a class="header-anchor" href="#autoload-plans" aria-label="Permalink to &quot;AutoLoad plans&quot;">​</a></h3><p>If this setting is turned on, <em>QGroundControl</em> will automatically upload a plan to the vehicle when it connects. The plan file must be named <strong>AutoLoad#.plan</strong> where the <code>#</code> is replaced with the vehicle id. The plan file must be located in the <a href="./../settings_view/general.html#load_save_path">Application Load/Save Path</a>.</p><p>For more information see <a href="./../settings_view/general.html#autoload_missions">Settings &gt; General (Miscellaneous)</a>.</p><h3 id="application-load-save-path" tabindex="-1">Application Load/Save Path <a class="header-anchor" href="#application-load-save-path" aria-label="Permalink to &quot;Application Load/Save Path&quot;">​</a></h3><p>You can now specify a save path which QGC will use as the default location to save files such as Parameters, Telemetry or Mission Plans.</p><p>For more information see <a href="./../settings_view/general.html#load_save_path">Settings &gt; General (Miscellaneous)</a>.</p><h3 id="rtk-gps" tabindex="-1">RTK GPS <a class="header-anchor" href="#rtk-gps" aria-label="Permalink to &quot;RTK GPS&quot;">​</a></h3><p>You can now specify the <em>Survey in accuracy</em> and <em>Minimum observation duration</em> for use with a connected RTK GPS.</p><p>For more information see <a href="./../settings_view/general.html#rtk_gps">Settings &gt; General (RTK GPS)</a>.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><h3 id="ardupilot-pre-flight-barometer-and-airspeed-calibration" tabindex="-1">ArduPilot - Pre-Flight Barometer and Airspeed calibration <a class="header-anchor" href="#ardupilot-pre-flight-barometer-and-airspeed-calibration" aria-label="Permalink to &quot;ArduPilot - Pre-Flight Barometer and Airspeed calibration&quot;">​</a></h3><p>This is now supported from the Sensors page.</p><h3 id="ardupilot-copy-rc-trims" tabindex="-1">ArduPilot - Copy RC Trims <a class="header-anchor" href="#ardupilot-copy-rc-trims" aria-label="Permalink to &quot;ArduPilot - Copy RC Trims&quot;">​</a></h3><p>This is now supported from the Copy Trims button on the Radio setup page.</p><h2 id="plan_view" tabindex="-1">Plan View <a class="header-anchor" href="#plan_view" aria-label="Permalink to &quot;Plan View {#plan_view}&quot;">​</a></h2><h3 id="plan-files" tabindex="-1">Plan Files <a class="header-anchor" href="#plan-files" aria-label="Permalink to &quot;Plan Files&quot;">​</a></h3><p>Previous version of <em>QGroundControl</em> saved missions, geo-fences and rally points in separate files (<strong>.mission</strong>, <strong>.fence</strong>, <strong>.rally</strong>). QGC now save all information related to a flight plan into a single file called a <em>Plan File</em> with a file extension of <strong>.plan</strong>.</p><p>Information about the format can be found in <a href="./../../qgc-dev-guide/file_formats/plan.html">Plan File Format</a> (QGC Developer Guide).</p><h3 id="plan-toolbar" tabindex="-1">Plan Toolbar <a class="header-anchor" href="#plan-toolbar" aria-label="Permalink to &quot;Plan Toolbar&quot;">​</a></h3><p><img src="'+e+'" alt="Plan Toolbar"></p><p>The new <em>Plan Toolbar</em> is displayed at the top of the <a href="./../plan_view/plan_view.html">PlanView</a>. It shows you information related to the currently selected waypoint as well as statistics for the entire mission.</p><p>When connected to a vehicle it also shows an <strong>Upload</strong> button, which can be used to upload the plan to the vehicle.</p><h3 id="mission-settings" tabindex="-1">Mission Settings <a class="header-anchor" href="#mission-settings" aria-label="Permalink to &quot;Mission Settings&quot;">​</a></h3><p>The <a href="./../plan_view/plan_view.html#mission_settings">Mission Settings</a> panel allows you to specify values which apply to the entire mission, or settings you want to control right at the beginning of a mission. This is the first item in the mission list on the right of the screen.</p><img src="'+l+'" style="width:150px;"><h4 id="mission-defaults" tabindex="-1">Mission Defaults <a class="header-anchor" href="#mission-defaults" aria-label="Permalink to &quot;Mission Defaults&quot;">​</a></h4><h5 id="waypoint-alt" tabindex="-1">Waypoint alt <a class="header-anchor" href="#waypoint-alt" aria-label="Permalink to &quot;Waypoint alt&quot;">​</a></h5><p>This specifies the default altitude for newly added mission items. If you update this value while you have a mission loaded it will prompt you to update all the the waypoints to this new altitude.</p><h5 id="flight-speed" tabindex="-1">Flight speed <a class="header-anchor" href="#flight-speed" aria-label="Permalink to &quot;Flight speed&quot;">​</a></h5><p>This allows you to set the flight speed for the mission to be different than the default mission speed.</p><h5 id="rtl-after-mission-end" tabindex="-1">RTL after mission end <a class="header-anchor" href="#rtl-after-mission-end" aria-label="Permalink to &quot;RTL after mission end&quot;">​</a></h5><p>Check this if you want your vehicle to RTL after the final mission item.</p><h4 id="camera-section" tabindex="-1">Camera section <a class="header-anchor" href="#camera-section" aria-label="Permalink to &quot;Camera section&quot;">​</a></h4><img src="'+r+'" style="width:150px;"><p>The camera section allows you to specify a camera action to take, control the gimbal and set your camera into photo or video mode.</p><p>The camera actions available are:</p><ul><li>Continue current action</li><li>Take photos (time)</li><li>Take photos (distance)</li><li>Stop taking photos</li><li>Start recording video</li><li>Stop recording video</li></ul><h4 id="vehicle-info-section" tabindex="-1">Vehicle Info section <a class="header-anchor" href="#vehicle-info-section" aria-label="Permalink to &quot;Vehicle Info section&quot;">​</a></h4><img src="'+s+'" style="width:150px;"><p>When planning a mission the firmware being run on the vehicle as well as the vehicle type must be known in order for QGroundControl to show you the mission commands which are appropriate for your vehicle.</p><p>If you are planning a mission while you are connected to your vehicle the Firmware and Vehicle Type will be determined from the vehicle. If you are planning a mission while not connected to a vehicle you will need to specify this information yourself.</p><p>The additional value that can be specified when planning a mission is the vehicle flight speed. By specifying this value, total mission or survey times can be approximated even when not connected to a vehicle.</p><h4 id="planned-home-position" tabindex="-1">Planned Home Position <a class="header-anchor" href="#planned-home-position" aria-label="Permalink to &quot;Planned Home Position&quot;">​</a></h4><img src="'+h+'" style="width:150px;"><p>The planned home position allows you to simulate the vehicle&#39;s home position while planning a mission. This way you see the waypoint trajectory for your vehicle from takeoff to mission completion. Keep in mind that this is only the &quot;planned&quot; home position and you should place it where you plan to start the vehicle from. It has no actual impact on flying the mission. The actual home position of a vehicle is set by the vehicle itself when arming.</p><h3 id="new-waypoint-features" tabindex="-1">New Waypoint features <a class="header-anchor" href="#new-waypoint-features" aria-label="Permalink to &quot;New Waypoint features&quot;">​</a></h3><img src="'+i+'" style="width:150px;"><ul><li>You can now adjust heading and flight speed for each waypoint.</li><li>There is a camera section available for camera changes on each waypoint. Explanation of Camera Section can be read under Mission Settings above.</li></ul><h3 id="visual-gimbal-direction" tabindex="-1">Visual Gimbal direction <a class="header-anchor" href="#visual-gimbal-direction" aria-label="Permalink to &quot;Visual Gimbal direction&quot;">​</a></h3><img src="'+a+'" style="width:300px;"><p>If you specify gimbal yaw changes on waypoints, both the plan and fly views will show you a visual representation of the gimbal direction.</p><h3 id="pattern-tool" tabindex="-1">Pattern tool <a class="header-anchor" href="#pattern-tool" aria-label="Permalink to &quot;Pattern tool&quot;">​</a></h3><p>There is a new <em>Pattern tool</em>. The following patterns are supported:</p><ul><li>Fixed Wing Landing (new)</li><li>Survey (with new features)</li></ul><h4 id="fixed-wing-landing-pattern" tabindex="-1">Fixed Wing Landing Pattern <a class="header-anchor" href="#fixed-wing-landing-pattern" aria-label="Permalink to &quot;Fixed Wing Landing Pattern&quot;">​</a></h4><p><img src="'+d+'" alt="Fixed Wing Landing Pattern"></p><p>This adds a landing pattern for fixed wings to your mission. The first point of the pattern is the loiter point which commands to vehicle to loiter to a specific altitude. Once that altitude is reached, the vehicle will begin the landing sequence and fly down to the specified landing spot.</p><p>Both the loiter and land points can be dragged to adjust. Also all the various values associated with the pattern can be adjusted.</p><p>For more information see <a href="./../plan_view/pattern_fixed_wing_landing.html">Fixed Wing Landing Pattern</a>.</p><h4 id="survey-new-features" tabindex="-1">Survey (new features) <a class="header-anchor" href="#survey-new-features" aria-label="Permalink to &quot;Survey (new features)&quot;">​</a></h4><ul><li>Images are not automatically taken in the turnaround zone outside of the polygonal survey area.</li><li>There is a new <em>Hover and Capture</em> option which can be used to capture the highest quality image at each image location. The vehicle will stop at each image location prior to taking the image such that the vehicle is stable while the image is taken.</li><li>There is a new option to re-fly the survey grid at a 90 degree angle to the previous pass. This allows you to generate much denser coverage for the images.</li></ul><p><img src="'+t+'" alt=""></p><p>Manipulating the survey area polygon is now easier to use on tablets with touch screens:</p><ul><li>You can drag the entire polygon to a new location by dragging the center point handle.</li><li>Each polygon vertex can be dragged to a new location.</li><li>To remove a polygon vertex, simple click on the drag handle for it.</li><li>Click on the <strong>+</strong> handles to add a new vertex between two existing vertices.</li></ul><h2 id="fly-view" tabindex="-1">Fly View <a class="header-anchor" href="#fly-view" aria-label="Permalink to &quot;Fly View&quot;">​</a></h2><h3 id="rtk-gps-1" tabindex="-1">RTK GPS <a class="header-anchor" href="#rtk-gps-1" aria-label="Permalink to &quot;RTK GPS&quot;">​</a></h3><p>RTK status is now shown in the toolbar.</p><h3 id="arm-disarm" tabindex="-1">Arm/Disarm <a class="header-anchor" href="#arm-disarm" aria-label="Permalink to &quot;Arm/Disarm&quot;">​</a></h3><p>There is an armed/disarmed indicator in the toolbar. You can click it to arm/disarm your vehicle. If you click Disarm in the toolbar while your vehicle is flying you will provided the option to Emergency Stop your vehicle.</p><h3 id="guided-actions" tabindex="-1">Guided Actions <a class="header-anchor" href="#guided-actions" aria-label="Permalink to &quot;Guided Actions&quot;">​</a></h3><ul><li>Takeoff</li><li>Land</li><li>RTL</li><li>Pause</li><li>Actions <ul><li>Start Mission</li><li>Resume Mission</li><li>Change Altitude</li><li>Land Abort</li></ul></li><li>Direct interaction with map <ul><li>Set Waypoint</li><li>Goto Location</li></ul></li></ul><h4 id="resume-mission" tabindex="-1">Resume Mission <a class="header-anchor" href="#resume-mission" aria-label="Permalink to &quot;Resume Mission&quot;">​</a></h4><p>The Resume Mission guided action is used to resume a mission after performing an RTL from within the mission to perform a battery change. After the vehicle lands from RTL and you have disconnected the battery <strong>do not</strong> disconnect QGC from the Vehicle. Put in your new battery and QGC will detect the vehicle again and automatically restore the connection. Once this happens you will be prompted with a Resume Mission confirmation slider. If you want to resume the mission, confirm this and the mission will be rebuilt from your last waypoint traveled through. Once the mission is rebuilt you will be presented with another Resume Mission slide which allows you to review the rebuilt mission before starting it again. Confirm this Resume Mission slider to continue on with the mission.</p><h6 id="how-resume-mission-rebuilding-works" tabindex="-1">How resume mission rebuilding works <a class="header-anchor" href="#how-resume-mission-rebuilding-works" aria-label="Permalink to &quot;How resume mission rebuilding works&quot;">​</a></h6><p>In order to resume a mission you cannot simply continue it from the last mission item the vehicle ran. The reason is is that may skip over important change speed commands or camera control commands which are prior to that item in the mission. If you skipped over those the remainder of the mission will not run correctly. In order to make resume mission work correctly QGC rebuilds the mission looking backwards from the last mission item flown and automatically appends relevant commands to the front of the mission. By doing this the state of the mission prior to the resume point is restore. The following mission commands are the ones scanned for:</p><ul><li><code>MAV_CMD_DO_CONTROL_VIDEO</code></li><li><code>MAV_CMD_DO_SET_ROI</code></li><li><code>MAV_CMD_DO_DIGICAM_CONFIGURE</code></li><li><code>MAV_CMD_DO_DIGICAM_CONTROL</code></li><li><code>MAV_CMD_DO_MOUNT_CONFIGURE</code></li><li><code>MAV_CMD_DO_MOUNT_CONTROL</code></li><li><code>MAV_CMD_DO_SET_CAM_TRIGG_DIST</code></li><li><code>MAV_CMD_DO_FENCE_ENABLE</code></li><li><code>MAV_CMD_IMAGE_START_CAPTURE</code></li><li><code>MAV_CMD_IMAGE_STOP_CAPTURE</code></li><li><code>MAV_CMD_VIDEO_START_CAPTURE</code></li><li><code>MAV_CMD_VIDEO_STOP_CAPTURE</code></li><li><code>MAV_CMD_DO_CHANGE_SPEED</code></li><li><code>MAV_CMD_NAV_TAKEOFF</code></li></ul><h3 id="remove-mission-after-vehicle-lands" tabindex="-1">Remove mission after vehicle lands <a class="header-anchor" href="#remove-mission-after-vehicle-lands" aria-label="Permalink to &quot;Remove mission after vehicle lands&quot;">​</a></h3><p>You will be prompted to remove the mission from the vehicle after the mission completes and the vehicle lands and disarms. This is meant to prevent issues where stale missions are unknowingly left on a vehicle cause unexpected behavior.</p><h3 id="instrument-panel" tabindex="-1">Instrument panel <a class="header-anchor" href="#instrument-panel" aria-label="Permalink to &quot;Instrument panel&quot;">​</a></h3><h4 id="camera-trigger" tabindex="-1">Camera trigger <a class="header-anchor" href="#camera-trigger" aria-label="Permalink to &quot;Camera trigger&quot;">​</a></h4><h4 id="flight-time" tabindex="-1">Flight Time <a class="header-anchor" href="#flight-time" aria-label="Permalink to &quot;Flight Time&quot;">​</a></h4><p>Flight time is now available for display in the instrument panel. For new users, flight time will be shown by default. For existing users who have already modified their instrument panel values you will have to add it yourself if you want to use it.</p><h2 id="analyze-view" tabindex="-1"><a href="./../analyze_view/">Analyze View</a> <a class="header-anchor" href="#analyze-view" aria-label="Permalink to &quot;[Analyze View](../analyze_view/index.md)&quot;">​</a></h2><ul><li><a href="./../analyze_view/log_download.html">Log Download</a> moved to <em>Analyze View</em> from menu.</li><li>New <a href="./../analyze_view/geotag_images.html">GeoTag Images</a> support for PX4 Pro firmware</li><li>New <a href="./../analyze_view/mavlink_console.html">MAVLink Console</a> which provides access the the <em>nsh shell</em> running on the vehicle.</li></ul><h2 id="multi-vehicle-view" tabindex="-1">Multi-Vehicle View <a class="header-anchor" href="#multi-vehicle-view" aria-label="Permalink to &quot;Multi-Vehicle View&quot;">​</a></h2><p>There is a new view available when you have multiple vehicles connected to QGC. It will only show up when more than one vehicle is connected. When that happens you will see an additional set of radio button at the top right of the Plan view.</p><img src="'+o+'" style="width:150px;"><p>Click the <strong>Multi-Vehicle</strong> radio button to replace the instrument panel with the multi-vehicle list:</p><img src="'+n+'" style="width:150px;"><p>The example above shows three vehicles. The numbers are the vehicle id. In the large font is the current flight mode. You can click the flight mode name to change to a different flight mode. To the right are small version of the instruments for each vehicle. You can command the vehicle to do the following actions from the control panel:</p><ul><li>Arm/Disarm</li><li>Start/Stop a mission</li><li>Return to Launch</li><li>Take Control back of the vehicle by returning to manual control from a mission.</li></ul><h3 id="multi-vehicle-gotchas-unique-vehicle-ids" tabindex="-1">Multi-Vehicle Gotchas - Unique vehicle ids <a class="header-anchor" href="#multi-vehicle-gotchas-unique-vehicle-ids" aria-label="Permalink to &quot;Multi-Vehicle Gotchas - Unique vehicle ids&quot;">​</a></h3><p>Each vehicle connected to QGC must have a unique id. Otherwise QGC will think the vehicles are actually the same vehicle. The symptom of this is the Plan view jerking around as it tries to position itself to one vehicle and then the next. For PX4 Pro firmwares this is the <code>MAV_SYS_ID</code> parameter. For ArduPilot firmwares it is the <code>SYSID_THISMAV</code> parameter.</p><h2 id="support-for-third-party-customized-qgroundcontrol" tabindex="-1">Support for third-party customized QGroundControl <a class="header-anchor" href="#support-for-third-party-customized-qgroundcontrol" aria-label="Permalink to &quot;Support for third-party customized QGroundControl&quot;">​</a></h2><p>Standard QGC supports multiple firmware types and multiple vehicle types. There is now support in QGC which allows a third-party to create their own custom version of QGC which is targeted specifically to their custom vehicle. They can then release their own version of QGC with their vehicle.</p>',101),w=[g];function v(y,b,_,P,T,q){return m(),u("div",null,w)}const S=c(f,[["render",v]]);export{A as __pageData,S as default};