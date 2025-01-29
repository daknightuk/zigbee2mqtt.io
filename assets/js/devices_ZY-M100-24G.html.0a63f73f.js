"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2746],{73128:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>s,data:()=>o});var n=i(6254);const a={},s=(0,i(32991).A)(a,[["render",function(e,t){const i=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"tuya-zy-m100-24g",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#tuya-zy-m100-24g"},[(0,n.Lk)("span",null,"Tuya ZY-M100-24G")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"ZY-M100-24G")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"24G MmWave radar human presence motion sensor")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"state, presence, distance, illuminance, motion_sensitivity, presence_sensitivity, max_range, presence_timeout, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZY-M100-24G.png",alt:"Tuya ZY-M100-24G"})])],-1))])]),t[9]||(t[9]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>The standard firmware of this device sends reports every second. This behaviour is not configurable, and can easily <a href="https://github.com/Koenkk/zigbee2mqtt/issues/19045" target="_blank" rel="noopener noreferrer">overwhelm the Zigbee network and cause problems for other devices</a>. A solution to this is to reflash the device with a modified firmware that does not have this problem. Check https://github.com/Andrik45719/ZY-M100 for such a firmware, and instructions on how to flash the device.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',3)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,n.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="state-enum" tabindex="-1"><a class="header-anchor" href="#state-enum"><span>State (enum)</span></a></h3><p>Presence state. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>presence</code>, <code>move</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="distance-numeric" tabindex="-1"><a class="header-anchor" href="#distance-numeric"><span>Distance (numeric)</span></a></h3><p>Target distance. Value can be found in the published state on the <code>distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="motion-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#motion-sensitivity-numeric"><span>Motion sensitivity (numeric)</span></a></h3><p>Motion sensitivity. Value can be found in the published state on the <code>motion_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id="presence-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#presence-sensitivity-numeric"><span>Presence sensitivity (numeric)</span></a></h3><p>Presence sensitivity. Value can be found in the published state on the <code>presence_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id="max-range-numeric" tabindex="-1"><a class="header-anchor" href="#max-range-numeric"><span>Max range (numeric)</span></a></h3><p>Maximum range. Value can be found in the published state on the <code>max_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_range&quot;: NEW_VALUE}</code>. The minimal value is <code>1.5</code> and the maximum value is <code>5.5</code>. The unit of this value is <code>m</code>.</p><h3 id="presence-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#presence-timeout-numeric"><span>Presence timeout (numeric)</span></a></h3><p>Presence timeout. Value can be found in the published state on the <code>presence_timeout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>1500</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20))])}]]),o=JSON.parse('{"path":"/devices/ZY-M100-24G.html","title":"Tuya ZY-M100-24G control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZY-M100-24G control via MQTT","description":"Integrate your Tuya ZY-M100-24G via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-09-01T12:36:44.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"State (enum)","slug":"state-enum","link":"#state-enum","children":[]},{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Distance (numeric)","slug":"distance-numeric","link":"#distance-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Motion sensitivity (numeric)","slug":"motion-sensitivity-numeric","link":"#motion-sensitivity-numeric","children":[]},{"level":3,"title":"Presence sensitivity (numeric)","slug":"presence-sensitivity-numeric","link":"#presence-sensitivity-numeric","children":[]},{"level":3,"title":"Max range (numeric)","slug":"max-range-numeric","link":"#max-range-numeric","children":[]},{"level":3,"title":"Presence timeout (numeric)","slug":"presence-timeout-numeric","link":"#presence-timeout-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1738180505000},"filePathRelative":"devices/ZY-M100-24G.md"}')}}]);