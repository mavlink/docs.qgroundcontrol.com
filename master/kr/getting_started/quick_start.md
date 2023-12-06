# QGroundControl은

첫단계는 QGroundControl [다운로드](../getting_started/download_and_install.md)와 설치하기입니다. 아래 화면은 연결된 비행체가 없는 상태입니다.

![Boot to fly icon](../../assets/quickstart/BootToFly.jpg)
<br>

![Settings view icon](../../assets/toolbar/toolbar_view_select_settings.jpg) **[Settings](../SettingsView/SettingsView.md)**
<br>QGroundControl 어플리케이션을 설정

![Setup view icon](../../assets/toolbar/toolbar_view_select_setup.jpg) **[Setup](../SetupView/SetupView.md)**
<br>비행체 설정 및 튜닝

![Plan view icon](../../assets/toolbar/toolbar_view_select_plan.jpg) **[Plan](../PlanView/PlanView.md)**
<br>자동 mission 생성

![Fly view icon](../../assets/toolbar/toolbar_view_select_fly.jpg) **[Fly](../FlyView/FlyView.md)**
<br>비행체가 비행하는 동안 감시(스트리밍 비디오 포함)


![Analyse view icon](../../assets/toolbar/toolbar_view_select_analyse.jpg) **Analyse**
<br>Download logs, geotag images from a survey mission, access the MAVLink console.

# 드론에 연결하기

대부분 경우 USB, 텔레메트리 라디오, WiFi를 통해 직접 비행체에 연결하면, 추가적인 작업이 필요없습니다. QGroundControl이 여러분의 비행체를 탐지하고 자동으로 연결합니다.

기본적으로 QGroundControl은 여기서 보는 바와 같이 Fly view가 나타납니다. 만약 여러분의 비행체가 추가 셋업이 필요한 경우, 자동으로 Setup view가 나타날 수도 있습니다.

![Connection icon](../../assets/quickstart/ConnectedVehicle.jpg)

연결되면 도구바는 추가 정보를 포함하게 됩니다. 비행체에 대해서 하이레벨 상태를 보여줍니다. 이런 아이템들 중에 하나를 클릭하면 더 상세한 정보를 볼 수 있습니다.

![Messages icon](../../assets/toolbar/toolbar_status_message.jpg) **Vehicle Messages**
<br>비행체로부터 메시지의 드롭다운을 보여주기 위해서 클릭. 중요한 메시지가 있다면 Yield 표시로 변경됨.

![GPS icon](../../assets/toolbar/toolbar_status_gps.jpg) **GPS Status**
<br>위성 갯수와 현재 hdop을 표시

![RC icon](../../assets/toolbar/toolbar_status_rc.jpg) **RC RSSI**
<br>RS 신호 강도 정보 표시

![Telemetry icon](../../assets/toolbar/toolbar_status_telemetry.jpg) **Telemetry RSSI**
<br>텔레메트리 신호 강도 정보 표시

![Battery icon](../../assets/toolbar/toolbar_status_battery.jpg) **Battery**
<br>남은 배터리 퍼센트로 표시

![Flight mode icon](../../assets/toolbar/toolbar_status_flight_mode.jpg) **Flight Mode**
<br>현재 비행모드 표시. 비행모드를 변경하기 위해 클릭
