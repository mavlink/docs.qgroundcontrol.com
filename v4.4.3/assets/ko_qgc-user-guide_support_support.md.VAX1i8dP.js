import{_ as o,o as r,c as e,R as a}from"./chunks/framework.yLSnkIoJ.js";const _=JSON.parse('{"title":"지원","description":"","frontmatter":{},"headers":[],"relativePath":"ko/qgc-user-guide/support/support.md","filePath":"ko/qgc-user-guide/support/support.md"}'),t={name:"ko/qgc-user-guide/support/support.md"},n=a('<h1 id="지원" tabindex="-1">지원 <a class="header-anchor" href="#지원" aria-label="Permalink to &quot;지원&quot;">​</a></h1><p>이 사용자 가이드는 _QGroundControl_에 대한 주요 지원 제공자를 위한 것입니다. 올바르지 않거나 누락된 정보를 발견하면 <a href="https://github.com/mavlink/qgc-user-guide/issues" target="_blank" rel="noreferrer">문제</a>를 신고하여 주십시오.</p><p><em>QGroundControl</em> 사용 방법에 대한 _질문_은 관련 플라이트 스택에 대한 토론 포럼에서 제기하여야 합니다.</p><ul><li><a href="http://discuss.px4.io/c/qgroundcontrol/qgroundcontrol-usage" target="_blank" rel="noreferrer">PX4 Pro Flight Stack</a>(discuss.px4.io).</li><li><a href="http://discuss.ardupilot.org/c/ground-control-software/qgroundcontrol" target="_blank" rel="noreferrer">ArduPilot Flight Stack</a> (discuss.ardupilot.org).</li></ul><p>이 포럼은 또한 _QGroundControl_에 대한 버그, 문제 및 원하는 기능에 대한 토론을 시작하기에 가장 적합합니다. 거기에서 추가 해결을 위하여 GitHub 문제에 정보를 입력할 수 있습니다.</p><h3 id="developer_chat" tabindex="-1">개발자 채팅 <a class="header-anchor" href="#developer_chat" aria-label="Permalink to &quot;개발자 채팅 {#developer_chat}&quot;">​</a></h3><p><em>QGroundControl</em> 개발자(및 많은 일반/깊은 관련 사용자)는 <a href="https://px4.slack.com/" target="_blank" rel="noreferrer">#QGroundControl Slack 채널</a>에서 찾을 수 있습니다.</p><h2 id="github-이슈" tabindex="-1">GitHub 이슈 <a class="header-anchor" href="#github-이슈" aria-label="Permalink to &quot;GitHub 이슈&quot;">​</a></h2><p>문제는 _QGroundControl_에 대한 버그와 이후 버전에 대한 기능 요청을 추적하는 데 사용됩니다. 현재 문제 목록은 <a href="https://github.com/mavlink/qgroundcontrol/issues" target="_blank" rel="noreferrer">GitHub 여기</a>에서 찾을 수 있습니다.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>버그 또는 기능 요청에 대한 GitHub 문제를 생성하기 <strong>전에</strong> 지원 포럼을 사용하여 개발자에게 문의하십시오.</p></div><h3 id="버그-신고" tabindex="-1">버그 신고 <a class="header-anchor" href="#버그-신고" aria-label="Permalink to &quot;버그 신고&quot;">​</a></h3><p>문제를 생성하라는 지시를 받은 경우 &quot;버그 보고서&quot; 템플릿을 사용하고 템플릿에 지정된 모든 정보를 제공합니다.</p><h5 id="windows-빌드에서-충돌-보고" tabindex="-1">Windows 빌드에서 충돌 보고 <a class="header-anchor" href="#windows-빌드에서-충돌-보고" aria-label="Permalink to &quot;Windows 빌드에서 충돌 보고&quot;">​</a></h5><p>QGroundControl이 충돌하면 충돌 덤프 파일이 Users LocalAppData 디렉터리에 저장됩니다. 해당 디렉토리로 이동하려면 시작/실행 명령을 사용하십시오. WinKey+R 단축키를 이용하여 이 창을 열수 있습니다. <code>%localappdata%</code> 열기에 대해 확인을 클릭합니다. 크래시 덤프는 <code>QGCCrashDumps</code> 해당 디렉토리의 폴더에 저장됩니다. 새 <strong>.dmp</strong> 파일을 찾을 수 있습니다. 문제 보고시 GitHub 문제에 해당 파일에 대한 링크를 추가하십시오.</p><h5 id="windows-빌드에서-보고-중단" tabindex="-1">Windows 빌드에서 보고 중단 <a class="header-anchor" href="#windows-빌드에서-보고-중단" aria-label="Permalink to &quot;Windows 빌드에서 보고 중단&quot;">​</a></h5><p>Windows에서 _QGroundControl 프로그램이 응답하지 않습니다_라는 메시지가 표시되면 다음 단계를 사용하여 중단을 보고합니다.</p><ol><li><em>작업 관리자</em> 오픈(작업 표시줄을 마우스 오른쪽 버튼으로 클릭하고 <strong>작업 관리자</strong> 선택) 합니다.</li><li>프로세스 탭과 로컬 <strong>qgroundcontrol.exe</strong>로 전환합니다.</li><li><strong>groundcontrol.exe</strong>를 마우스 오른쪽 버튼으로 클릭하고 <strong>덤프 파일 만들기</strong>를 선택합니다.</li><li>공용 위치에 덤프 파일을 배치합니다.</li><li>GitHub 문제에서 <strong>.dmp</strong> 파일 및 위의 세부 정보에 대한 링크를 추가합니다.</li></ol><h3 id="기능-요청" tabindex="-1">기능 요청 <a class="header-anchor" href="#기능-요청" aria-label="Permalink to &quot;기능 요청&quot;">​</a></h3><p>지원 포럼에서 토론한 후 기능 요청을 생성하라는 지시를 받은 경우에는 필수 세부 정보에 대한 유용한 정보가 있는 &quot;기능 요청&quot; 템플릿을 사용하십시오.</p><h2 id="문제-해결" tabindex="-1">문제 해결 <a class="header-anchor" href="#문제-해결" aria-label="Permalink to &quot;문제 해결&quot;">​</a></h2><p>문제 해결 정보는 <a href="./../troubleshooting/">여기</a>를 참고하십시오.</p><h3 id="콘솔-로깅" tabindex="-1">콘솔 로깅 <a class="header-anchor" href="#콘솔-로깅" aria-label="Permalink to &quot;콘솔 로깅&quot;">​</a></h3><p>_콘솔 로그_는 <em>QGroundControl</em> 문제 진단에 유용합니다. 자세한 내용은 <a href="./../settings_view/console_logging.html">콘솔 로깅</a>를 참고하십시오.</p><h2 id="이-문서-개선-작업을-도와주십시오" tabindex="-1">이 문서 개선 작업을 도와주십시오. <a class="header-anchor" href="#이-문서-개선-작업을-도와주십시오" aria-label="Permalink to &quot;이 문서 개선 작업을 도와주십시오.&quot;">​</a></h2><p><em>QGroundControl</em> 자체와 마찬가지로 사용자 가이드는 사용자가 만들고 GitBook을 지원하는 오픈 소스입니다. 수정 및/또는 업데이트에 대한 가이드에 대한 <a href="https://github.com/mavlink/qgc-user-guide/pulls" target="_blank" rel="noreferrer">풀 리퀘스트</a>를 환영합니다.</p>',25),l=[n];function i(s,d,u,h,c,p){return r(),e("div",null,l)}const m=o(t,[["render",i]]);export{_ as __pageData,m as default};