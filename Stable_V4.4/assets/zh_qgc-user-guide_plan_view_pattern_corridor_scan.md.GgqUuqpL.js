import{_ as e,a,b as t,c as r,d as o,e as i,f as n,g as l}from"./chunks/corridor_scan_settings_statistics.BSzy8RV_.js";import{_ as s,o as c,c as h,R as d}from"./chunks/framework.jcLJieDC.js";const T=JSON.parse('{"title":"Corridor Scan (Plan Pattern)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/qgc-user-guide/plan_view/pattern_corridor_scan.md","filePath":"zh/qgc-user-guide/plan_view/pattern_corridor_scan.md"}'),p={name:"zh/qgc-user-guide/plan_view/pattern_corridor_scan.md"},u=d('<h1 id="corridor-scan-plan-pattern" tabindex="-1">Corridor Scan (Plan Pattern) <a class="header-anchor" href="#corridor-scan-plan-pattern" aria-label="Permalink to &quot;Corridor Scan (Plan Pattern)&quot;">​</a></h1><p>A corridor scan allows you to create a flight pattern that follows a poly-line. This can be used to, for example, survey a road. It is supported on all autopilots and vehicle types.</p><blockquote><p><strong>Important</strong> When planning a Corridor Scan using camera specifications the ground elevations under your survey area are assumed to be at the same altitude as your launch/home location. If the ground elevation under your survey area is either higher or lower than your launch/home location the effective overlap in your images will be less or more (respectively) than calculated. If ground elevation under your survey area is significantly higher than your launch/home location you could inadvertently plan a mission which causes the vehicle to fly into trees, obstacles, or the ground. Use Terrain Follow to create a survey that more closely maintains the desired altitude above terrain that has significant elevation differences from your launch/home altitude.</p></blockquote><p><img src="'+e+'" alt="Corridor Scan"></p><p>You can specify the path, the width of the corridor, and camera settings appropriate for creating geotagged images.</p><h2 id="creating-a-scan" tabindex="-1">Creating a Scan <a class="header-anchor" href="#creating-a-scan" aria-label="Permalink to &quot;Creating a Scan&quot;">​</a></h2><p>To create a corridor scan:</p><ol><li><p>Open <a href="./../plan_view/plan_view.html">PlanView</a> <em>Plan Tools</em>.</p></li><li><p>Choose the <em>Pattern Tool</em> from the <em>Plan Tools</em> and then select <em>Corridor Scan</em>.</p><p><img src="'+a+'" alt="Corridor Scan"></p><p>This will add a corridor to the map, and a <em>Corridor Scan</em> item to the mission list (on the right).</p></li><li><p>On the map drag the ends of the corridor to the start and end positions of the scan, respectively.</p></li><li><p>Click the <code>(+)</code> symbol at the centre of a line to create a new vertix. The new vertix can then be dragged into position to follow the path of the desired corridor.</p></li></ol><p>The corridor scan settings are covered in the next section.</p><h2 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h2><p>The corridor scan can be further configured in the associated mission item (in the mission item list on the right hand side of the Plan View).</p><h3 id="camera" tabindex="-1">Camera <a class="header-anchor" href="#camera" aria-label="Permalink to &quot;Camera&quot;">​</a></h3><p>Camera triggering behaviour depends on the camera/camera settings. You can select an existing camera or manually enter the settings. The list of available cameras (QGC 3.4) is given below.</p><p><img src="'+t+'" alt="Corridor Scan - Select Camera"></p><h4 id="known-camera" tabindex="-1">Known Camera <a class="header-anchor" href="#known-camera" aria-label="Permalink to &quot;Known Camera&quot;">​</a></h4><p>Selecting a known camera from the option dropdown allows you to generate a grid pattern based on the camera&#39;s specifications.</p><p><img src="'+r+'" alt="Corridor Scan - Camera Settings Canon SX260"></p><p>The configurable options are:</p><ul><li><strong>Landscape/Portrait</strong> - Camera orientation relative to the &quot;normal&quot; orientation of the vehicle.</li><li><strong>Image Overlap</strong> - Overlap between each image.</li><li>Select one of: <ul><li><strong>Altitude</strong> - Survey altitude (ground resolution will be calculated/displayed for this altitude).</li><li><strong>Ground resolution</strong> - Ground resolution for each image (altitude required to achieve this resolution calculated and shown).</li></ul></li></ul><h4 id="manual-camera" tabindex="-1">Manual Camera <a class="header-anchor" href="#manual-camera" aria-label="Permalink to &quot;Manual Camera&quot;">​</a></h4><p>The manual camera option allows you to specify desired survey height, trigger interval and appropriate grid spacing for your camera.</p><p><img src="'+o+'" alt="Corridor Scan - Manual Camera Settings"></p><p>The configurable options are:</p><ul><li><strong>Altitude</strong> - Survey altitude.</li><li><strong>Trigger Distance</strong> - The distance over ground between each camera shot.</li><li><strong>Spacing</strong> - Distance between adjacent grid (flight path) lines across the corridor.</li></ul><h3 id="corridor" tabindex="-1">Corridor <a class="header-anchor" href="#corridor" aria-label="Permalink to &quot;Corridor&quot;">​</a></h3><p><img src="'+i+'" alt="Corridor Scan - Corridor Settings"></p><p>The configurable options are:</p><ul><li><strong>Width</strong> - Set the width of the scan around the polyline that defines the path.</li><li><strong>Turnaround dist</strong> - Amount of additional distance to add outside the survey area for vehicle turn around.</li><li><strong>Take images in turnarounds</strong> - Check to enable image capture a turnaround points.</li><li><strong>Relative altitude</strong> - Check to specify a relative altitude. This is only supported for manual grids that are not using <a href="#terrain_following">terrain following</a>.</li><li><strong>Rotate entry point</strong> - Press button to swap the start and end point of the corridor scan.</li></ul><h3 id="terrain_following" tabindex="-1">Terrain Following <a class="header-anchor" href="#terrain_following" aria-label="Permalink to &quot;Terrain Following {#terrain_following}&quot;">​</a></h3><p>By default a flying vehicle will follow the corridor path at a fixed altitude. Enabling <em>Terrain Following</em> makes the vehicle maintain a constant height relative to ground.</p><p><img src="'+n+'" alt="Corridor Scan - Terrain Following Settings"></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Terrain following uses terrain heights queried from <em>AirMap</em> servers.</p></div><p>The configurable options are:</p><ul><li><strong>Vehicle follows terrain</strong> - Check to enable terrain following (and display the following options). <ul><li><strong>Tolerance</strong> - The accepted deviation in altitude from the target altitude.</li><li><strong>Max Climb Rate</strong> - Maximum climb rate when following terrain.</li><li><strong>Max Descent Rate</strong> - Maximum descent rate when following terrain.</li></ul></li></ul><h3 id="statistics" tabindex="-1">Statistics <a class="header-anchor" href="#statistics" aria-label="Permalink to &quot;Statistics&quot;">​</a></h3><p>The <em>Statistics</em> section shows the calculated survey area, photo interval, photo spacing and planned photo count.</p><p><img src="'+l+'" alt="Corridor Scan - Statistics"></p>',37),g=[u];function m(f,_,w,v,b,y){return c(),h("div",null,g)}const q=s(p,[["render",m]]);export{T as __pageData,q as default};