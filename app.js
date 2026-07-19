
const objectives = [
  {
    title:"Property Entrance & Approach",
    intent:"Establish the permanent baseline of how the property is entered and approached before construction activity changes it.",
    questions:["Is the full entrance visible in context?","Can we understand the driveway alignment from the road?","Are nearby features, obstructions, and sight lines documented?"],
    considerations:["Begin wide enough to preserve surrounding context.","Include the transition from public road to private drive.","Avoid vehicles or people blocking key features where practical."],
    capability:"Property Entrance Baseline Obtained",
    text:"The approach and entry condition are now documented for future access, driveway, and construction-logistics discussions.",
    supports:["Driveway refinement","Construction access planning","Before-and-after documentation"]
  },
  {
    title:"Driveway Corridor",
    intent:"Document the existing driveway corridor, grade changes, turns, vegetation, and usable width.",
    questions:["Can we follow the driveway continuously from entrance to clearing?","Are grade changes and tight turns understandable?","Are trees or terrain constraints visible?"],
    considerations:["Use a slow forward pass and a higher contextual pass.","Keep enough altitude to reveal the full corridor.","Capture areas where trailers or construction vehicles may struggle."],
    capability:"Driveway Corridor Reconnaissance Complete",
    text:"Existing access conditions are now available to support circulation and construction-logistics planning.",
    supports:["Trailer maneuvering study","Construction vehicle access","Future driveway improvements"]
  },
  {
    title:"Whole-Property Context",
    intent:"Capture the parcel as a connected system rather than a collection of isolated locations.",
    questions:["Can we understand the parcel’s overall shape and orientation?","Are the primary clearing, driveway, wooded areas, and western edge visible together?","Does the footage provide enough context to explain the site to someone who has never visited?"],
    considerations:["Use one high, slow orbit or broad perimeter pass.","Preserve orientation by avoiding rapid yaw movements.","Include recognizable landmarks whenever possible."],
    capability:"Whole-Property Context Package Complete",
    text:"A site-wide visual reference now exists to orient future design, lender, builder, and consultant discussions.",
    supports:["Site-planning conversations","Consultant orientation","Project baseline archive"]
  },
  {
    title:"Primary Home Site",
    intent:"Collect reconnaissance supporting future home siting and primary-floor-height decisions.",
    questions:["Can we understand the usable building area?","Can we see how the terrain falls away around the proposed location?","Is the relationship between the home site and western view documented?","Would this support a future grading discussion?"],
    considerations:["Include surrounding terrain—not only the clearing.","Use at least one orbit or opposing-angle pair.","Watch for trees hiding grade transitions.","Include enough foreground and horizon to evaluate elevation."],
    capability:"Baseline Primary Home Floor-Height Input Obtained",
    text:"Reconnaissance now provides initial visual input for evaluating house placement, finished-floor elevation, and view clearance.",
    supports:["Home siting study","Finished-floor elevation study","Preliminary grading concepts","View-corridor refinement"]
  },
  {
    title:"Western View Corridor",
    intent:"Document what can be seen toward the west from relevant elevations and positions near the proposed home site.",
    questions:["At what relative height does the western view begin to open?","Which trees or neighboring features obstruct the view?","Can we compare multiple possible viewing elevations?"],
    considerations:["Pause at distinct elevations rather than climbing continuously.","Keep the horizon level.","Include foreground trees so obstructions remain understandable.","Avoid judging the view from a single position."],
    capability:"Western View-Corridor Input Obtained",
    text:"The team now has visual evidence to compare view access across possible home positions and floor elevations.",
    supports:["Main-floor elevation decision","Window and deck orientation","View-obstruction analysis"]
  },
  {
    title:"Proposed Shop Area",
    intent:"Document the lower site area being considered for the detached shop and related vehicle access.",
    questions:["Is the usable footprint understandable?","Can we see slope, vegetation, and access constraints?","Is the relationship to the driveway and septic reserve clear?"],
    considerations:["Capture both a plan-like overhead and a lower oblique view.","Include likely approach paths for trucks and trailers.","Do not crop out surrounding constraints."],
    capability:"Shop-Site Reconnaissance Complete",
    text:"Initial visual inputs now exist for evaluating shop placement, access, and relationship to site constraints.",
    supports:["Shop siting study","Trailer-access planning","Utility-routing concepts"]
  },
  {
    title:"Septic & Reserve Context",
    intent:"Create a visual record of the known septic and reserve areas in relationship to likely building locations.",
    questions:["Can we understand where development must avoid conflict?","Are the home site, shop area, and access routes visible in relation to the septic areas?","Is additional field marking needed for a future mission?"],
    considerations:["Use visible landmarks to preserve location context.","Do not imply precise boundaries unless they are physically marked.","Capture enough surrounding area to show relationships."],
    capability:"Septic-Constraint Context Established",
    text:"The project now has a visual reference for discussing development concepts without losing sight of protected septic areas.",
    supports:["Conflict review","Home and shop siting","Preliminary utility routing"]
  },
  {
    title:"Terrain & Drainage Indicators",
    intent:"Identify visible grade transitions, low areas, runoff paths, and terrain features that may influence development.",
    questions:["Where does the ground appear to rise or fall?","Are low areas or likely drainage paths visible?","Which areas may require closer survey or engineering attention?"],
    considerations:["Use oblique angles that reveal slope.","Look for vegetation changes, erosion, standing water, or channels.","Treat observations as indicators—not surveyed conclusions."],
    capability:"Preliminary Terrain & Drainage Inputs Obtained",
    text:"Visible terrain and drainage indicators are now documented for early grading and site-planning conversations.",
    supports:["Topographic survey planning","Preliminary grading concepts","Drainage questions for professionals"]
  },
  {
    title:"Vegetation & Obstruction Baseline",
    intent:"Document major trees, dense vegetation, and visual obstructions that may affect siting, views, access, or clearing.",
    questions:["Are major tree groups and dense areas understandable?","Which vegetation affects the westward view?","Are potential access or construction obstructions documented?"],
    considerations:["Capture tree groups in relationship to recognizable site features.","Avoid relying on straight-down imagery alone.","Include canopy and trunk-area context where practical."],
    capability:"Vegetation & Obstruction Baseline Complete",
    text:"Major vegetation and obstruction conditions are now recorded before clearing or site disturbance.",
    supports:["Tree-preservation discussion","View optimization","Clearing-scope planning"]
  },
  {
    title:"Closing Site Overview",
    intent:"Finish with a deliberate overview that ties the day’s reconnaissance into one coherent visual record.",
    questions:["Does this final pass clearly summarize the property?","Are the proposed home and shop areas understandable in one sequence?","Would this footage help explain the project to a lender, builder, or family member?"],
    considerations:["Use a slow, stable path.","Favor clarity over cinematic movement.","Include the entrance, home area, shop area, and western context if practical."],
    capability:"Mission 001 Reconnaissance Package Complete",
    text:"The initial property baseline is now sufficiently documented to support the next round of planning and professional conversations.",
    supports:["Existing-conditions archive","Early site-planning decisions","Builder and lender orientation","Mission 002 planning"]
  }
];

let state = JSON.parse(localStorage.getItem("monticellops_m001") || "null") || {
  current:0, completed:[], extraPasses:0, perspectiveChanges:0,
  started:null, finished:null, reflection:""
};

const $ = id => document.getElementById(id);
function save(){ localStorage.setItem("monticellops_m001", JSON.stringify(state)); }
function show(id){
  ["briefScreen","objectiveScreen","capabilityScreen","debriefScreen"].forEach(x=>$(x).classList.add("hidden"));
  $(id).classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}
function authorizeMission(){
  state={current:0,completed:[],extraPasses:0,perspectiveChanges:0,started:new Date().toISOString(),finished:null,reflection:""};
  save(); renderObjective(); show("objectiveScreen");
}
function resumeMission(){
  if(state.finished){ renderDebrief(); show("debriefScreen"); }
  else if(state.started){ renderObjective(); show("objectiveScreen"); }
  else authorizeMission();
}
function renderObjective(){
  const o=objectives[state.current];
  $("objectiveCount").textContent=`Objective ${state.current+1} of ${objectives.length}`;
  $("progressBar").style.width=`${(state.current/objectives.length)*100}%`;
  $("objectiveTitle").textContent=o.title;
  $("objectiveIntent").textContent=o.intent;
  $("questionsList").innerHTML=o.questions.map(x=>`<li>${x}</li>`).join("");
  $("considerationsList").innerHTML=o.considerations.map(x=>`<li>${x}</li>`).join("");
  $("assessmentBanner").className="banner hidden";
}
function requestPass(){
  state.extraPasses++; save();
  $("assessmentBanner").className="banner warnb";
  $("assessmentBanner").textContent="Commander direction recorded: one additional pass before reassessment.";
}
function requestPerspective(){
  state.perspectiveChanges++; save();
  $("assessmentBanner").className="banner badb";
  $("assessmentBanner").textContent="Commander direction recorded: change position, altitude, angle, or method before reassessment.";
}
function completeObjective(){
  if(!state.completed.includes(state.current)) state.completed.push(state.current);
  save();
  const o=objectives[state.current];
  $("capabilityTitle").textContent=o.capability;
  $("capabilityText").textContent=o.text;
  $("supportsList").innerHTML=o.supports.map(x=>`<li>${x}</li>`).join("");
  show("capabilityScreen");
}
function continueMission(){
  if(state.current < objectives.length-1){
    state.current++; save(); renderObjective(); show("objectiveScreen");
  } else {
    state.finished=new Date().toISOString(); save(); renderDebrief(); show("debriefScreen");
  }
}
function renderDebrief(){
  $("allCapabilities").innerHTML=objectives.map(o=>`<li>${o.capability}</li>`).join("");
  let duration="Not recorded";
  if(state.started && state.finished){
    const mins=Math.max(1,Math.round((new Date(state.finished)-new Date(state.started))/60000));
    duration=`${mins} minute${mins===1?"":"s"}`;
  }
  $("missionStats").innerHTML=
    `<strong>${objectives.length}</strong> recon objectives completed<br>`+
    `<strong>${state.extraPasses}</strong> additional pass${state.extraPasses===1?"":"es"} directed<br>`+
    `<strong>${state.perspectiveChanges}</strong> perspective change${state.perspectiveChanges===1?"":"s"} directed<br>`+
    `<strong>${duration}</strong> mission duration`;
  $("reflection").value=state.reflection||"";
}
function saveDebrief(){
  state.reflection=$("reflection").value.trim(); save();
  $("archiveStatus").textContent="Mission debrief archived on this device.";
}
function downloadLog(){
  state.reflection=$("reflection").value.trim(); save();
  const lines=[
    "MONTICELLOPS — MISSION 001","Existing Conditions Reconnaissance","",
    "Mission Commander: Nicole","Recon Operations: Chris",
    `Started: ${state.started||""}`,`Completed: ${state.finished||""}`,"",
    "CAPABILITIES ESTABLISHED",...objectives.map((o,i)=>`${i+1}. ${o.capability}`),"",
    `Additional passes directed: ${state.extraPasses}`,
    `Perspective changes directed: ${state.perspectiveChanges}`,"","MISSION REFLECTION",
    state.reflection||"(none entered)"
  ];
  const blob=new Blob([lines.join("\n")],{type:"text/plain"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a"); a.href=url; a.download="MonticellOPS_Mission_001_Log.txt"; a.click();
  URL.revokeObjectURL(url);
}
function resetMission(){
  if(confirm("Reset Mission 001 and erase its saved progress on this device?")){
    localStorage.removeItem("monticellops_m001");
    state={current:0,completed:[],extraPasses:0,perspectiveChanges:0,started:null,finished:null,reflection:""};
    show("briefScreen");
  }
}
window.authorizeMission=authorizeMission;
window.resumeMission=resumeMission;
window.requestPass=requestPass;
window.requestPerspective=requestPerspective;
window.completeObjective=completeObjective;
window.continueMission=continueMission;
window.saveDebrief=saveDebrief;
window.downloadLog=downloadLog;
window.resetMission=resetMission;

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js"));
}
