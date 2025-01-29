"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81084],{88868:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>i,data:()=>a});var n=t(6254);const d={},i=(0,t(32991).A)(d,[["render",function(e,o){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[o[7]||(o[7]=(0,n.Lk)("h1",{id:"tuya-za03",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#tuya-za03"},[(0,n.Lk)("span",null,"Tuya ZA03")])],-1)),(0,n.Lk)("table",null,[o[6]||(o[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[o[2]||(o[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"ZA03")],-1)),(0,n.Lk)("tr",null,[o[1]||(o[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,n.k6)((()=>o[0]||(o[0]=[(0,n.eW)("Tuya")]))),_:1})])]),o[3]||(o[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Siren alarm")],-1)),o[4]||(o[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"alarm, volume, ringtone, duration, linkquality")],-1)),o[5]||(o[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZA03.png",alt:"Tuya ZA03"})])],-1))])]),o[8]||(o[8]=(0,n.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary"><span>Alarm (binary)</span></a></h3><p>Sound the alarm. Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> alarm is ON, if <code>OFF</code> OFF.</p><h3 id="volume-enum" tabindex="-1"><a class="header-anchor" href="#volume-enum"><span>Volume (enum)</span></a></h3><p>Value can be found in the published state on the <code>volume</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;volume&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>, <code>mute</code>.</p><h3 id="ringtone-enum" tabindex="-1"><a class="header-anchor" href="#ringtone-enum"><span>Ringtone (enum)</span></a></h3><p>Value can be found in the published state on the <code>ringtone</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ringtone&quot;: NEW_VALUE}</code>. The possible values are: <code>ringtone 1</code>, <code>ringtone 2</code>, <code>ringtone 3</code>, <code>ringtone 4</code>, <code>ringtone 5</code>, <code>ringtone 6</code>, <code>ringtone 7</code>, <code>ringtone 8</code>, <code>ringtone 9</code>, <code>ringtone 10</code>, <code>ringtone 11</code>, <code>ringtone 12</code>, <code>ringtone 13</code>, <code>ringtone 14</code>, <code>ringtone 15</code>, <code>ringtone 16</code>, <code>ringtone 17</code>, <code>ringtone 18</code>, <code>ringtone 19</code>, <code>ringtone 20</code>, <code>ringtone 21</code>, <code>ringtone 22</code>, <code>ringtone 23</code>, <code>ringtone 24</code>, <code>ringtone 25</code>, <code>ringtone 26</code>, <code>ringtone 27</code>, <code>ringtone 28</code>, <code>ringtone 29</code>, <code>ringtone 30</code>, <code>ringtone 31</code>, <code>ringtone 32</code>.</p><h3 id="duration-numeric" tabindex="-1"><a class="header-anchor" href="#duration-numeric"><span>Duration (numeric)</span></a></h3><p>How long the alarm sounds for when triggered. Value can be found in the published state on the <code>duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;duration&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>380</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11))])}]]),a=JSON.parse('{"path":"/devices/ZA03.html","title":"Tuya ZA03 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZA03 control via MQTT","description":"Integrate your Tuya ZA03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-09-07T11:16:42.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Alarm (binary)","slug":"alarm-binary","link":"#alarm-binary","children":[]},{"level":3,"title":"Volume (enum)","slug":"volume-enum","link":"#volume-enum","children":[]},{"level":3,"title":"Ringtone (enum)","slug":"ringtone-enum","link":"#ringtone-enum","children":[]},{"level":3,"title":"Duration (numeric)","slug":"duration-numeric","link":"#duration-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1738180505000},"filePathRelative":"devices/ZA03.md"}')}}]);