import{_ as e,o as a,c as i,R as n}from"./chunks/framework.Th7bWEIV.js";const k=JSON.parse('{"title":"类层次结构（上层）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/qgc-dev-guide/classes/index.md","filePath":"zh/qgc-dev-guide/classes/index.md"}'),r={name:"zh/qgc-dev-guide/classes/index.md"},l=n('<h1 id="类层次结构-上层" tabindex="-1">类层次结构（上层） <a class="header-anchor" href="#类层次结构-上层" aria-label="Permalink to &quot;类层次结构（上层）&quot;">​</a></h1><h2 id="linkmanager-链接管理器类-linkinterface-链接接口类" tabindex="-1">(LinkManager)链接管理器类，(LinkInterface)链接接口类 <a class="header-anchor" href="#linkmanager-链接管理器类-linkinterface-链接接口类" aria-label="Permalink to &quot;(LinkManager)链接管理器类，(LinkInterface)链接接口类&quot;">​</a></h2><p>QGC中的“链接”是QGC与载具间的一种特定类型的通信管道，例如串行端口或基于WiFi的UDP端口。 LinkInterface为所有链接的基类。 每个链接都在它自己的线程上运行，并将字节发送到MAVLinkProtocol。 The base class for all links is LinkInterface. Each link runs on it&#39;s own thread and sends bytes to MAVLinkProtocol.</p><p>LinkManager类所生成对象管理系统中的所有打开链接。 <code>LinkManager</code>还通过串行和UDP链接管理自动连接 系统中有一个MultiVehicleManager多机管理类生成的对象, 当它接收到一个新的心跳包(通过心跳包里面的系统ID识别)，它会自动生成一个载具对象，来表示一个新的载具加入到系统。 &#39;MultiVehicleManager&#39;还可以保持对系统中所有载具的跟踪，对于激活状态的载具可以自由切换，而对于正在被移除的也能够正确处理。</p><h2 id="mavlink协议类" tabindex="-1">MAVLink协议类 <a class="header-anchor" href="#mavlink协议类" aria-label="Permalink to &quot;MAVLink协议类&quot;">​</a></h2><p>There is a single <code>MAVLinkProtocol</code> object in the system. 系统中有一个MAVLink协议对象。 它的功能是从链接获取传入的字节并将它们转换为MAVLink消息。 MAVLink HEARTBEAT消息被分发到Multi Vehicle Manager(多机管理类)。 所有MAVLink消息都将分发到与链接相对应的载具。 MAVLink HEARTBEAT messages are routed to <code>MultiVehicleManager</code>. (Vehicle)载具类</p><h2 id="multivehiclemanager-多机管理类" tabindex="-1">(MultiVehicleManager)多机管理类 <a class="header-anchor" href="#multivehiclemanager-多机管理类" aria-label="Permalink to &quot;(MultiVehicleManager)多机管理类&quot;">​</a></h2><p>There is a single <code>MultiVehicleManager</code> object within the system. When it receives a HEARTBEAT on a link which has not been previously seen it creates a Vehicle object. <code>MultiVehicleManager</code> also keeps tracks of all Vehicles in the system and handles switching from one active vehicle to another and correctly handling a vehicle being removed.</p><h2 id="vehicle" tabindex="-1">Vehicle <a class="header-anchor" href="#vehicle" aria-label="Permalink to &quot;Vehicle&quot;">​</a></h2><p>Vehicle类所生成的对象是QGC代码与物理载具通信的主要接口。</p><p>注意：还有一个与每个Vehicle相关联的UAS对象，这是一个已弃用的类，并且正逐渐被逐步淘汰，所有功能都转移到Vehicle类。 这里不应该添加新代码。 No new code should be added here.</p><h2 id="firmwareplugin-固件插件类-firmwarepluginmanager-固件插件管理器类" tabindex="-1">(FirmwarePlugin)固件插件类，( FirmwarePluginManager)固件插件管理器类 <a class="header-anchor" href="#firmwareplugin-固件插件类-firmwarepluginmanager-固件插件管理器类" aria-label="Permalink to &quot;(FirmwarePlugin)固件插件类，( FirmwarePluginManager)固件插件管理器类&quot;">​</a></h2><p>The FirmwarePlugin class is the base class for firmware plugins. FirmwarePlugin类为固件插件的基类。 固件插件包含固件特定代码，因此Vehicle对象相对于它是识别的，支持UI的单个标准接口。</p><p>FirmwarePluginManager是一个工厂类，它根据Vehicle类的成员MAV_AUTOPILOT / MAV_TYPE组合创建FirmwarePlugin类的实例。</p>',14),t=[l];function c(o,h,s,d,g,u){return a(),i("div",null,t)}const M=e(r,[["render",c]]);export{k as __pageData,M as default};