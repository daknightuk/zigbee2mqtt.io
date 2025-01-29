"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[97542],{49994:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>o,data:()=>l});var a=i(6254);const n={},o=(0,i(32991).A)(n,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"tuya-mir-he200-ty",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-mir-he200-ty"},[(0,a.Lk)("span",null,"Tuya MIR-HE200-TY")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"MIR-HE200-TY")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Human presence sensor with fall function")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"illuminance, presence, occupancy, motion_speed, motion_direction, radar_sensitivity, radar_scene, tumble_switch, fall_sensitivity, tumble_alarm_time, fall_down_status, static_dwell_alarm, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MIR-HE200-TY.png",alt:"Tuya MIR-HE200-TY"})])],-1))])]),t[9]||(t[9]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Factory resetting by pushing the &quot;Reset-Button&quot; longer than 5 seconds or by using Touchlink factory reset.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',4)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="motion-speed-numeric" tabindex="-1"><a class="header-anchor" href="#motion-speed-numeric"><span>Motion speed (numeric)</span></a></h3><p>Speed of movement. Value can be found in the published state on the <code>motion_speed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="motion-direction-enum" tabindex="-1"><a class="header-anchor" href="#motion-direction-enum"><span>Motion direction (enum)</span></a></h3><p>direction of movement from the point of view of the radar. Value can be found in the published state on the <code>motion_direction</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>standing_still</code>, <code>moving_forward</code>, <code>moving_backward</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric"><span>Radar sensitivity (numeric)</span></a></h3><p>Sensitivity of the radar. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>.</p><h3 id="radar-scene-enum" tabindex="-1"><a class="header-anchor" href="#radar-scene-enum"><span>Radar scene (enum)</span></a></h3><p>Presets for sensitivity for presence and movement. Value can be found in the published state on the <code>radar_scene</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_scene&quot;: NEW_VALUE}</code>. The possible values are: <code>default</code>, <code>area</code>, <code>toilet</code>, <code>bedroom</code>, <code>parlour</code>, <code>office</code>, <code>hotel</code>.</p><h3 id="tumble-switch-enum" tabindex="-1"><a class="header-anchor" href="#tumble-switch-enum"><span>Tumble switch (enum)</span></a></h3><p>Tumble status switch. Value can be found in the published state on the <code>tumble_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tumble_switch&quot;: NEW_VALUE}</code>. The possible values are: <code>ON</code>, <code>OFF</code>.</p><h3 id="fall-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#fall-sensitivity-numeric"><span>Fall sensitivity (numeric)</span></a></h3><p>Fall sensitivity of the radar. Value can be found in the published state on the <code>fall_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fall_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id="tumble-alarm-time-numeric" tabindex="-1"><a class="header-anchor" href="#tumble-alarm-time-numeric"><span>Tumble alarm time (numeric)</span></a></h3><p>Tumble alarm time. Value can be found in the published state on the <code>tumble_alarm_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tumble_alarm_time&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>5</code>. The unit of this value is <code>min</code>.</p><h3 id="fall-down-status-enum" tabindex="-1"><a class="header-anchor" href="#fall-down-status-enum"><span>Fall down status (enum)</span></a></h3><p>Fall down status. Value can be found in the published state on the <code>fall_down_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>maybe_fall</code>, <code>fall</code>.</p><h3 id="static-dwell-alarm-text" tabindex="-1"><a class="header-anchor" href="#static-dwell-alarm-text"><span>Static dwell alarm (text)</span></a></h3><p>Static dwell alarm. Value can be found in the published state on the <code>static_dwell_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',28))])}]]),l=JSON.parse('{"path":"/devices/MIR-HE200-TY.html","title":"Tuya MIR-HE200-TY control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya MIR-HE200-TY control via MQTT","description":"Integrate your Tuya MIR-HE200-TY via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Motion speed (numeric)","slug":"motion-speed-numeric","link":"#motion-speed-numeric","children":[]},{"level":3,"title":"Motion direction (enum)","slug":"motion-direction-enum","link":"#motion-direction-enum","children":[]},{"level":3,"title":"Radar sensitivity (numeric)","slug":"radar-sensitivity-numeric","link":"#radar-sensitivity-numeric","children":[]},{"level":3,"title":"Radar scene (enum)","slug":"radar-scene-enum","link":"#radar-scene-enum","children":[]},{"level":3,"title":"Tumble switch (enum)","slug":"tumble-switch-enum","link":"#tumble-switch-enum","children":[]},{"level":3,"title":"Fall sensitivity (numeric)","slug":"fall-sensitivity-numeric","link":"#fall-sensitivity-numeric","children":[]},{"level":3,"title":"Tumble alarm time (numeric)","slug":"tumble-alarm-time-numeric","link":"#tumble-alarm-time-numeric","children":[]},{"level":3,"title":"Fall down status (enum)","slug":"fall-down-status-enum","link":"#fall-down-status-enum","children":[]},{"level":3,"title":"Static dwell alarm (text)","slug":"static-dwell-alarm-text","link":"#static-dwell-alarm-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1738180505000},"filePathRelative":"devices/MIR-HE200-TY.md"}')}}]);