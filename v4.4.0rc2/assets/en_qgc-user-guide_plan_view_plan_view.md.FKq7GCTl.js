import{_ as i,a as e,b as a,c as t,d as o}from"./chunks/mission_start.t9NJgc-K.js";import{_ as n,a as s,b as l,c as r}from"./chunks/mission_settings_vehicle_info_section.BuxypDQS.js";import{_ as h,o as m,c as d,R as c}from"./chunks/framework.JodFZ3wX.js";const x=JSON.parse('{"title":"Plan View","description":"","frontmatter":{},"headers":[],"relativePath":"en/qgc-user-guide/plan_view/plan_view.md","filePath":"en/qgc-user-guide/plan_view/plan_view.md"}'),p={name:"en/qgc-user-guide/plan_view/plan_view.md"},u=c('<h1 id="plan-view" tabindex="-1">Plan View <a class="header-anchor" href="#plan-view" aria-label="Permalink to &quot;Plan View&quot;">​</a></h1><p>The <em>Plan View</em> is used to plan <em>autonomous missions</em> for your vehicle, and upload them to the vehicle. Once the mission is <a href="#plan_mission">planned</a> and sent to the vehicle, you switch to the <a href="./../fly_view/fly_view.html">Fly View</a> to fly the mission.</p><p>It is also use to configure the <a href="./plan_geofence.html">GeoFence</a> and <a href="./plan_rally_points.html">Rally Points</a> if these are supported by the firmware.</p><p><span id="plan_screenshot"></span><img src="'+i+'" alt="Plan View"></p><h2 id="ui_overview" tabindex="-1">UI Overview <a class="header-anchor" href="#ui_overview" aria-label="Permalink to &quot;UI Overview {#ui_overview}&quot;">​</a></h2><p>The <a href="#plan_screenshot">screenshot above</a> shows a simple mission plan that starts with a takeoff at the <a href="#planned_home">Planned Home</a> position (H), flies through three waypoints, and then lands on the last waypoint (i.e. waypoint 3).</p><p>The main elements of the UI are:</p><ul><li><strong>Map:</strong> Displays the numbered indicators for the current mission, including the <a href="#planned_home">Planned Home</a>. Click on the indicators to select them (for editing) or drag them around to reposition them.</li><li><strong>Plan Toolbar:</strong> Status information for the currently selected waypoint relative to the previous waypoint, as well as statistics for the entire mission (e.g. horizontal distance and time for mission). <ul><li><code>Max telem dist</code> is the distance between the <a href="#planned_home">Planned Home</a> and the furthest waypoint.</li><li>When connected to a vehicle it also shows an <strong>Upload</strong> button, can be used to upload the plan to the vehicle.</li></ul></li><li><strong><a href="#plan_tools">Plan Tools</a>:</strong> Used to create and manage missions.</li><li><strong><a href="#mission_command_list">Mission Command List/Overlay</a>:</strong> Displays the current list of mission items (select items to <a href="#mission_command_editors">edit</a>).</li><li><strong>Terrain Altitude Overlay:</strong> Shows the relative altitude of each mission command.</li></ul><p>It shows you information related to the currently selected waypoint as well as statistics for the entire mission.</p><h2 id="plan_mission" tabindex="-1">Planning a Mission <a class="header-anchor" href="#plan_mission" aria-label="Permalink to &quot;Planning a Mission {#plan_mission}&quot;">​</a></h2><p>At very high level, the steps to create a mission are:</p><ol><li>Change to <em>Plan View</em>.</li><li>Add waypoints or commands to the mission and edit as needed.</li><li>Upload the mission to the vehicle.</li><li>Change to <em>Fly View</em> and fly the mission.</li></ol><p>The following sections explain some of the details in the view.</p><h2 id="planned_home" tabindex="-1">Planned Home Position <a class="header-anchor" href="#planned_home" aria-label="Permalink to &quot;Planned Home Position {#planned_home}&quot;">​</a></h2><p>The <em>Planned Home</em> shown in <em>Plan View</em> is used to set the approximate start point when planning a mission (i.e. when a vehicle may not even be connected to QGC). It is used by QGC to estimate mission times and to draw waypoint lines.</p><p><img src="'+n+'" alt="Planned Home Position"></p><p>You should move/drag the planned home position to roughly the location where you plan to takeoff. The altitude for the planned home position is set in the <a href="#mission_settings">Mission Settings</a> panel.</p><img src="'+e+'" style="width:200px;"><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The Fly View displays the <em>actual</em> home position set by the vehicle firmware when it arms (this is where the vehicle will return in Return/RTL mode).</p></div><h2 id="plan_tools" tabindex="-1">Plan Tools <a class="header-anchor" href="#plan_tools" aria-label="Permalink to &quot;Plan Tools {#plan_tools}&quot;">​</a></h2><p>The plan tools are used for adding individual waypoints, easing mission creation for complicated geometries, uploading/downloading/saving/restoring missions, and for navigating the map. The main tools are described below.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p><strong>Center map</strong>, <strong>Zoom In</strong>, <strong>Zoom Out</strong> tools help users better view and navigate the <em>Plan view</em> map (they don&#39;t affect the mission commands sent to the vehicle).</p></div><h3 id="add-waypoints" tabindex="-1">Add Waypoints <a class="header-anchor" href="#add-waypoints" aria-label="Permalink to &quot;Add Waypoints&quot;">​</a></h3><p>Click on the <strong>Add Waypoint</strong> tool to activate it. While active, clicking on the map will add new mission waypoint at the clicked location. The tool will stay active until you select it again. Once you have added a waypoint, you can select it and drag it around to change its position.</p><h3 id="file" tabindex="-1">File (Sync) <a class="header-anchor" href="#file" aria-label="Permalink to &quot;File (Sync) {#file}&quot;">​</a></h3><p>The <em>File tools</em> are used to move missions between the ground station and vehicle, and to save/restore them from files. The tool displays an <code>!</code> to indicate that there are mission changes that you have not sent to the vehicle.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Before you fly a mission you must upload it to the vehicle.</p></div><p>The <em>File tools</em> provide the following functionality:</p><ul><li>Upload (Send to vehicle)</li><li>Download (Load from vehicle)</li><li>Save/Save as to File, including as KML file.</li><li>Load from File</li><li>Remove All (removes all mission waypoints from <em>Plan view</em> and from vehicle)</li></ul><h3 id="pattern" tabindex="-1">Pattern <a class="header-anchor" href="#pattern" aria-label="Permalink to &quot;Pattern&quot;">​</a></h3><p>The <a href="./Pattern.html">Pattern</a> tool simplifies the creation of missions for flying complex geometries, including <a href="./../plan_view/pattern_survey.html">surveys</a> and <a href="./../plan_view/pattern_structure_scan_v2.html">structure scans</a>.</p><h2 id="mission_command_list" tabindex="-1">Mission Command List <a class="header-anchor" href="#mission_command_list" aria-label="Permalink to &quot;Mission Command List {#mission_command_list}&quot;">​</a></h2><p>Mission commands for the current mission are listed on the right side of the view. At the top are a set of options to switch between editing the mission, GeoFence and rally points. Within the list you can select individual mission items to edit their values.</p><p><img src="'+a+'" alt="Mission Command List"></p><h3 id="mission_command_editors" tabindex="-1">Mission Command Editors <a class="header-anchor" href="#mission_command_editors" aria-label="Permalink to &quot;Mission Command Editors {#mission_command_editors}&quot;">​</a></h3><p>Click on a mission command in the list to display its editor (in which you can set/change the command attributes).</p><p>You can change the <strong>type</strong> of the command by clicking on the command name (for example: <em>Waypoint</em>). This will display the <em>Select Mission Command</em> dialog shown below. By default this just displays the &quot;Basic Commands&quot;, but you can use the <strong>Category</strong> drop down menu to display more (e.g. choose <strong>All commands</strong> to see all the options).</p><img src="'+t+'" style="width:200px;"><p>To the right of each command name is a menu that you can click to access to additional options such as <em>Insert</em> and <em>Delete</em>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The list of available commands will depend on firmware and vehicle type. Examples may include: Waypoint, Start image capture, Jump to item (to repeat mission) and other commands.</p></div><h3 id="mission_settings" tabindex="-1">Mission Settings <a class="header-anchor" href="#mission_settings" aria-label="Permalink to &quot;Mission Settings {#mission_settings}&quot;">​</a></h3><p>The <em>Mission Start</em> panel is the first item that appears in the <a href="#mission_command_list">mission command list</a>. It may be used to specify a number default settings that may affect the start or end of the mission.</p><p><img src="'+o+'" alt="Mission Command List - showing mission settings"></p><p><img src="'+s+'" alt="Mission settings"></p><h4 id="mission-defaults" tabindex="-1">Mission Defaults <a class="header-anchor" href="#mission-defaults" aria-label="Permalink to &quot;Mission Defaults&quot;">​</a></h4><h5 id="waypoint-alt" tabindex="-1">Waypoint alt <a class="header-anchor" href="#waypoint-alt" aria-label="Permalink to &quot;Waypoint alt&quot;">​</a></h5><p>Set the default altitude for the first mission item added to a plan (subsequent items take an initial altitude from the previous item). This can also be used to change the altitude of all items in a plan to the same value; you will be prompted if you change the value when there are items in a plan.</p><h5 id="flight-speed" tabindex="-1">Flight speed <a class="header-anchor" href="#flight-speed" aria-label="Permalink to &quot;Flight speed&quot;">​</a></h5><p>Set a flight speed for the mission that is different than the default mission speed.</p><h4 id="mission-end" tabindex="-1">Mission End <a class="header-anchor" href="#mission-end" aria-label="Permalink to &quot;Mission End&quot;">​</a></h4><h5 id="return-to-launch-after-mission-end" tabindex="-1">Return to Launch after mission end <a class="header-anchor" href="#return-to-launch-after-mission-end" aria-label="Permalink to &quot;Return to Launch after mission end&quot;">​</a></h5><p>Check this if you want your vehicle to Return/RTL after the final mission item.</p><h4 id="planned-home-position" tabindex="-1">Planned Home Position <a class="header-anchor" href="#planned-home-position" aria-label="Permalink to &quot;Planned Home Position&quot;">​</a></h4><p>The <a href="#planned_home">Planned Home Position</a> section allows you to simulate the vehicle&#39;s home position while planning a mission. This allows you to view the waypoint trajectory for your vehicle from takeoff to mission completion.</p><p><img src="'+e+'" alt="MissionSettings Planned Home Position Section"></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is only the <em>planned</em> home position and you should place it where you plan to start the vehicle from. It has no actual impact on flying the mission. The actual home position of a vehicle is set by the vehicle itself when arming.</p></div><p>This section allows you to set the <strong>Altitude</strong> and <strong>Set Home to Map Centre</strong> (you can move it to another position by dragging it on the map).</p><h4 id="camera" tabindex="-1">Camera <a class="header-anchor" href="#camera" aria-label="Permalink to &quot;Camera&quot;">​</a></h4><p>The camera section allows you to specify a camera action to take, control the gimbal and set your camera into photo or video mode.</p><p><img src="'+l+'" alt="MissionSettings Camera Section"></p><p>The available camera actions are:</p><ul><li>No change (continue current action)</li><li>Take photos (time)</li><li>Take photos (distance)</li><li>Stop taking photos</li><li>Start recording video</li><li>Stop recording video</li></ul><h4 id="vehicle-info" tabindex="-1">Vehicle Info <a class="header-anchor" href="#vehicle-info" aria-label="Permalink to &quot;Vehicle Info&quot;">​</a></h4><p>The appropriate mission commands for the vehicle depend on the firmware and vehicle type.</p><p>If you are planning a mission while you are <em>connected to a vehicle</em> the firmware and vehicle type will be determined from the vehicle. This section allows you to specify the vehicle firmware/type when not connected to a vehicle.</p><p><img src="'+r+'" alt="MissionSettings VehicleInfoSection"></p><p>The additional value that can be specified when planning a mission is the vehicle flight speed. By specifying this value, total mission or survey times can be approximated even when not connected to a vehicle.</p><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><h3 id="plan_transfer_fail" tabindex="-1">Mission (Plan) Upload/Download Failures <a class="header-anchor" href="#plan_transfer_fail" aria-label="Permalink to &quot;Mission (Plan) Upload/Download Failures {#plan_transfer_fail}&quot;">​</a></h3><p>Plan uploading and downloading can fail over a noisy communication link (affecting missions, GeoFence, and rally points). If a failure occurs you should see a status message in the QGC UI similar to:</p><blockquote><p>Mission transfer failed. Retry transfer. Error: Mission write mission count failed, maximum retries exceeded.</p></blockquote><p>The loss rate for your link can be viewed in <a href="./../settings_view/mavlink.html">Settings View &gt; MAVLink</a>. The loss rate should be in the low single digits (i.e. maximum of 2 or 3):</p><ul><li>A loss rate in the high single digits can lead to intermittent failures.</li><li>Higher loss rates often lead to 100% failure.</li></ul><p>There is a much smaller possibility that issues are caused by bugs in either flight stack or QGC. To analyse this possibility you can turn on <a href="./../settings_view/console_logging.html">Console Logging</a> for Plan upload/download and review the protocol message traffic.</p><h2 id="further-info" tabindex="-1">Further Info <a class="header-anchor" href="#further-info" aria-label="Permalink to &quot;Further Info&quot;">​</a></h2><ul><li>New Plan View features for <a href="./../releases/stable_v3.2_long.html#plan_view">QGC release v3.2</a></li><li>New Plan View features for <a href="./../releases/stable_v3.3_long.html#plan_view">QGC release v3.3</a></li></ul>',76),f=[u];function g(v,w,y,_,b,P){return m(),d("div",null,f)}const M=h(p,[["render",g]]);export{x as __pageData,M as default};