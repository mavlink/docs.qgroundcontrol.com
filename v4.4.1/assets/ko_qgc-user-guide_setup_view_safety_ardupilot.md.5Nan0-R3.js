import{_ as r,a,b as e,c as t,d as l,e as o,f as i,g as s,h as n,i as p,j as c,k as h}from"./chunks/safety_ardusub.9Wk6Glek.js";import{_ as f,o as _,c as g,R as d}from"./chunks/framework.dKSasamX.js";const C=JSON.parse('{"title":"안전 설정 (ArduPilot)","description":"","frontmatter":{},"headers":[],"relativePath":"ko/qgc-user-guide/setup_view/safety_ardupilot.md","filePath":"ko/qgc-user-guide/setup_view/safety_ardupilot.md"}'),m={name:"ko/qgc-user-guide/setup_view/safety_ardupilot.md"},u=d('<h1 id="안전-설정-ardupilot" tabindex="-1">안전 설정 (ArduPilot) <a class="header-anchor" href="#안전-설정-ardupilot" aria-label="Permalink to &quot;안전 설정 (ArduPilot)&quot;">​</a></h1><p>The <em>Safety Setup</em> page allows you to configure (vehicle specific) failsafe settings.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>다른 안전 장치 설정은 각 차량 유형에 대한 안전 장치 설명서에 설명된 <a href="./../setup_view/parameters.html">매개변수</a>를 통하여 설정할 수 있습니다.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>_QGroundControl_은 ArduPilot에서 폴리곤 펜스 또는 랠리 포인트를 지원하지 않습니다.</p></div><h2 id="콥터" tabindex="-1">콥터 <a class="header-anchor" href="#콥터" aria-label="Permalink to &quot;콥터&quot;">​</a></h2><p>콥터의 안전 페이지는 아래와 같습니다.</p><p><img src="'+r+'" alt="안전 설정 - 콥터(Ardupilot)"></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>추가 안전 설정 및 정보는 <a href="http://ardupilot.org/copter/docs/failsafe-landing-page.html" target="_blank" rel="noreferrer">안전장치</a>를 참고하십시오.</p></div><h3 id="battery_failsafe_copter" tabindex="-1">배터리 안전장치 <a class="header-anchor" href="#battery_failsafe_copter" aria-label="Permalink to &quot;배터리 안전장치 {#battery_failsafe_copter}&quot;">​</a></h3><p>이 패널은 <a href="http://ardupilot.org/copter/docs/failsafe-battery.html" target="_blank" rel="noreferrer">배터리 안전장치</a> 매개변수를 설정합니다. 전압 및 남은 용량에 대해 낮거나 중요한 임계값을 설정하고 안전 장치 값이 위반되는 경우 조치를 정의할 수 있습니다. 임계값을 0으로 설정하여 비활성화할 수 있습니다.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>두 번째 배터리가 있는 경우(<a href="./../setup_view/power.html">전원 설정</a>에서 활성화됨) 두 번째 패널이 동일한 설정으로 표시됩니다.</p></div><p><img src="'+a+'" alt="안전 설정 - Battery1 페일세이프 트리거(콥터)"></p><p>설정 옵션은 다음과 같습니다:</p><ul><li><strong>Low action</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#batt-fs-low-act-low-battery-failsafe-action" target="_blank" rel="noreferrer">BATT_FS_LOW_ACT</a>) - 없음, Land, RTL, SmartRTL, SmartRTL 또는 Land, Terminate 중 하나를 선택합니다.</li><li><strong>Critical action</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#batt-fs-crt-act-critical-battery-failsafe-action" target="_blank" rel="noreferrer">BATT_FS_CRT_ACT</a>) - 없음, Land, RTL, SmartRTL, SmartRTL 또는 Land, Terminate 중 하나를 선택합니다.</li><li><strong>Low voltage threshold</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#batt-low-volt-low-battery-voltage" target="_blank" rel="noreferrer">BATT_LOW_VOLT</a>) - _낮은 동작_을 트리거하는 배터리 전압입니다.</li><li><strong>Critical voltage threshold&lt;</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#batt-crt-volt-critical-battery-voltage" target="_blank" rel="noreferrer">BATT_CRT_VOLT</a>)- _중요 작업_을 트리거하는 배터리 전압입니다.</li><li><strong>Low mAh threshold</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#batt-low-mah-low-battery-capacity" target="_blank" rel="noreferrer">BATT_LOW_MAH</a>) - _낮은 작업_을 트리거하는 배터리 용량입니다.</li><li><strong>Critical mAh threshold</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#batt-crt-mah-battery-critical-capacity" target="_blank" rel="noreferrer">BATT_CRT_MAH</a>) - _중요한 작업_을 트리거하는 배터리 용량입니다.</li></ul><h3 id="failsafe_triggers_copter" tabindex="-1">일반적인 안전장치 트리거 <a class="header-anchor" href="#failsafe_triggers_copter" aria-label="Permalink to &quot;일반적인 안전장치 트리거 {#failsafe_triggers_copter}&quot;">​</a></h3><p>이 패널은 <a href="http://ardupilot.org/copter/docs/gcs-failsafe.html" target="_blank" rel="noreferrer">GCS 안전장치</a>를 활성화하고 스로틀 안전장치를 설정합니다.</p><p><img src="'+e+'" alt="안전 설정 - 일반 비상 안전 트리거(콥터)"></p><p>설정 옵션은 다음과 같습니다:</p><ul><li><strong>Ground Station failsafe</strong> - 비활성화, 항상 RTL 활성화, 자동 모드에서 미션 계속 활성화, 항상 SmartRTL 또는 RTL 활성화, 항상 SmartRTL 또는 Land 활성화.</li><li><strong>Throttle failsafe</strong> - 비활성화됨, 항상 RTL, 자동 모드에서 미션 계속, 항상 착륙.</li><li><strong>PWM Threshold</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#fs-thr-value-throttle-failsafe-value" target="_blank" rel="noreferrer">FS_THR_VALUE</a>) - 스로틀 페일세이프가 트리거되는 PWM 값입니다.</li></ul><h3 id="geofence_copter" tabindex="-1">지오펜스 <a class="header-anchor" href="#geofence_copter" aria-label="Permalink to &quot;지오펜스 {#geofence_copter}&quot;">​</a></h3><p>이 패널은 원통형 <a href="http://ardupilot.org/copter/docs/ac2_simple_geofence.html" target="_blank" rel="noreferrer">Simple Geofence</a>에 대한 매개변수를 설정합니다. 울타리 반경 또는 높이 활성화 여부, 위반 최대값 및 위반 시 조치를 설정할 수 있습니다.</p><p><img src="'+t+'" alt="안전 설정 - 지오펜스(콥터)"></p><p>설정 옵션은 다음과 같습니다:</p><ul><li><strong>Circle GeoFence enabled</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#fence-type-fence-type" target="_blank" rel="noreferrer">FENCE_TYPE</a>, <a href="http://ardupilot.org/copter/docs/parameters.html#fence-enable-fence-enable-disable" target="_blank" rel="noreferrer">FENCE_ENABLE</a>) - 원형 지오펜스를 활성화합니다.</li><li><strong>Altitude GeoFence enabled</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#fence-type-fence-type" target="_blank" rel="noreferrer">FENCE_TYPE</a>, <a href="http://ardupilot.org/copter/docs/parameters.html#fence-enable-fence-enable-disable" target="_blank" rel="noreferrer">FENCE_ENABLE</a>) - 고도 지오펜스를 활성화합니다.</li><li>울타리 작업(<a href="http://ardupilot.org/copter/docs/parameters.html#fence-action-fence-action" target="_blank" rel="noreferrer">FENCE_ACTION</a>) 다음 중 하나: <ul><li><strong>보고만</strong> - 울타리 위반을 보고합니다.</li><li><strong>RTL 또는 Land</strong> - 출발지 복귀 또는 펜스 경계 착륙</li></ul></li><li><strong>최대 반경</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#fence-radius-circular-fence-radius" target="_blank" rel="noreferrer">FENCE_RADIUS</a>) - 부서졌을 때 RTL을 유발하는 원형 울타리 반경.</li><li><strong>최대 고도</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#fence-alt-max-fence-maximum-altitude" target="_blank" rel="noreferrer">FENCE_ALT_MAX</a>)- 고도 지오펜스를 트리거하는 최대 고도를 표시합니다.</li></ul><h3 id="rtl_copter" tabindex="-1">출발지 복귀 <a class="header-anchor" href="#rtl_copter" aria-label="Permalink to &quot;출발지 복귀 {#rtl_copter}&quot;">​</a></h3><p>이 패널은 <a href="http://ardupilot.org/copter/docs/rtl-mode.html" target="_blank" rel="noreferrer">RTL 모드</a>의 기능을 설정합니다.</p><p><img src="'+l+'" alt="안전 설정 - RTL(콥터)"></p><p>설정 옵션은 다음과 같습니다:</p><ul><li>RTL 복귀 고도 선택(<a href="http://ardupilot.org/copter/docs/parameters.html#rtl-alt-rtl-altitude" target="_blank" rel="noreferrer">RTL_ALT</a>): <ul><li><strong>현재 고도에서 복귀</strong> - 현재 고도에서 복귀합니다.</li><li><strong>지정된 고도에서 복귀</strong> - 현재 고도 미만인 경우 지정된 고도로 상승하여 복귀합니다.</li></ul></li><li><strong>집 위 배회</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#rtl-loit-time-rtl-loiter-time" target="_blank" rel="noreferrer">RTL_LOIT_TIME</a>) - 착륙 전 배회 시간을 설정합니다.</li><li>다음 중 하나 <ul><li><strong>하강 속도가 있는 착지</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#land-speed-land-speed" target="_blank" rel="noreferrer">LAND_SPEED</a>) - 최종 하강 속도를 선택합니다.</li><li><strong>최종 배회 고도</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#rtl-alt-final-rtl-final-altitude" target="_blank" rel="noreferrer">RTL_ALT_FINAL</a>) - RTL 또는 임무 후 착륙을 위한 최종 고도를 선택하고 설정합니다(착륙하려면 0으로 설정).</li></ul></li></ul><h3 id="arming_checks_copter" tabindex="-1">시동 검사 <a class="header-anchor" href="#arming_checks_copter" aria-label="Permalink to &quot;시동 검사 {#arming_checks_copter}&quot;">​</a></h3><p>이 패널은 어떤 <a href="http://ardupilot.org/copter/docs/prearm_safety_check.html" target="_blank" rel="noreferrer">사전 ARM 안전 검사</a> 활성 여부를 설정합니다.</p><p><img src="'+o+'" alt="안전 설정 - 시동 점검(콥터)"></p><p>설정 옵션은 다음과 같습니다:</p><ul><li><strong>수행할 무장 점검</strong>(<a href="http://ardupilot.org/copter/docs/parameters.html#arming-check-arm-checks-to-peform-bitmask" target="_blank" rel="noreferrer">ARMING_CHECK</a>) - 모든 적절한 점검: 기압계, 나침반, GPS 잠금, INS, 매개변수, RC 채널, 보드 전압, 배터리 잔량, 대기 속도, 사용 가능한 로깅 , 하드웨어 안전 스위치, GPS 구성, 시스템.</li></ul><h2 id="비행기" tabindex="-1">비행기 <a class="header-anchor" href="#비행기" aria-label="Permalink to &quot;비행기&quot;">​</a></h2><p>비행기의 안전 페이지는 아래와 같습니다.</p><p><img src="'+i+'" alt="안전 설정 - 비행기(Ardupilot)"></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>추가 안전 설정 및 정보는 <a href="http://ardupilot.org/plane/docs/apms-failsafe-function.html" target="_blank" rel="noreferrer">비행기 안전 장치 기능</a> 및 <a href="http://ardupilot.org/plane/docs/advanced-failsafe-configuration.html" target="_blank" rel="noreferrer">고급 안전 장치 설정</a>을 참고하십시오.</p></div><h3 id="battery_failsafe_plane" tabindex="-1">배터리 안전장치 <a class="header-anchor" href="#battery_failsafe_plane" aria-label="Permalink to &quot;배터리 안전장치 {#battery_failsafe_plane}&quot;">​</a></h3><p>비행기 배터리 안전 장치는 <a href="http://ardupilot.org/plane/docs/parameters.html#batt-fs-low-act-low-battery-failsafe-action" target="_blank" rel="noreferrer">낮음</a> 및 <a href="http://ardupilot.org/plane/docs/parameters.html#batt-fs-crt-act-critical-battery-failsafe-action" target="_blank" rel="noreferrer">치명적</a> 작업(없음, RTL, 착륙, 종료)에 대해 다른 옵션이 있다는 점을 제외하고 헬리콥터와 동일합니다.</p><p>자세한 내용은 <a href="#battery_failsafe_copter">배터리 안전장치</a>(콥터)를 참고하십시오.</p><h3 id="failsafe_triggers_plane" tabindex="-1">안전장치 트리거 <a class="header-anchor" href="#failsafe_triggers_plane" aria-label="Permalink to &quot;안전장치 트리거 {#failsafe_triggers_plane}&quot;">​</a></h3><p>이 패널은 <a href="http://ardupilot.org/plane/docs/advanced-failsafe-configuration.html#ground-station-communications-loss" target="_blank" rel="noreferrer">GCS 안전장치</a>를 활성화하고 스로틀 안전장치를 설정합니다.</p><p><img src="'+s+'" alt="안전 설정 - 비상안전장치 트리거(콥터)"></p><p>설정 옵션은 다음과 같습니다:</p><ul><li><strong>스로틀 PWM 임계치</strong>(<a href="http://ardupilot.org/plane/docs/parameters.html#thr-fs-value-throttle-failsafe-value" target="_blank" rel="noreferrer">THR_FS_VALUE</a>) - 스로틀 페일세이프가 트리거되는 PWM 값입니다.</li><li><strong>GCS 비상안전장치</strong>(<a href="http://ardupilot.org/plane/docs/parameters.html#fs-gcs-enabl-gcs-failsafe-enable" target="_blank" rel="noreferrer">FS_GCS_ENABL</a>) - GCS 비상안전장치를 활성화합니다.</li></ul><h3 id="rtl_plane" tabindex="-1">출발지 복귀 <a class="header-anchor" href="#rtl_plane" aria-label="Permalink to &quot;출발지 복귀 {#rtl_plane}&quot;">​</a></h3><p>이 패널은 <a href="http://ardupilot.org/copter/docs/rtl-mode.html" target="_blank" rel="noreferrer">RTL 모드</a>의 기능을 설정합니다.</p><p><img src="'+n+'" alt="안전 설정 - RTL(고정익)"></p><p>설정 옵션은 다음과 같습니다:</p><ul><li>RTL 복귀 고도 선택(<a href="http://ardupilot.org/copter/docs/parameters.html#rtl-alt-rtl-altitude" target="_blank" rel="noreferrer">RTL_ALT</a>): <ul><li><strong>현재 고도에서 복귀</strong> - 현재 고도에서 복귀합니다.</li><li><strong>지정된 고도에서 복귀</strong> - 현재 고도 미만인 경우 지정된 고도로 상승하여 복귀합니다.</li></ul></li></ul><h3 id="arming_checks_plane" tabindex="-1">시동 검사 <a class="header-anchor" href="#arming_checks_plane" aria-label="Permalink to &quot;시동 검사 {#arming_checks_plane}&quot;">​</a></h3><p><a href="#arming_checks_copter">시동 점검</a>은 헬리콥터와 동일합니다.</p><h2 id="로버" tabindex="-1">로버 <a class="header-anchor" href="#로버" aria-label="Permalink to &quot;로버&quot;">​</a></h2><p>로버의 안전 페이지는 아래와 같습니다.</p><p><img src="'+p+'" alt="안전 설정 - 로버(Ardupilot)"></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>추가 안전 설정 및 정보는 <a href="http://ardupilot.org/rover/docs/rover-failsafes.html" target="_blank" rel="noreferrer">비상안전장치</a>를 참고하십시오.</p></div><h3 id="battery_failsafe_rover" tabindex="-1">배터리 비상안전장치 <a class="header-anchor" href="#battery_failsafe_rover" aria-label="Permalink to &quot;배터리 비상안전장치 {#battery_failsafe_rover}&quot;">​</a></h3><p>로버 배터리 비상안전장치는 <a href="#battery_failsafe_copter">콥터</a>와 동일합니다.</p><h3 id="failsafe_triggers_rover" tabindex="-1">비상안전장치 트리거 <a class="header-anchor" href="#failsafe_triggers_rover" aria-label="Permalink to &quot;비상안전장치 트리거 {#failsafe_triggers_rover}&quot;">​</a></h3><p>이 패널은 로버 <a href="http://ardupilot.org/rover/docs/rover-failsafes.html" target="_blank" rel="noreferrer">비상안전장치</a>를 활성화합니다.</p><p><img src="'+c+'" alt="안전 설정 - 비상안전장치 트리거(로버)"></p><p>설정 옵션은 다음과 같습니다:</p><ul><li><strong>지상국 비상안전장치</strong>(<a href="http://ardupilot.org/rover/docs/parameters.html#fs-gcs-enable-gcs-failsafe-enable" target="_blank" rel="noreferrer">FS_GCS_ENABL</a>) - GCS 비상안전장치를 활성화합니다.</li><li><strong>안전 장치 조절</strong>(<a href="http://ardupilot.org/rover/docs/parameters.html#fs-thr-enable-throttle-failsafe-enable" target="_blank" rel="noreferrer">FS_THR_ENABLE</a>) - 안전 장치 조절을 활성화 또는 비활성화합니다(값은 아래 <em>PWM 임계값</em>).</li><li><strong>PWM Threshold</strong>(<a href="http://ardupilot.org/rover/docs/parameters.html#fs-thr-value-throttle-failsafe-value" target="_blank" rel="noreferrer">FS_THR_VALUE</a>) - 스로틀 페일세이프가 트리거되는 PWM 값입니다.</li><li><strong>Failsafe Crash Check</strong>(<a href="http://ardupilot.org/rover/docs/parameters.html#fs-crash-check-crash-check-action" target="_blank" rel="noreferrer">FS_CRASH_CHECK</a>) - 충돌 발생 시 수행할 작업: Disabled, Hold, HoldAndDisarm</li></ul><h3 id="arming_checks_rover" tabindex="-1">시동 검사 <a class="header-anchor" href="#arming_checks_rover" aria-label="Permalink to &quot;시동 검사 {#arming_checks_rover}&quot;">​</a></h3><p><a href="#arming_checks_copter">시동 점검</a>은 헬리콥터와 동일합니다.</p><h2 id="sub" tabindex="-1">Sub <a class="header-anchor" href="#sub" aria-label="Permalink to &quot;Sub&quot;">​</a></h2><p>잠수정의 안전 페이지는 아래와 같습니다.</p><p><img src="'+h+'" alt="안전 설정 - 잠수정(Ardupilot)"></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>추가 안전 설정 및 정보는 <a href="https://www.ardusub.com/operators-manual/failsafes.html" target="_blank" rel="noreferrer">비상안전장치</a>를 참고하십시오.</p></div><h3 id="failsafe_actions_sub" tabindex="-1">비상안전장치 동작 <a class="header-anchor" href="#failsafe_actions_sub" aria-label="Permalink to &quot;비상안전장치 동작 {#failsafe_actions_sub}&quot;">​</a></h3><p>설정 옵션은 다음과 같습니다:</p><ul><li><strong>GCS 하트비트</strong> - 비활성화, 경고만, 무장 해제, 수심 유지 모드로 들어가기, 수면 모드로 들어가기 중 하나를 선택합니다.</li><li><strong>누출</strong> - 사용 안 함, 경고만, 수면 모드로 전환 중 하나를 선택합니다. <ul><li><strong>검출기 핀</strong> - 비활성화, Pixhawk Aux(1-6), Pixhawk 3.3ADC(1-2), Pixhawk 6.6ADC 중 하나를 선택합니다.</li><li><strong>건조 시 논리</strong> - 낮음, 높음 중 하나를 선택합니다.</li></ul></li><li><strong>배터리</strong> - ?.</li><li><strong>EKF</strong> - 비활성화, 경고만, 무장 해제 중 하나를 선택합니다.</li><li><strong>파일럿 입력</strong> - 비활성화, 경고만, 무장 해제 중 하나를 선택합니다.</li><li><strong>내부 온도</strong> - 비활성화, 경고만 중 하나를 선택합니다.</li><li><strong>내부 압력</strong> - 비활성화, 경고만 중 하나를 선택합니다.</li></ul><h3 id="arming_checks_sub" tabindex="-1">시동 검사 <a class="header-anchor" href="#arming_checks_sub" aria-label="Permalink to &quot;시동 검사 {#arming_checks_sub}&quot;">​</a></h3><p><a href="#arming_checks_copter">시동 점검</a>은 헬리콥터와 동일합니다.</p>',75),b=[u];function k(T,L,v,A,P,q){return _(),g("div",null,b)}const E=f(m,[["render",k]]);export{C as __pageData,E as default};